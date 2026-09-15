# KUMA 웹사이트 유지보수 가이드

React · TypeScript · Vite로 만든 KUMA 레이싱 동아리 웹사이트입니다.
문구와 기록은 `src/data`, 화면 구성은 `src/pages`와 `src/sections`에서 관리합니다.

## 실행과 확인

프로젝트 루트에서 실행합니다. 잠금 파일 기준으로 설치하려면 `npm ci`를 사용합니다.

```sh
npm ci
npm run dev
```

개발 서버 주소는 기본 `http://localhost:5173`이며 실제 주소는 터미널 출력을 확인합니다.
의존성을 새로 추가하거나 변경할 때는 `npm install`을 사용합니다.
Windows PowerShell에서 `npm.ps1` 실행 정책 오류가 나면 `npm.cmd ci`, `npm.cmd run dev`처럼 `.cmd`를 붙입니다.

| 명령 | 역할 |
| --- | --- |
| `npm run dev` | 화면 개발 서버와 로컬 문의 API 실행 |
| `npm run lint` | Oxlint로 코드 검사 |
| `npm run build` | TypeScript 검사 후 `dist/`에 배포용 화면 생성 |
| `npm run preview` | 빌드된 화면 미리보기. API 서버는 실행하지 않음 |

## 코드 역할 지도

```text
src/main.tsx                 React 실행 및 공통 CSS 로드
└─ src/App.tsx               URL에 따라 홈 또는 /gallery 선택
   └─ src/pages/             페이지 구성 및 페이지가 공유하는 상태
      ├─ HomePage.tsx        홈 섹션 순서, 선택 차량, 상세 모달 상태
      └─ GalleryPage.tsx     연도별 사진 필터와 빈 목록 안내

src/sections/               소개·차량·뉴스·후원·문의 등 홈의 개별 영역
src/components/             헤더·푸터·섹션 제목·상세 패널·모달
src/data/                   문구·메뉴·차량·사진·후원사·연락처 데이터
src/hooks/                  카운트다운·문의 전송·Instagram 조회 상태
src/utils/countdown.ts      남은 시간 계산
src/index.css               공통 CSS 진입점과 페이지 공통 동작
src/styles/                 Instagram·스폰서 스크롤 스타일
public/cars/                차량 및 갤러리 사진
public/sponsors/            후원사 로고
api/                        배포 환경에서 실행하는 서버 API 함수
server/                     로컬 문의 API 연결과 공통 응답 타입
vite.config.ts              개발 서버 및 환경 변수 로드 설정
tailwind.config.js          racing 색상과 Tailwind 설정
```

홈은 `HomePage → sections → components` 순서로 읽으면 화면과 코드를 대응하기 쉽습니다.
섹션별 문구는 연결된 `data` 파일에서, API 호출과 타이머는 연결된 `hooks` 파일에서 확인합니다.

## 수정 목적별 위치

| 바꾸려는 내용 | 수정할 파일 |
| --- | --- |
| 홈 섹션 순서, 상세 모달 연결 | [HomePage.tsx](src/pages/HomePage.tsx) |
| URL별 페이지 선택 | [App.tsx](src/App.tsx) |
| 메뉴 이름·순서·링크, 차량 공개 날짜 | [site.ts](src/data/site.ts) |
| 상단 메뉴와 모바일 메뉴 모양 | [SiteHeader.tsx](src/components/SiteHeader.tsx) |
| 첫 화면 티저 문구·이미지 | [HeroSection.tsx](src/sections/HeroSection.tsx) |
| 팀 소개 문단 | [AboutKumaSection.tsx](src/sections/AboutKumaSection.tsx) |
| 연도별 차량 이름·사진·제원 | [specs.ts](src/data/specs.ts) |
| 차량 선택 카드 / 상세 제원 배치 | [VehicleSpecsSection.tsx](src/sections/VehicleSpecsSection.tsx) / [VehicleDetailPanel.tsx](src/components/VehicleDetailPanel.tsx) |
| 성과·순위·성과 상세 수치 | [achievements.ts](src/data/achievements.ts) |
| 뉴스 날짜·제목·본문 | [news.ts](src/data/news.ts) |
| 대표 사진·연도별 전체 사진 | [gallery.ts](src/data/gallery.ts) |
| 갤러리 페이지 배치 | [GalleryPage.tsx](src/pages/GalleryPage.tsx) |
| 후원사 이름·로고·링크·후원 혜택 | [sponsors.ts](src/data/sponsors.ts) |
| 후원사 목록·로고 표시·PDF 버튼 | [SponsorshipSection.tsx](src/sections/SponsorshipSection.tsx) |
| 연락처·담당자·문의 양식 문구 | [contact.ts](src/data/contact.ts) |
| 문의 전송 상태 / 서버 검증·메일 발송 | [useContactForm.ts](src/hooks/useContactForm.ts) / [contact.ts](api/contact.ts) |
| Instagram 계정 링크·기본 게시물 | [instagram.ts](src/data/instagram.ts) |
| Instagram 조회 / 서버 응답 변환 | [useInstagramFeed.ts](src/hooks/useInstagramFeed.ts) / [instagram.ts](api/instagram.ts) |
| 공통 제목 / 하단 문구 | [SectionHeader.tsx](src/components/SectionHeader.tsx) / [SiteFooter.tsx](src/components/SiteFooter.tsx) |
| 강조색·배경색 / 공통 CSS | [tailwind.config.js](tailwind.config.js) / [index.css](src/index.css) |
| 스크롤 속도·타일 크기 | [instagram.css](src/styles/instagram.css) / [sponsors.css](src/styles/sponsors.css) |

