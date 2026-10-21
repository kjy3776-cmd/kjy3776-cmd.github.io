# 2026-10-21 지방세 납부확인서 신규 발행

- 신규 9편 / 기존 개선 2편 (이번 신규 포함, KST). 기존 납세증명서·세목별 과세증명서와 검색 목적 구분.
- URL: https://www.innerapple.com/posts/local-tax-paid-confirmation-online.html
- 정부24 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13110000017 : 대상, 온라인 대리 불가, 무료, 근무시간 내 3시간, 방문 신분 확인. 페이지 내용 확인일 2026-09-04.
- 고양시 https://www.goyang.go.kr/ilsegu/user/bbs/BD_selectBbs.do?q_bbsCode=1080&q_bbscttSn=20190620101840685&q_clCode=5&q_pClCode= : 납부사실, 무료, 절차 대조. 수정 2024-10-06.
- 김포시 https://m.gimpo.go.kr/portal/selectBbsNttView.do?bbsNo=303&deleteAt=N&key=2677&nttNo=744470&pageIndex=4&pageUnit=10&searchCnd=all : 문서 종류·준비서류 대조. 게시 2024-03-05. 공통 사이트 footer 날짜는 글 수정일로 사용하지 않음.
- 확인일 2026-10-21. 실제 로그인·개인 기록 조회 없음. 메뉴명·반영시간·전국 일괄조회 범위 단정 없음. 세금·환급·승인 보장 없음.

## 이미지

- imagegen 스킬, built-in generate 모드, 신규 각각 1회. 실물 공문서가 아닌 설명용. 생성물 시각 확인 완료.
- assets/local-tax-paid-confirmation-thumbnail.png (1672×941)
- assets/local-tax-paid-confirmation-card-news.png (1536×1024)
- 원본은 .codex/generated_images/01a0c2c4-7ad9-7fc2-82ae-217ce417395c/exec-226c2718-6863-4623-8089-4a5e18c43b16.png 및 exec-8a698704-801b-46a9-8a27-35e7c622227b.png 유지.

### Thumbnail prompt

Use case: ads-marketing. Asset type: Korean editorial website horizontal 16:9 title thumbnail. Polished realistic tidy desk with laptop, generic blank receipt documents and calculator, no private data or numbers. Large mobile-readable bold white and yellow Korean typography on navy title panel. Text verbatim: "지방세 납부확인서" and "납부내역·무료 발급 확인". Professional blue palette, generous margins. No official seals, government logo, real certificate replica, tax-saving promises, identifiers or watermark.

### Card news prompt

Use case: infographic-diagram. Asset type: Korean editorial body card news, landscape 3:2. Clean polished blue and white four-panel infographic with simple document, calendar, receipt and check icons. Large mobile-readable Korean typography. Exact title "지방세 납부확인서". Four numbered panels exact text: "1 문서명 확인", "2 세목·기간 확인", "3 납부건 선택", "4 발급내용 대조". Footer exact text "납부확인서와 납세증명서는 달라요". Generous margins, no government seals, official logos, actual certificate replicas, personal data, watermark or promises.

## 검수

- node --check assets/site.js, check-categories.cjs PASS: 총69편 / documents44 / health2 / housing8 / money6 / reports9, 중복 카드·coverage·링크·이미지·canonical.
- check-military.cjs 대상 치환 검사 checks []: 상대 링크·anchor·JSON-LD·인코딩·이미지 크기.
- git diff --check 통과 (기존 CRLF 설정 안내만).
- 모바일 390×844: document scrollWidth375, 이미지2장 로드 및 폭310.625, 표 영역310.625, #steps 이동, 광고영역2. 임시 viewport reset.
- 브라우저 screenshot 2회 시간초과. 시각 브라우저 캡처 검수 불가를 기록하며 DOM 기반 모바일 검수와 생성 이미지 직접 시각 검수로 확인.
- Aside 미설치, 설치 진행 없음. 제공 CUA 브라우저로 검수. 광고 설정·기존 광고 제거 없음. 공식 안내 버튼은 광고 아님 표시.
- 홈·전체 목록·발급조회 목록·본문·OG/Twitter/JSON-LD·검색·sitemap 연결.
- 외부 커뮤니티 게시 없음. Search Console·AdSense 수치 확인/추정 없음.
- 배포 결과는 이 기록을 포함한 커밋의 GitHub Actions 및 공개 URL HTTP 검사 결과로 최종 확인.
