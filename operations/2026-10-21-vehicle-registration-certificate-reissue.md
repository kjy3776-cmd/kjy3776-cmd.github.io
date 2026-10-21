# 자동차등록증 재발급 발행 기록

- 실행: 2026-10-21 KST 14시 자동운영, 신규 1편.
- 발행 완료 시 당일 신규 5편·개선 2편. 개선은 신규 최소 수량에 불포함.
- 글: posts/vehicle-registration-certificate-reissue.html
- 중복 확인: 기존 vehicle-registration-record-online.html은 등록원부 갑부·을부 조회. 본 글은 분실·훼손 시 등록증 재발급과 경로별 비용·원본·소유자 제한을 다룸.
- 공식 자료 확인일 2026-10-21. 개인 차량 조회·신청·결제는 수행하지 않음.
- 정부24 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000338 : 인터넷 600원, 일반·방문수령 후불 700원, 본인/대리 자격과 온라인 대리 불가, 사본·원본 발급 경로, 근무시간 내 3시간. 페이지 변경/확인일 2025-10-29.
- 자동차365 https://www.car365.go.kr/ccpt/cvlcpt/guid/detailGuidance.do?cvlcptCd=14 : 소유자만 신청, 온라인 대상 표, 인터넷 무료 표시, 이용시간·인쇄 수령. 페이지 변경일 2025-06-09.
- 공식 비용 표시 차이를 경로별로 명시. 실제 결제금액을 확인한 것처럼 쓰지 않음. 최종 화면·담당기관 확인 안내. 원본·사본/대리·법인·공동명의 예외 및 이륜차·건설기계 제외 명시. 발급·제출 승인 보장 없음.
- 성북구·수원시 보조 페이지는 도구 접근 지연으로 본문 근거에 사용하지 않음. 검색 결과의 비공식 글도 근거로 사용하지 않음.

## 이미지

imagegen 스킬 기본 내장 도구 모드 사용. 생성물을 다음 프로젝트 경로로 복사해 시각 검수.

- assets/vehicle-registration-certificate-reissue-thumbnail.png (1672×941)
- assets/vehicle-registration-certificate-reissue-card-news.png (1536×1024)

썸네일 프롬프트:

Use case: ads-marketing. Asset type: Korean editorial title thumbnail, horizontal 16:9. Realistic tidy desk with generic car key, blank vehicle document, small model car, no personal data, license plate, official seal or government logo. Large bold Korean title on navy panel, mobile-readable high contrast white and yellow typography. Text verbatim: "자동차등록증 재발급" and "온라인·방문·수수료 확인". Clean professional blue palette and generous margins, no other text or watermark.

본문 카드뉴스 프롬프트:

Use case: infographic-diagram. Asset type: Korean editorial body card news, landscape 3:2. Polished blue white four-panel infographic with numbered steps and generic car key, document, laptop and checklist 3D illustrations. Large mobile readable bold navy Korean text verbatim: title "자동차등록증 재발급"; panels "1 필요한 서류 확인", "2 신청 경로 선택", "3 비용·수령 확인", "4 발급 결과 대조"; footer "등록증과 등록원부는 달라요". Clean generous margins, no government logos, official seals, real plate or personal data, no watermark.

## 검수

- 홈·전체 목록·발급조회 카테고리·검색 색인·본문·OG/Twitter·canonical·sitemap 연결. 전체 공개 카드 65편, 발급조회 40편.
- node --check assets/site.js, 카테고리 고유 카드/전체 커버리지/파일/이미지/canonical 검사 통과.
- 새 글 내부 링크·앵커·JSON-LD·인코딩·이미지 실제 치수 검사 통과. git diff --check 통과.
- 이미지 제목·문구와 네 단계 순서 시각 검수. 금액·공적 식별정보 없는 설명용 이미지.
- Aside 미설치 확인. 설치하지 않고 CUA 브라우저로 데스크톱·390×844 모바일 줄바꿈·버튼 확인. #steps 이동 성공, 문서 scrollWidth 375≤390, 이미지 naturalWidth 1672/1536 로딩 확인. 테스트 뷰포트 복원.
- 기존 광고 로더/슬롯·빠른 이동 코드 유지. 광고 구분 2곳, 공식 민원 링크 광고 아님 표시 확인.
- 기존 SSH 설정으로 main 커밋·푸시, 배포 상태·공개 HTTP 결과는 실행 출력과 완료 응답에 기록.
- Search Console·AdSense 성과는 이번 실행에서 조회하지 않아 수치 미기재. 외부 커뮤니티 게시 없음.
