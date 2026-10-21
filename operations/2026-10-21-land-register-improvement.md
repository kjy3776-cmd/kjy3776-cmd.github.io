# 2026-10-21 토지대장 검색 오류 실질 개선

대상: https://www.innerapple.com/posts/land-register-online-issue-view.html

이번 실행 기존 개선 1편. 완료 시 오늘 신규 2편·개선 2편으로 각각 집계. 신규 최소 2편 달성 상태 유지, 개선 일일 한도 도달. 같은 검색 의도의 신규 글 추가 없음.

## 공식 자료 (2026-10-21 확인)

- https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000026 — 누구나·무료 인터넷·방문 수수료·처리기간. 변경/확인 2025-10-29.
- https://www.gov.kr/portal/faq/979?backBtnYn=N — 토지대장 선택 시 일반, 임야대장 선택 시 산 자동 선택.
- https://www.gov.kr/portal/faq/980?backBtnYn=N — 없는 지번·택지개발·분할/합병 이력의 오류 가능성, 소재지 시군구에 신청 가능 여부 확인.
- https://www.lx.or.kr/kor/sub01_01_01_02.do — 경계복원측량은 등록 경계를 실제 땅에 표시하는 별도 업무.
- https://www.junggu.seoul.kr/minwon/content.do?cmsid=14000 — 기존 인용 지적민원 안내 접근 재확인.

## 실질 변경

일반/산 비활성 상태의 구체 원인 설명, 오류 메시지별 소재지·현재 지번·분할/합병 확인 3단계 추가. 오류를 소유권 소멸·계약 무효로 단정하지 않도록 경고. 발급/등록 정정/현장 측량을 분리하고 기존 지적도 글 연결. 실제 필지 조회 없이 담당기관 확인 범위 명시. 기존 발행일 2026-10-17 보존, 수정일·확인일·sitemap lastmod만 오늘로 갱신. URL·canonical·기존 이미지 2장·광고 로직 보존.

## 검수·배포

- 내부 파일·앵커·JSON-LD·발행/수정일 검사 통과. 카테고리 중복·coverage·이미지·canonical 및 diff 검사 통과.
- 로컬 데스크톱 DOM·모바일 390×844, scrollWidth 375 확인. #parcel-error 링크와 추가 제목, 이미지 자연폭 1672/1536 확인.
- aside-browser CLI 미설치, 설치 없이 기본 브라우저 사용. 신규 이미지가 필요한 신규 발행이 아닌 기존 글 개선.
- 관련 3개 파일만 main 커밋·기존 SSH push. 공개 HTTP200·추가 본문·배포 일치는 후속 도구 출력으로 확인 후 보고.
- 외부 게시·성과 추정·개인 정보 조회 없음. 무관한 draft-assets/홍보 초안 보존·커밋 제외.
