# 2026-10-22 여권 온라인 재발급
- 신규2 / 개선0 (이번 글 포함, KST). fc1a70f 신고사실없음과 별개 신규. 기존 여권정보/발급기록 증명서와 목적 구분.
- URL https://www.innerapple.com/posts/passport-online-reissue.html
- 확인2026-10-22: 외교부 https://passport.go.kr/home/kor/contents.do?menuPos=11 대상·제한·수령·미성년자 확대. 도봉구 https://www.dobong.go.kr/Contents.asp?code=10009953 성인 사진/인증/수령기관 변경불가/방문수령 대조 (수정2026-06-10).
- 도봉구 미성년자 전면불가는 외교부 현행 안내와 달라 미채택. 성인 국내 신청 중심, 미성년자 법정대리인 예외·자격 확인 필요 구분.
- 외교부 사진 https://passport.go.kr/home/kor/contents.do?menuPos=12 최근6개월/JPG·JPEG/500KB 이하 검증. 수수료 https://passport.go.kr/home/kor/contents.do?menuPos=41 연결. 고정 요금·처리일·승인 보장 없음.
- 로그인·개인정보 조회·결제·신청 없음. 외부 게시 없음, 검색/수익 실적 추정 없음.

## 이미지
imagegen 스킬 built-in generate, 2개 개별 신규 생성 및 직접 시각 검수. 설명용. 카드 사유 예시가 모두 온라인 대상이 아님을 캡션에 명시.
- assets/passport-online-reissue-thumbnail.png 1672×941
- assets/passport-online-reissue-card-news.png 1536×1024
- 원본 .codex/generated_images/01a0c2c4-7ad9-7fc2-82ae-217ce417395c/exec-004a7bda-1270-4b4d-97a1-b86024fc92ce.png 및 exec-74b2d007-552e-4831-b434-c25bb521c3a8.png 유지.

### Thumbnail prompt
Use case: ads-marketing. Korean editorial title thumbnail landscape 16:9. Professional realistic tidy travel preparation desk with laptop, plain navy booklet without any emblem or identifiers, calendar. Large bold mobile-readable Korean text on navy panel verbatim "여권 온라인 재발급" and "신청 조건·사진·방문 수령". Blue white yellow palette, generous margins. No real passport replica, official seals, logos, personal data, approval promises or watermark.

### Card news prompt
Use case: infographic-diagram. Korean editorial body card news landscape 3:2, clean blue white four-panel layout, large mobile-readable text. Exact title "여권 재발급 신청 점검". Numbered panels "1 대상 확인", "2 사진 준비", "3 수령기관 선택", "4 본인 방문 수령". Footer "온라인 신청도 방문 수령이 필요해요". Simple document camera location person icons. No official logos, real passports, personal identifiers, seals, approval promises or watermark.

## QA
- node --check assets/site.js, category 검사 PASS: 총71편 documents46/health2/housing8/money6/reports9. 중복·coverage·이미지·canonical.
- check-military.cjs 대상치환 checks[]: 상대링크/anchor/JSON-LD/인코딩/이미지 크기. git diff --check 통과 (CRLF 안내만).
- 모바일390×844 DOM: scrollWidth375, #steps 이동, 광고영역2, 이미지2장 loaded 자연폭1672/1536 표시폭310.625, 표310.625. viewport reset.
- screenshot CDP 시간초과로 캡처 시각 QA 불가. 생성 이미지 직접 시각 확인 및 DOM 모바일 검수로 구분.
- aside-browser 지침 읽고 aside guide 실행: 미설치. 추가 설치 없이 제공 CUA 검수.
- 기존 광고 설정/광고 제거 없음. 공식 버튼 광고 아님 표시. 홈/전체/분류/검색/본문/OG/Twitter/JSON-LD/sitemap 연결.
- 이 기록 포함 main 커밋을 기존 SSH push 후 Actions와 공개 HTTP로 배포 완료 최종 확인.

