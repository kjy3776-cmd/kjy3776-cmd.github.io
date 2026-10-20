# 2026-10-20 장애인증명서 신규 발행

- 공개 경로: https://www.innerapple.com/posts/disability-certificate-online.html
- 이번 실행: 신규 1편. 완료 시 한국 시간 당일 신규 3편, 개선 2편. 개선은 신규 수에 포함하지 않음.
- 기존 글과 검색 의도 대조 후 등록 장애인 증명서 발급을 별도 주제로 작성. 신규 장애 등록·정도 심사와 구분하고 의료적 판단이나 자격·승인을 보장하지 않음.

## 공식 자료 확인

확인일 2026-10-20. 개인 등록정보를 조회하지 않고 공개 민원 안내만 확인함.

1. https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000273 — 등록 사실 증명, 무료, 즉시(근무시간 내 3시간), 온라인 대리 신청 불가. 페이지 최근 내용 확인일 2024-02-27.
2. https://www.ddm.go.kr/www/contents.do?key=18 — 본인 신분증, 방문 대리 시 위임자·수임자 신분증과 위임장/법정대리인 동의 서식. 지역 사례를 전국 공통 요건으로 확대하지 않음. 수정일 2024-09-09. 과거 포털 명칭은 현행 정부24 경로와 대조.
3. https://www.hanam.go.kr/jumin/contents.do?key=11587 — 무인발급 대상, 무료·본인확인 및 설치 장소별 운영시간. 모든 기기의 24시간 발급을 보장하지 않음.

## 이미지 제작

imagegen 스킬의 기본 내장 도구 모드로 각각 신규 생성하고 한글·내용을 육안 검수함. CLI 미사용.

- 최종 썸네일: assets/disability-certificate-thumbnail.png (1672×941)
- 최종 본문 카드: assets/disability-certificate-card-news.png (1536×1024)
- 홈·전체 글·발급조회 목록·검색 데이터·본문·OG/Twitter 및 sitemap 연결.

### 최종 프롬프트 1

Use case: ads-marketing. Korean practical public-document guide title thumbnail landscape 16:9. Bright realistic tidy desk with laptop, blue folder and blank paper. Established navy-white-yellow editorial style. Large navy panel, huge bold white exact title "장애인증명서", yellow exact subtitle "무료 인터넷 발급". Generous margins, all Korean lettering unclipped, readable at mobile size. No person or stereotyped disability symbol; no real document, no personal information, no official seals/logos, no watermark, no extra text.

### 최종 프롬프트 2

Use case: infographic-diagram. Korean editorial body card news, landscape 3:2. White and light blue, three spacious panels with blue 3D neutral document/check, authenticated laptop, printer/checklist icons. Exact navy main title "장애인증명서 발급 체크". Panel1 "1. 문서 확인" subtitle "등록 사실 증명용". Panel2 "2. 본인인증" subtitle "온라인 대리 신청 불가". Panel3 "3. 제출 전 점검" subtitle "대상자 · 발급일 · 형식". Exact footer "증명서 발급과 신규 등록 심사는 다릅니다". Large mobile-readable Korean letters, no people, no medical diagnosis claim, no real personal data, no government seal or logo, no watermark, no extra text.

## 검수

- node --check assets/site.js 통과.
- 카테고리 검사: 전체 54편, 발급·조회 29편, 나머지 분류 합계·중복·목적지·이미지·canonical 검사 통과.
- 전용 정적 검사: 이미지 크기, 내부 링크, canonical, sitemap, 구조화 데이터 검사 오류 없음.
- git diff --check 통과.
- 데스크톱 미리보기 육안 확인. 모바일 390×844에서 document scrollWidth 375, 가로 넘침 없음. 빠른 이동 #trouble 정상, 두 이미지 naturalWidth 1672/1536 확인.
- 기존 광고 로직 변경 없음. 렌더링된 광고 구분 영역 2개 유지 확인.
- aside-browser 실행 명령은 설치되어 있지 않아 기본 브라우저 도구로 로컬 화면 검수. 설치나 권한 변경 없음.
- Search Console·AdSense 성과는 이번 실행에서 조회하지 않았으며 추정 수치를 기재하지 않음.
- 별도 초안 및 외부 홍보 운영 파일은 수정·커밋하지 않음. 외부 커뮤니티 게시 없음.

## 배포 절차

위 검수 대상 파일만 main에 커밋하고 기존 SSH 설정으로 push한 뒤 공개 본문·목록·sitemap·이미지 HTTP 200과 배포 커밋 일치를 확인한다. 최종 배포 성공 여부는 실행 결과로 확인하여 보고한다.
