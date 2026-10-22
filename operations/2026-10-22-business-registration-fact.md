# 사업자등록사실여부 신규 발행
- KST2026-10-22 신규3/개선2 (이번 글 포함). 개선 한도 유지. 사업자등록증명/폐업사실/신고사실없음과 다른 문서 의도.
- URL https://www.innerapple.com/posts/business-registration-fact-online.html
- 공식확인2026-10-22: 정부24 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000352&HighCtgCD=A09002&tp_seq=01 (기본URL 첫 요청 실패, 상세쿼리 페이지 재조회 성공; 본문 자격/무료/3시간/창구/대리 확인, 표시확인일2025-10-29).
- 국세청 손택스 https://mob.tbht.hometax.go.kr/jsonAction.do?actionId=UTBCAAAA15F001 유형/근무시간/15시 이후·휴일 예외/결과 조회 확인.
- 성동구 https://sd.go.kr/booking/bookingOnlineRcepDetail.do?key=5095&progrmNo=707&rcpp=9&sc3=202605 등록 이력자 총사업자등록내역 요구 사례 확인. 종료된5월 사례로 한정, 현재 모집·전국공통조건으로 확대 안함.
- 개인 기록조회/신청/자격판정 없음, 무소득/미취업/지원승인 보장 없음.

## 이미지
imagegen 스킬 built-in generate 모드로 각각 신규 생성, 직접 시각 확인. 설명용.
- assets/business-registration-fact-thumbnail.png 1672×941
- assets/business-registration-fact-card-news.png 1536×1024
- 원본 .codex/generated_images/01a0c2c4-7ad9-7fc2-82ae-217ce417395c/exec-acbe9c12-6fab-4537-a232-e28060dbaa93.png 및 exec-7604df26-2edd-4531-b869-90178922515e.png 유지.

### Thumbnail prompt
Use case: ads-marketing. Korean editorial website thumbnail landscape 16:9. Realistic tidy desk laptop and generic blank document, no official replica or identifiers. Large bold mobile-readable white yellow text on navy panel exactly "사업자등록사실여부" and "사실증명 신청·결과 확인". Professional blue palette, generous margins. No official seals, government logos, personal data, eligibility promises or watermark.

### Card prompt
Use case: infographic-diagram. Korean editorial body card news landscape 3:2. Blue white clean four panel infographic with simple document clock check icons. Large mobile-readable exact Korean title "사업자등록사실여부 신청". Four numbered panels exact "1 문서명 확인", "2 요구내용 확인", "3 처리결과 조회", "4 발급본 대조". Footer "서류 발급과 지원 자격은 별개예요". No extra text, no official seals, logos, real certificate replica, identifiers, guarantees, watermark.

## QA
- node --check assets/site.js/category PASS 총72편 documents47/health2/housing8/money6/reports9. 중복/coverage/대상/이미지/canonical 확인.
- check-military.cjs 대상치환 checks[]: 상대링크/anchor/JSON-LD/인코딩/이미지크기. git diff --check 통과(CRLF 안내만).
- CUA 모바일390×844 scrollWidth375, #steps, 광고2, 이미지2개 loaded 자연폭1672/1536 렌더310.625, 표310.625, viewport reset.
- screenshot 촬영 CDP시간초과, 화면 시각캡처 미검수. 생성 이미지 직접 시각 확인과 DOM 모바일 검수 구분.
- aside-browser 지침/aside guide 실행 미설치, 설치하지 않고 제공CUA 사용.
- 홈/전체/분류/검색/본문/OG/Twitter/JSON-LD/sitemap 연결. 광고설정/기존광고 유지, 공식버튼 광고아님. 외부게시 없음, 성과 추정 없음.
- 이 기록 포함 main 커밋을 기존SSH push하고 Actions/공개HTTP 최종 확인.

