# 검정고시 합격증명 신규 발행
- KST2026-10-22 신규4/개선2 (이번 글 포함). 기존 학교졸업 글은 검정고시 요건 제외, 별도 검색 목적 확인.
- URL https://www.innerapple.com/posts/ged-pass-certificate-online.html
- 공식확인2026-10-22: 정부24 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000021 (확인일2026-06-30) 대상·온라인무료/기타조례·3시간·대리제한·서류/경로.
- 여주교육지원청 https://ipo-m.goeyj.kr/goeyj/cm/cntnts/cntntsView.do?cntntsId=2155&mi=10211 합격/성적/과목합격 구분,1991년 이후 등 지역온라인범위·영문제한·방문대리/FAX 원본인정 확인.
- 지역 연도 전국일반화 안함. 일반/대입전형 목적 구분, 특정 대학요강/전형 상세를 단정하지 않음. 인천교육청 페이지는 본문 미수신으로 채택하지 않음.
- 개인로그인/학력조회/발급 신청 없음. 입학·채용 승인 보장 없음.

## 이미지
imagegen 스킬 built-in generate, 각각 신규 생성. 직접 시각확인, 설명용.
- assets/ged-pass-certificate-thumbnail.png 1672×941
- assets/ged-pass-certificate-card-news.png 1536×1024
- 원본 .codex/generated_images/01a0c2c4-7ad9-7fc2-82ae-217ce417395c/exec-1957bcf3-02ac-48c2-a7d1-13e3ca37b5a8.png 및 exec-f7e6cbe6-5b47-4af6-92c0-a2712a6853ad.png 유지.

### Thumbnail prompt
Use case: ads-marketing. Korean editorial horizontal 16:9 website title thumbnail. Realistic tidy study desk laptop blank generic document and books, navy title panel with large mobile-readable Korean text exactly "검정고시 합격증명서" and "온라인 발급·문서 구분". White yellow typography blue palette generous margins. No actual certificate replica, official seals, logos, grades, names, personal data, admission promises or watermark.

### Card prompt
Use case: infographic-diagram. Korean editorial landscape 3:2 body card news, clean blue white four-panel illustration. Exact large mobile-readable title "검정고시 합격증명 발급". Four panels "1 문서 용도 확인", "2 합격정보 확인", "3 발급 경로 선택", "4 출력 내용 대조". Footer "합격·성적·과목합격 증명은 달라요". Simple document books check icons. No extra text, official seals, logos, actual certificate replicas, personal identifiers, admission guarantees or watermark.

## QA
- node --check assets/site.js/category PASS 총73편 documents48/health2/housing8/money6/reports9, 중복·coverage·링크·이미지·canonical.
- check-military.cjs 대상치환 checks[] 상대링크/anchor/JSON-LD/인코딩/이미지크기. git diff --check 통과(CRLF안내만).
- CUA390×844 scrollWidth375, #steps, 광고2, 이미지2개 loaded 자연폭1672/1536 실제폭310.625, 표310.625. viewport reset.
- screenshot CDP시간초과로 화면 캡처시각QA 불가. 생성이미지 직접시각확인과 DOM모바일검수 구분.
- aside-browser 지침/aside guide 실행 미설치. 설치하지 않고 제공CUA사용.
- 홈/전체/분류/검색/본문/OG/Twitter/JSON-LD/sitemap 연결. 기존광고설정유지, 공식버튼 광고아님. 외부게시/실적추정 없음.
- 이 기록포함 main커밋 기존SSH push후 Actions/공개HTTP로 최종배포확인.