`tailwind.config.js`의 `theme.extend.colors.racing`에서 `green`, `blue`, `dark`, `card`를 바꾸면 대응하는 Tailwind 색상 클래스에 반영됩니다.
`site.ts`의 `VEHICLE_REVEAL_DATE`는 현재 `2027-08-27T00:00:00`이며 방문자 기기의 현지 시간 기준입니다.
공개 날짜를 수정해도 첫 화면의 연도·차량명 문구는 자동 변경되지 않으므로 `HeroSection.tsx`도 함께 확인합니다.

## 차량 연도 추가 예시

[specs.ts](src/data/specs.ts)의 `VEHICLE_DATABASE`에 다음과 같은 항목을 추가합니다.
예시 값은 실제 제원으로 바꾸고, 사진 파일을 `public/cars/`에 넣습니다.

```ts
"2027": {
  season: "2027",
  image: "/cars/2027-test.jpg",
  carNumber: "확인 후 입력",
  modelName: "확인 후 입력",
  tagline: "새 차량 소개",
  telemetry: {
    curbWeight: "확인 후 입력",
    maxPower: "확인 후 입력",
    topSpeed: "확인 후 입력",
    downforce: "확인 후 입력",
  },
  specs: [{ label: "엔진", value: "확인 후 입력" }],
},
```

연도 목록과 `VehicleYear` 타입은 데이터에서 만들어지며, 최신 연도가 처음 선택됩니다.
성과 기록은 별도이므로 필요한 경우 [achievements.ts](src/data/achievements.ts)의 `ACHIEVEMENTS`에도 추가합니다.
성과의 `season`은 차량 데이터에 존재하는 연도를 사용합니다.

## 갤러리 연도 추가 예시

[gallery.ts](src/data/gallery.ts)의 `PHOTO_ARCHIVE`에 연도를 추가하면 필터에도 최신순으로 표시됩니다.

```ts
"2027": [
  {
    src: "/cars/2027-test.jpg",
    title: "Test Day",
    category: "Vehicle Testing",
  },
],
```

`"2027": []`처럼 사진이 없으면 준비 중 안내가 표시됩니다.
홈의 대표 사진은 같은 파일의 `GALLERY_PREVIEWS`에서 따로 선택합니다.
이미지 경로에 `public`을 붙이지 않습니다. 후원사 로고도 `/sponsors/파일명` 형식을 사용하며, 로고가 없으면 후원사 이름만 표시됩니다.

## API와 환경 변수

[.env.example](.env.example)을 `.env.local`로 복사한 뒤 필요한 값을 설정합니다.
비밀 키는 서버 환경 변수에만 보관하고, 브라우저에 포함되는 `VITE_` 접두사를 사용하지 않습니다.

| 변수 | 용도 |
| --- | --- |
| `INSTAGRAM_ACCESS_TOKEN` | 연결된 Instagram 프로페셔널 계정의 게시물 조회 토큰 |
| `RESEND_API_KEY` | 문의 메일 발송 인증 키 |
| `CONTACT_TO_EMAIL` | 실제 문의 메일 수신 주소 |
| `RESEND_FROM_EMAIL` | 메일 발신 주소. 운영 시 인증된 도메인 사용 |

`onboarding@resend.dev` 발신자 예시는 테스트용입니다. 화면에 표시되는 이메일은 [src/data/contact.ts](src/data/contact.ts)에서 별도로 관리합니다.
Vite 개발 서버는 [server/contact-middleware.ts](server/contact-middleware.ts)를 통해 `POST /api/contact`만 연결합니다. 메일 설정이 없으면 문의 API는 `503`을 반환합니다.
개발 서버와 `preview`에는 Instagram API가 연결되어 있지 않아 기본 피드를 유지합니다. 배포 환경에서도 API 실패·빈 응답 시 기본 피드를 유지합니다.
`api/` 함수는 Vercel 등 해당 함수를 실행하는 서버 배포 환경이 필요하며, `dist/` 정적 파일만으로는 문의·Instagram API가 실행되지 않습니다.
정적 호스팅에서 `/gallery`를 직접 열려면 해당 경로가 `index.html`을 제공하도록 fallback 설정이 필요합니다.

## 확인이 필요한 현재 콘텐츠

- [contact.ts](src/data/contact.ts): 팀장·회장이 모두 `홍길동`, 전화번호가 `010-1234-5678`로 되어 있습니다.
- [specs.ts](src/data/specs.ts) / [achievements.ts](src/data/achievements.ts): 2026년 요약은 `100 ps`·`201 km/h`, 상세 제원 출력은 `50 ps`, 성과 기록은 `50 PS`·`131 km/h`입니다. 현재 수치를 유지했으므로 실제 기록 확인 후 맞춰야 합니다.
- [SponsorshipSection.tsx](src/sections/SponsorshipSection.tsx): 제안서 PDF가 등록되지 않아 다운로드 버튼이 비활성 상태입니다.

코드 정리 후 lint·TypeScript·빌드와 주요 영역의 정적 렌더링 비교, 서버 API 모의 검증을 통과했습니다.
브라우저 자동화 연결이 없어 실제 화면의 시각 검증은 수행하지 못했습니다. 화면을 수정한 뒤에는 홈·갤러리·모바일 메뉴·차량 선택·문의 결과를 브라우저에서 확인합니다.
