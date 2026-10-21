# 국민연금 소득공제용 납부확인서 발행 기록

- 실행: 2026-10-21 KST 17시 자동운영, 신규 1편. 완료 시 당일 신규 8편·개선 2편.
- 글: posts/nps-income-deduction-payment-certificate.html
- 중복 검토: 기존 국민연금 가입증명서·예상연금 조회는 가입/예상급여 목적. 본 글은 연도별 소득공제용 납부확인서 및 조회/발급 구분.
- 공식 확인일 2026-10-21. 개인 내역 조회·로그인 후 발급·세금 판정은 수행하지 않음.
- NPS 상세 https://www.nps.or.kr/elctcvlcpt/comm/getOHAC0000M5.do?menuId=MN24001058 : 대상(상실자 포함), 최근 5년, 연도 선택, 조회는 증명서로 사용 불가, 증명서 발급·출력, 가입유형별 표시 기준·팩스 예외 확인.
- NPS 개인 증명서 목록 https://www.nps.or.kr/elctcvlcpt/comm/getOHAC0000M3.do : 인증 필요·즉시(3시간 이내) 및 다른 증명서와 구분.
- NPS FAQ https://www.nps.or.kr/pnsinfo/ntpsklg/getOHAF0097M0.do : 비대면 발급 채널·무인발급기 무료 대조.
- 동작구 https://www.dongjak.go.kr/portal/main/contents.do?menuNo=200016 : 무인발급기 해당 문서·무료·본인확인 대조. 최종 업데이트 2025-12-19. 지역 설치·출입 조건을 전국 공통으로 확대하지 않음.
- 공제·환급·제출 승인 보장 없음. 세금 계산·적격 판정 제외. 조회와 제출용 증명서, 소득공제용/일반 납부확인서/가입증명서 구분.

## 이미지

imagegen 스킬 기본 내장 도구 모드 사용, 프로젝트 경로로 복사해 시각 검수.

- assets/nps-income-deduction-payment-certificate-thumbnail.png (1672×941)
- assets/nps-income-deduction-payment-certificate-card-news.png (1536×1024)

썸네일 프롬프트:

Use case: ads-marketing. Asset type: Korean editorial horizontal 16:9 title thumbnail. Polished realistic tidy desk with laptop, calculator, blank generic document and calendar with no visible year or private details. Huge mobile-readable white and yellow Korean bold text on navy title panel. Text verbatim: "국민연금 납부확인서" and "소득공제용 발급·연도 확인". Clean professional blue palette, generous margins. No refund or eligibility promises, government logo, official seals, identifiers, amounts, watermark or fake certificate.

카드뉴스 프롬프트:

Use case: infographic-diagram. Asset type: Korean editorial website body card news, horizontal 3:2. Clean polished blue-white four-panel guide with numbered headings, 3D illustrations of document, calendar, computer and checklist. Large bold navy Korean typography readable on mobile. Text verbatim: title "소득공제용 국민연금 납부확인서"; panels "1 문서명 확인", "2 대상 연도 선택", "3 증명서로 발급", "4 제출 조건 점검"; footer "조회 화면과 발급 증명서는 달라요". Generous margins, no government seals, logos, personal data, amounts, refund promises, fake official forms or watermark.

## 검수·배포

- 홈·전체 목록·발급조회 카테고리·검색 색인·본문·OG/Twitter·canonical·sitemap 연결. 공개 카드 68편, 발급조회 43편.
- node --check assets/site.js, 카테고리 고유 카드/커버리지/링크/이미지/canonical, 새 글 내부 링크·앵커·JSON-LD·인코딩·이미지 실제 치수, git diff --check 통과.
- 제목·네 단계 문구 이미지 시각 검수. 개인 식별정보·공적 증명서 복제·수익 보장 없음.
- Aside 미설치 확인. 설치 없이 CUA 로컬 데스크톱·390×844 모바일 줄바꿈·버튼·비교표 내부 스크롤 확인. #steps 이동 성공, scrollWidth 375≤390, 이미지 naturalWidth 1672/1536 확인. 뷰포트 복원.
- 기존 광고 로더·슬롯·빠른 이동 유지. 광고 구분 2곳 및 공식 버튼 광고 아님 표시 확인.
- 기존 SSH 설정으로 main 커밋·푸시. 배포 상태와 공개 HTTP 결과는 실행 출력 및 완료 응답에 기록.
- Search Console·AdSense 실제 성과를 본 실행에서 조회하지 않아 추정 수치 미기재. 외부 커뮤니티 게시 없음.
