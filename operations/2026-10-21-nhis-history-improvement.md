# 2026-10-21 자격득실확인서 실질 개선

대상: https://www.innerapple.com/posts/health-insurance-qualification-history-online.html

이번 실행은 개선 1편. 당일 신규 2편·개선 1편, 별도 집계. 기존 통합 글 및 noindex 이동 안내를 확인해 같은 검색 의도의 신규 글을 만들지 않음.

## 공식 자료 재검증 (2026-10-21)

- 정부24 자격득실 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107 — 자격득실 조회 목적, 인터넷·무료·온라인 대리 불가, 즉시(근무시간 내 3시간). 페이지 변경·확인 표시는 2016-12-27임을 본문에 명시.
- 국민건강보험공단 https://www.nhis.or.kr/nhis/index.do — 현행 자주 찾는 서비스의 자격득실 링크와 민원서비스/서비스찾기. 링크 https://www.nhis.or.kr/nhis/minwon/jpAea00401.do 는 공식 로그인으로 이동, 개인 자료는 조회하지 않음.
- 정부24 자격확인 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0106 — 자격정보 조회 목적을 대조.

## 실질 변경

- 자격확인·자격득실·보험료 납부 자료 선택 안내 및 관련 기존 글 연결.
- 전체 이력과 일부 선택 이력의 제출 범위 점검, 보이지 않는 기간을 근로 사실 없음으로 단정하지 않도록 안내.
- 인증 전 오류/로그인 후 누락/파일·출력 문제의 3단계 점검 순서, 발급과 기록 정정 구분.
- 구 메뉴 명칭 보완, 공식 확인 범위·미조회 범위와 결과 보장 불가 명시.
- datePublished 보존, dateModified·본문 확인일·sitemap lastmod만 2026-10-21로 갱신. 기존 URL·canonical·이미지 3장·광고 설정 보존. 신규 이미지 제작 대상이 아닌 기존 글 개선.

## 검수

- 내부 파일/다른 페이지 앵커/본문 앵커·JSON-LD 확인. 초기 단순 검사에서 /#categories·/#latest를 파일명으로 판정한 오탐은 실제 index.html 앵커 존재 확인 및 수정 검사로 해결.
- 카테고리 coverage·중복·이미지·canonical 통과, diff 공백 검사 통과.
- 로컬 모바일 390×844, scrollWidth 375, 본문 이동·추가 섹션·광고 구분 확인. 모바일에서 숨겨진 사이드 목차는 클릭하지 않고 상단 본문 이동으로 검수.
- aside-browser CLI 미설치로 기본 브라우저 검수, 설치 없음. 성과 조회·추정·외부 게시 없음.
- 관련 3개 파일만 main 커밋·기존 SSH push, 공개 HTTP200·개선 본문·배포 커밋은 후속 도구 출력으로 확인 후 보고.
- 무관한 draft-assets 및 홍보 초안 보존·커밋 제외.
