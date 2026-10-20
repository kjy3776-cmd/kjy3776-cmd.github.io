# 2026-10-21 국세 납부내역증명 신규 발행

공개 URL: https://www.innerapple.com/posts/national-tax-payment-history-certificate-online.html

이번 실행 신규 1편, 한국시간 오늘 신규 1편·개선 0편. 기존 60편 대조: 납세증명서의 체납 관련 확인과 달리 납부내역 증빙 의도에 집중. 개인별 납세정보 조회·외부 게시 없음. 오늘 최소 2편은 아직 미달이며 다음 실행에서 별도 신규를 확보해야 함.

## 공식 검증

2026-10-21 확인:

- https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000018 — 직접 납부한 국세 내역, 세목·납부일·금액, 무료·즉시(근무시간 내 3시간), 온라인 대리 불가, 방문 서류, 영문 여권 공동이용 조건, 홈택스 연결. 변경·확인일 2026-08-25.
- https://j.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=8648&mi=13322 — 즉시발급 목록·방문 서류. 공항 센터 기기 시간을 전국 공통으로 쓰지 않음.
- https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000011 — 납세증명서는 법정 제외 범위 외 체납 사실 없음의 별도 민원.

실제 신청 화면 조회하지 않은 범위 명시. 반영시간·PDF 지원·승인 보장 없음. 기간·세목·신청 대상 및 재납부 전 공식 확인 안내.

## 이미지

imagegen 스킬 기본 내장 도구 모드, CLI 미사용. 2장 신규 제작·문구와 가독성 육안 검수. 최종 저장:

- assets/national-tax-payment-history-thumbnail.png (1672×941)
- assets/national-tax-payment-history-card-news.png (1536×1024)

### 최종 프롬프트 1

Use case: ads-marketing. Korean informational article thumbnail, horizontal 16:9. Realistic neat desk with blank paper, calculator and laptop. Navy panel with very large mobile-readable white and yellow Korean title. Exact text only: "국세 납부내역증명" / "홈택스 무료 발급" / "기간·세목 확인". Generous margins, crisp professional editorial design matching navy-white-yellow document guides. No personal data, no actual tax records, government seal, brand logos, watermark or extra text.

### 최종 프롬프트 2

Use case: infographic-diagram. Korean informational body card, horizontal 3:2. Clean pale blue white navy design with three spacious numbered panels and friendly 3D document, calendar, magnifier icons. Large mobile-readable exact text only: title "국세 납부내역증명 체크"; panel1 "1 문서명 확인" / "납세증명서와 구분"; panel2 "2 기간·세목" / "제출처 요구와 대조"; panel3 "3 결과 점검" / "납부일·금액 확인"; footer "납부내역과 체납 확인은 다릅니다". No real records, identifiers, government seal, logos, watermark or extra text. Generous margins and unclipped typography.

## 검수·배포

- 홈·전체 목록·분류·검색·본문·OG/Twitter·sitemap 연결. 전체 61편, 발급조회 36편.
- JS 구문, 카테고리 중복·coverage·목적지·이미지·canonical, 내부 링크·앵커·JSON-LD·인코딩, diff 공백 검사 통과.
- 데스크톱 육안, 모바일 390×844 검수. scrollWidth 375, #steps 이동과 이미지 1672/1536 로딩 정상. 광고 구분 영역 2개, 기존 광고 로직 변경 없음.
- aside-browser CLI 미설치. 설치 없이 기본 브라우저 검수. 종료된 로컬 서버 재시작 후 재검수.
- 전날 보고는 operations/2026-10-21-daily-report-2026-10-20.md. GSC 구독 필요 오류, AdSense 실적 미확인. 추정 수치 없음.
- 관련 10개 파일만 main 커밋·기존 SSH push. 공개 글·목록·이미지 HTTP200 및 배포 커밋 일치는 후속 도구 출력 확인 후 최종 보고.
- 무관한 draft-assets와 홍보 초안 보존·커밋 제외.
