# 여권 발급기록 증명서 발행 기록

- 실행: 2026-10-21 KST 13시 자동운영. 신규 1편 대상.
- 발행 시 오늘 집계: 신규 4편, 개선 2편. 개선은 신규 최소 수량에 불포함.
- 문서: posts/passport-issuance-history-certificate-online.html
- 중복 검토: 기존 passport-information-certificate-online은 명의인 정보 증명, 본 글은 발급받은 여권 기록 증명. 단순 이력·진행 조회와도 구분.
- 공식 확인일: 2026-10-21. 로그인 후 개인 기록이나 실제 발급 신청은 수행하지 않음.
- 정부24 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000001 : 인터넷·모바일·무인 무료, 방문 1,000원, 국/영문 근무시간 내 3시간, 제출 서류. 페이지 변경·확인일 2025-08-01.
- 외교부 https://www.passport.go.kr/home/kor/contents.do?menuPos=54 : 용도·본인/법정대리/임의대리 서류·발급 경로 대조.
- 외교부 https://www.passport.go.kr/home/kor/contents.do?menuPos=52 : 증명서·이력 조회·진행 조회 구분 대조.
- 조건·예외: 언어/제출 형식·대리 관계 확인, 무인발급기 지원 확인, 해외 접수기관 안내 별도, 발급/제출 승인 보장 금지. 임의 PDF 방식·로그인 후 버튼 명칭을 단정하지 않음.

## 이미지

imagegen 스킬의 기본 내장 도구 모드 사용. 생성 후 아래 프로젝트 경로로 복사하고 시각 검수.

- assets/passport-issuance-history-certificate-thumbnail.png
- assets/passport-issuance-history-certificate-card-news.png

썸네일 프롬프트:

Use case: ads-marketing. Asset type: Korean editorial website horizontal title thumbnail, 16:9. Create polished realistic desk photo with generic navy passport booklets and blank document, no real official seal or personal data. Large high contrast Korean title on navy panel, readable on mobile. Text verbatim: "여권 발급기록 증명서" and "온라인 신청·수수료·준비물". White and yellow bold typography, clean restrained blue palette. No other text, no government logo, no watermark.

본문 카드뉴스 프롬프트:

Use case: infographic-diagram. Asset type: Korean website body card news, landscape 3:2. Clean polished blue-white infographic with four large numbered panels and charming generic passport/document illustrations. Large mobile readable Korean text verbatim: title "여권 발급기록 증명서"; panels "1 문서명 확인", "2 국문·영문 선택", "3 공식 경로 신청", "4 발급 결과 대조"; footer "조회 화면과 증명서는 달라요". Generous margins, uncluttered, navy bold type. No official logo, seal, personal data, fake certificate, watermark, or additional small text.

## 검수 및 배포

- 홈·전체 목록·발급조회 카테고리·검색 색인·본문·OG/Twitter 이미지·canonical·sitemap 연결.
- 기존 공통 광고 로더/슬롯 설정 및 빠른 이동 코드는 유지. 외부 민원 버튼은 광고 아님 표시.
- Aside 실행 파일 미설치 확인. 설치하지 않고 사용 가능한 CUA 브라우저로 로컬 화면 점검.
- 배포 검증 결과는 완료 응답 및 실행 출력에 기록. Search Console·AdSense 실제 성과 수치는 본 실행에서 조회하지 않아 추정치 미기재.
- 사전 검사 통과: node --check assets/site.js, 카테고리 고유 카드·전체 커버리지·대상 파일·이미지·canonical 검사(총 64편, 발급조회 39편), 새 글 내부 링크/앵커/JSON-LD/이미지 실제 크기, git diff --check.
- 이미지 시각 검수: 썸네일 1672×941, 카드뉴스 1536×1024, 제목과 네 단계 문구 일치. 공적 증명서·개인 식별정보 아님.
- 로컬 CUA 데스크톱 및 390×844 모바일 검사: 본문 줄바꿈·버튼·표 내부 스크롤 확인, 문서 scrollWidth 375≤390, #steps 이동 성공, 두 이미지 naturalWidth 1672/1536 확인. 광고 구분 2곳 확인. 테스트 뷰포트 복원.
