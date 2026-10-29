# 행복출산 원스톱 서비스 안내 신규 글

- KST 2026-10-29: 신규 4편 / 기존 글 개선 2편. 이번 실행 신규 1편. 개선 한도(2편)는 이미 채워져 신규 주제로 진행.
- 신규 URL: `/posts/happy-birth-services-one-stop.html`. 기존 출생신고 글은 신고기한·의료기관 온라인 가능 여부에 집중하고, 이 글은 신고 후 지원 통합신청 및 기관별 결과 확인으로 검색 의도를 분리.
- 공식 자료 열람 확인일 2026-10-29:
  - 정부24 행복출산 민원: https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=17410000001 — 출생신고와 동시/이후, 온라인 대리 불가, 항목·접수/처리기관·기간·구비서류. 페이지 내 최종 내용 변경일 2024-05-02/확인일 2024-07-03 표기 확인.
  - 보건복지부 부모급여: https://www.mohw.go.kr/menu.es?mid=a10711030600 — 0~23개월, 지원방식·현행 안내 신청경로. 최종수정일 2026-03-25 표기 확인.
  - 정책브리핑: https://www.korea.kr/news/policyNewsView.do?newsId=148972937 — 2026-10-01 의결한 신청주의 개선 법안은 공포 후 3개월 뒤 시행 안내. 법안 의결과 시행을 구분해 본문에 반영.
- 이미지 생성: built-in image_gen 2회, 각각 별도 원본 보존. 썸네일 `/assets/happy-birth-services-thumbnail.png` (1672x941): 크림·청록·남색, 신생아와 체크리스트, exact text “행복출산 원스톱 신청 / 출생신고 후 지원서비스 확인”. 카드뉴스 `/assets/happy-birth-services-card-news.png` (1536x1024): 출생신고 완료 → 정부24 신청 → 결과 확인, 서비스별 요건 상이. 시각 검수 완료.
- 본문·OG·홈 최신글·전체 글·신청/신고 분류·사이트 검색·sitemap 연결. 분류 공개글 수 9→10.
- 실행 QA: check-categories PASS(분류별 count documents66/health2/housing8/money6/reports10, 중복/커버리지/경로/이미지/canonical); site.js `node --check`; 내부 경로/이미지 존재 및 canonical 확인. 페이지 내용 1,124단어.
- 공개 배포: commit `f3a7b28` pushed to `main`. 새 글, 썸네일, 카드뉴스, 전체목록, 신청·신고 분류, sitemap 모두 HTTP 200; 새 본문 제목·개정 안내 문구·카드 경로 실제 응답 반영 확인.
- 모바일 Aside 390x844: viewport390, article body349px, 본문 카드 렌더 폭311px로 자체 콘텐츠는 viewport 안에 들어옵니다. 다만 Google AdSense가 삽입한 aswift iframe만 714~1200px로 문서 가로폭을 넓히는 것을 확인했습니다. 새 글 콘텐츠 요소의 넘침은 아니며 광고 렌더링은 수정하지 않았습니다.
- Search Console/AdSense 실제 수치는 조회하지 않았고 외부 게시 없음.
