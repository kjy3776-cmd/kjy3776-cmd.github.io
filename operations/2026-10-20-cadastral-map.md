# 2026-10-20 지적도·임야도 신규 발행

공개 URL: https://www.innerapple.com/posts/cadastral-map-online-issue-view.html

이번 실행 신규 1편. 완료 시 한국 시간 당일 신규 9편·개선 2편. 기존 59편과 검색 의도를 비교했으며 토지대장·토지이용계획의 별도 문서와 달리 지적공부 도면 발급에 집중. 전체 공개 60편, 발급조회 35편. 실제 필지 조회·외부 커뮤니티 게시 없음.

## 공식 검증

2026-10-20 확인:

- https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000027 — 누구나 신청, 구비서류 없음, 인터넷·방문 등 경로, 등본 700원·열람 400원·인터넷 무료, 즉시(근무시간 내 3시간), 접수기관 확인. 최근 내용 변경 2023-06-16, 확인 2026-04-17.
- https://www.lx.or.kr/kor/sub01_01_01_02.do — 경계복원측량은 등록 경계를 실제 땅에 표시, 지적현황측량은 시설물 위치·면적을 경계와 대비해 도면에 표시. 도면 발급과 측량 구분.

화면을 직접 조회하지 않은 범위는 명시. 산처럼 보인다는 이유로 문서 종류를 단정하지 않음. 소유권·개발 가능·경계 분쟁 판단 및 결과 보장 없음. PDF는 지원 환경·제출처 인정 조건 확인.

## 이미지

imagegen 스킬 기본 내장 도구 모드, 2장 신규 생성. CLI 미사용. 한글·여백·가독성 육안 검사. 최종 저장 경로:

- assets/cadastral-map-thumbnail.png (1672×941)
- assets/cadastral-map-card-news.png (1536×1024)

### 최종 프롬프트 1

Use case: ads-marketing. Asset type: Korean life-procedure article title thumbnail, wide horizontal 16:9. Create a polished editorial photo composition of an abstract cadastral parcel map on a desk, a magnifying glass and laptop, no real location or official document, with a large dark navy title panel and very large mobile-readable Korean type, white and yellow. Exact text only: "지적도·임야도" / "인터넷 발급·열람" / "무료 범위·지번 확인". Clean premium trustworthy Korean informational website style. No government seal, no brand logos, no extra tiny text, no invented certificates, no watermark.

### 최종 프롬프트 2

Use case: infographic-diagram. Asset type: Korean article body card news, horizontal 3:2. Elegant pale blue background, navy readable Korean headings, three large numbered panels with simple friendly 3D icons: parcel map with location pin, document and magnifier, survey tripod on land. Exact text only: title "지적도·임야도 확인 순서"; panel 1 "1 지번 확인" / "소재지·본번·부번"; panel 2 "2 용도 구분" / "열람 또는 등본 발급"; panel 3 "3 현장 경계" / "측량은 별도 상담"; footer "도면 발급 ≠ 현장 측량". Make all type legible on mobile, large spacing, no extra tiny text, no seals, no real cadastral documents, no government logos, no watermark. Informational not an advertisement.

## 검수·배포

- 홈·전체 목록·카테고리·검색·본문·OG/Twitter·sitemap 연결.
- JS 구문, 카테고리 중복·coverage·목적지·이미지·canonical, 내부 링크·앵커·JSON-LD·인코딩, git diff --check 통과.
- 데스크톱 육안 검수. 모바일 390×844, scrollWidth 375, #steps 이동·이미지 2장 로딩 정상. 광고 구분 영역 2개 확인, 기존 광고 설정·로직 변경 없음.
- aside-browser CLI 미설치로 추가 설치 없이 기본 브라우저 사용.
- Search Console·AdSense 성과 미조회, 추정 성과 없음.
- 관련 9개 파일만 main 커밋·기존 SSH push. 공개 URL·목록·sitemap·이미지 HTTP200 및 배포 커밋 일치는 후속 도구 출력에서 확인 후 완료 보고.
- 무관한 draft-assets와 홍보 초안은 보존·커밋 제외.
