import { useEffect, useState } from "react";

import { INSTAGRAM_FEED } from "../data/instagram";
import type { InstagramPost } from "../data/instagram";

function hasText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isInstagramPost(value: unknown): value is InstagramPost {
  if (typeof value !== "object" || value === null) return false;

  return (
    "id" in value && hasText(value.id) &&
    "label" in value && hasText(value.label) &&
    "url" in value && hasText(value.url) &&
    "image" in value && hasText(value.image)
  );
}

function isInstagramResponse(value: unknown): value is { posts: InstagramPost[]; } {
  return (
    typeof value === "object" &&
    value !== null &&
    "posts" in value &&
    Array.isArray(value.posts) &&
    value.posts.every(isInstagramPost)
  );
}

/** 기본 피드를 먼저 보여주고, 유효한 API 응답을 받으면 최신 게시물로 교체합니다. */
export function useInstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>(INSTAGRAM_FEED);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch("/api/instagram", { signal: controller.signal });
        if (!response.ok) throw new Error("Instagram feed request failed");

        const result: unknown = await response.json();
        if (!isInstagramResponse(result)) throw new Error("Invalid Instagram feed response");

        if (!controller.signal.aborted && result.posts.length > 0) {
          setPosts(result.posts);
        }
      } catch {
        // API 미설정, 네트워크 오류, 빈 응답일 때는 기본 피드를 유지합니다.
      }
    }

    void loadPosts();
    return () => controller.abort();
  }, []);

  return posts;
}
