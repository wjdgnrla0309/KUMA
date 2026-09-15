/** API와 기본 피드가 공통으로 사용하는 게시물 형식입니다. */
export type InstagramPost = {
  id: string;
  label: string;
  url: string;
  image: string;
};

export const INSTAGRAM_URL =
  "https://www.instagram.com/fs_team_kuma?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

// API가 설정되지 않았거나 요청에 실패하면 아래 게시물을 표시합니다.
// 게시물 추가·교체 시 id, 링크(url), 이미지(image)를 함께 수정합니다.
export const INSTAGRAM_FEED: InstagramPost[] = [
  {
    id: "DYejgSRkl2H",
    label: "KUMA 2026 vehicle development",
    url: "https://www.instagram.com/p/DYejgSRkl2H/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDYejgSRkl2H%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DTg0iYAEqiw",
    label: "KUMA 2026 season story",
    url: "https://www.instagram.com/p/DTg0iYAEqiw/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDTg0iYAEqiw%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DQs4zM_kkpY",
    label: "KUMA sponsor story",
    url: "https://www.instagram.com/p/DQs4zM_kkpY/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDQs4zM_kkpY%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DIk6cFVSNGL",
    label: "KUMA engineering support",
    url: "https://www.instagram.com/p/DIk6cFVSNGL/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDIk6cFVSNGL%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DGPmxrsywBW",
    label: "KUMA Ansys partnership",
    url: "https://www.instagram.com/p/DGPmxrsywBW/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDGPmxrsywBW%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DBEU6BiyBPn",
    label: "KUMA team story",
    url: "https://www.instagram.com/p/DBEU6BiyBPn/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBEU6BiyBPn%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DBEPeumyn6S",
    label: "KUMA FSK 2024",
    url: "https://www.instagram.com/p/DBEPeumyn6S/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBEPeumyn6S%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DBBxq94SSRE",
    label: "KUMA endurance race",
    url: "https://www.instagram.com/p/DBBxq94SSRE/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBBxq94SSRE%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DBBpp_rS1E1",
    label: "KUMA race preparation",
    url: "https://www.instagram.com/p/DBBpp_rS1E1/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBBpp_rS1E1%2Fmedia%2F%3Fsize%3Dm",
  },
  {
    id: "DBBe7OwyiR4",
    label: "KUMA FSK 2024 inspection",
    url: "https://www.instagram.com/p/DBBe7OwyiR4/",
    image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBBe7OwyiR4%2Fmedia%2F%3Fsize%3Dm",
  },
];
