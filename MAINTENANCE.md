# 🏎️ KUMA Website 관리 가이드

## 1. 가장 중요한 원칙

일반적인 문구와 목록 수정은 대부분 `src/data/`에서 합니다. 사진 파일은 `public/`에 추가하고 data 파일에서 등록합니다. 디자인이나 기능을 바꿀 때만 `src/components/`, `src/sections/`, `src/pages/`를 수정합니다.

## 2. 📂 수정 위치

| 수정할 내용 | 파일 |
| --- | --- |
| 홈페이지 문구·사진·모집 카드 | `src/data/homepage.ts`, `src/data/site.ts` |
| 공통 페이지 제목·안내 문구 | `src/data/pageCopy.ts` |
| 뉴스 | `src/data/news.ts` |
| 차량 제원 | `src/data/specs.ts` |
| 시즌별 대회·성과 기록 | `src/data/achievements.ts` |
| 홈페이지 대표 사진·연도별 갤러리 | `src/data/gallery.ts` |
| 스폰서·후원 혜택 | `src/data/sponsors.ts` |
| 연락처·문의 폼 문구 | `src/data/contact.ts` |
| Instagram 기본 피드 | `src/data/instagram.ts` |

## 3. 📰 뉴스 추가 방법

`src/data/news.ts`의 `NEWS_ITEMS` 배열 맨 위에 기존 객체를 복사해 추가합니다. 날짜, 이미지 파일명, 제목, 설명을 바꿉니다. 뉴스 이미지는 `public/cars/2026/competition/`에 있는 파일명을 사용합니다.

## 4. 🏁 대회 기록 추가 방법

`src/data/achievements.ts`의 `ACHIEVEMENTS` 배열에 기존 항목을 복사해 추가합니다. 시즌은 `src/data/specs.ts`에 등록된 차량 연도와 맞추고, `category`, `title`, `short`, `rank`, 사진 및 `specs` 값을 실제 기록으로 입력합니다.

## 5. 🚗 차량 정보 수정 방법

`src/data/specs.ts`의 `VEHICLE_DATABASE`에서 해당 연도를 수정합니다. 위쪽 `telemetry` 요약 수치와 아래 `specs` 표의 수치를 함께 확인합니다. 새 차량은 새 연도 항목을 복사해 추가하고 `season`, 이미지 파일명, 모델명, 제원을 바꿉니다.

## 6. 📸 사진 추가 방법

사진 파일은 용도에 맞는 `public/` 하위 폴더에 둡니다. 차량 사진은 `public/cars/`, 대회 갤러리 사진은 `public/cars/2026/competition/`, 스폰서 로고는 `public/sponsors/`입니다. 대회 사진을 추가하면 `src/data/gallery.ts`의 `PHOTO_ARCHIVE["2026"]` 목록에도 등록합니다. 홈페이지 대표 사진은 같은 파일의 `GALLERY_PREVIEWS`에 등록합니다. 차량 이미지는 `src/data/specs.ts`, 성과 사진은 `src/data/achievements.ts`에서 선택합니다.

코드의 이미지 경로에는 `public`을 붙이지 않습니다. 갤러리·차량 이미지는 현재 코드가 `import.meta.env.BASE_URL`을 적용하며, 파일명에 공백과 괄호가 있으면 기존처럼 인코딩합니다.

## 7. 🤝 스폰서 수정 방법

`src/data/sponsors.ts`의 `SPONSOR_LIST`에서 이름, 로고, 링크를 수정합니다. 로고 파일은 `public/sponsors/`에 넣고 `logo: "/sponsors/파일명"`으로 지정합니다. 후원 혜택 문구와 순서는 `SPONSOR_BENEFITS`에서 수정합니다.

## 8. 📬 연락처 수정 방법

`src/data/contact.ts`의 `CONTACT_DETAILS`에서 이메일, 주소, 담당자 및 전화번호를 수정합니다. 입력 항목과 안내 문구는 `CONTACT_FORM`에 있습니다. `name` 같은 필드 이름은 문의 API와 연결되므로 임의로 바꾸지 않습니다.

## 9. 💻 로컬에서 사이트 실행

프로젝트 루트에서 실행합니다. 최초 설치 또는 의존성이 변경된 경우에만 설치합니다.

```powershell
npm.cmd install
```

일반적인 실행 명령:

```powershell
npm.cmd run dev
```

Vite 설정의 기본 주소는 `http://localhost:5173/KUMA/`입니다. 포트가 사용 중이면 터미널에 표시된 주소를 확인합니다.

## 10. 🔍 수정 후 확인

개발 서버에서 화면을 확인하고, 별도 터미널에서 빌드 오류가 없는지 확인합니다.

```powershell
npm.cmd run dev
npm.cmd run build
```

홈페이지, 뉴스, 차량, 대회 기록, 갤러리, 스폰서, 연락처와 사진이 정상 표시되는지 확인합니다.

## 11. 🚀 GitHub 업로드

현재 기본 브랜치는 `main`, 원격 저장소는 `origin`입니다. 먼저 변경 내용을 확인하고, 업로드할 파일만 골라 커밋합니다.

```powershell
git status
git add <업로드할 파일>
git commit -m "Update KUMA website"
git push origin main
```

`git add .`를 사용하기 전에 다른 작업자의 변경이 함께 포함되지 않는지 `git status`로 확인합니다.

## 12. ⚠️ 주의사항

- `import.meta.env.BASE_URL`을 함부로 바꾸지 않습니다. GitHub Pages 배포 경로 `/KUMA/`에 필요합니다.
- `public/cars/` 및 하위 폴더 경로와 파일명을 임의로 바꾸지 않습니다.
- data 파일의 export 이름은 화면 코드에서 사용하므로 임의로 바꾸지 않습니다.
- 디자인 수정이 아니라면 `components/`, `sections/`, `pages/`를 불필요하게 수정하지 않습니다.
- 수정 후 로컬 화면을 확인하고 `npm.cmd run build`를 실행합니다.
