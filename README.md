# 막힘해결 (www.innerapple.com)

컴퓨터로 뭔가 하다가 막혔을 때 들어오는 익명 니치 가이드 사이트입니다.  
순수 정적 HTML/CSS/JS로 구성되며, **GitHub Pages**에 배포합니다.

- 도메인: `https://www.innerapple.com`
- GitHub Pages 대상: `kjy3776-cmd.github.io` (DNS는 이미 연결됨)
- 저장소에 `CNAME` 파일(`www.innerapple.com`)이 포함되어 있습니다.

## 로컬에서 열기

빌드 도구가 필요 없습니다.

```bash
cd makhim-haegeom
# 방법 1: 아무 정적 서버
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080

# 방법 2: 파일 직접 열기
# index.html 을 브라우저로 열기 (검색·절대경로 /assets 는 서버 권장)
```

## 폴더 구조

```
makhim-haegeom/
├── index.html          # 홈
├── 404.html
├── CNAME               # www.innerapple.com
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── assets/
│   ├── site.css
│   └── site.js         # 클라이언트 검색
└── posts/
    ├── excel-blank-rows.html
    ├── heic-jpg-convert.html
    ├── discord-mic-fix.html
    └── … (예정 글 플레이스홀더)
```

## 새 글 추가하는 방법

1. `posts/` 아래에 `slug.html` 파일을 만듭니다.
2. 기존 발행 글(`excel-blank-rows.html` 등)의 헤더·푸터·SEO 메타·본문 섹션 구조(문제 → 30초 체크 → 단계별 → 안 될 때 → FAQ → 관련글)를 복사해 내용을 바꿉니다.
3. `index.html`의 **최신 글** 또는 **예정 글** 카드에 링크를 추가합니다.
4. `assets/site.js`의 `POSTS` 배열에 `{ title, url, tags, status }`를 추가합니다. (`status`: `"live"` 또는 `"planned"`)
5. `sitemap.xml`에 `https://www.innerapple.com/posts/slug.html` URL을 추가합니다.
6. 스크린샷은 `<p class="screenshot-ph">[스크린샷: …]</p>` 자리 표시를 실제 `<img>`로 교체하면 됩니다.
7. AdSense는 HTML 주석의 `ca-pub-…` 자리를 채운 뒤 주석을 해제합니다. 제휴는 `[제휴링크 자리]` / `.affiliate-slot`에 넣습니다.

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소(예: `kjy3776-cmd/makhim-haegeom` 또는 `kjy3776-cmd.github.io`)에 푸시합니다.
2. 저장소 **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` (또는 `master`), folder: **/ (root)**
3. Custom domain에 `www.innerapple.com` 이 보이면 됩니다. (`CNAME` 파일이 자동 반영)
4. DNS는 이미 `kjy3776-cmd.github.io` 로 연결되어 있다고 가정합니다. 변경이 필요하면 GitHub Docs의 apex/www A·CNAME 가이드를 따르세요.
5. 배포 후 `https://www.innerapple.com/` 과 `sitemap.xml`을 확인합니다.

`.nojekyll` 파일이 있어 Jekyll 처리 없이 정적 파일이 그대로 제공됩니다.

## 분류 (IA)

Windows · 프로그램 · Excel/Office · AI 도구 · 콘텐츠 제작 · 모바일/웹

## 라이선스·운영 메모

- 익명 니치 사이트 — VTuber·쇼핑몰·개인 브랜드 콘텐츠 없음
- 광고·제휴는 각 글에 표기
