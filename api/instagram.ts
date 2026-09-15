import type { ApiResponseWithHeaders } from "../server/api-types.js";

/** Instagram Graph API에서 받아오는 원본 게시물 필드입니다. */
type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
};

type InstagramResponse = {
  data?: InstagramMedia[];
};

/** 홈페이지 피드에서 사용하는 게시물 형태입니다. */
type InstagramPost = {
  id: string;
  label: string;
  url: string;
  image: string;
};

const INSTAGRAM_MEDIA_FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink";
const INSTAGRAM_POST_LIMIT = "10";
const INSTAGRAM_CACHE_CONTROL = "s-maxage=900, stale-while-revalidate=3600";

/** 원본 게시물을 카드에 필요한 제목·링크·이미지로 변환합니다. */
function toInstagramPost(post: InstagramMedia): InstagramPost {
  return {
    id: post.id,
    label: post.caption?.split("\n")[0] || "KUMA Racing Team",
    url: post.permalink,
    image: post.media_url || post.thumbnail_url || "",
  };
}

/** 서버 토큰으로 최신 게시물을 조회하고 이미지가 있는 게시물만 반환합니다. */
export default async function handler(
  _request: unknown,
  response: ApiResponseWithHeaders,
): Promise<void> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    response.status(503).json({ error: "Instagram API is not configured" });
    return;
  }

  // 토큰을 브라우저에 노출하지 않고 서버에서 Instagram API를 호출합니다.
  const apiUrl = new URL("https://graph.instagram.com/me/media");
  apiUrl.searchParams.set("fields", INSTAGRAM_MEDIA_FIELDS);
  apiUrl.searchParams.set("limit", INSTAGRAM_POST_LIMIT);
  apiUrl.searchParams.set("access_token", accessToken);

  try {
    const apiResponse = await fetch(apiUrl);
    if (!apiResponse.ok) {
      throw new Error(`Instagram API returned ${apiResponse.status}`);
    }

    const payload = (await apiResponse.json()) as InstagramResponse;
    const posts = (payload.data ?? [])
      .map(toInstagramPost)
      .filter((post) => post.image);

    // CDN에서 15분 캐시하고, 이후 1시간은 기존 응답을 제공하며 갱신합니다.
    response.setHeader("Cache-Control", INSTAGRAM_CACHE_CONTROL);
    response.status(200).json({ posts });
  } catch {
    response.status(502).json({ error: "Unable to load Instagram feed" });
  }
}
