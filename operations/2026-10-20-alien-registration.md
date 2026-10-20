# 2026-10-20 외국인등록 사실증명 신규 발행

공개 URL: https://www.innerapple.com/posts/alien-registration-certificate-online.html

이번 실행 신규 1편. 완료 시 한국 시간 당일 신규 7편·개선 2편. 기존 57편의 제목·본문과 의도 대조. 기존 출입국사실증명은 출입국 날짜, 신규 글은 외국인등록 사실의 증명으로 목적이 다름. 개인 등록·체류정보 조회와 외부 커뮤니티 게시 없음.

## 공식 자료 검증

2026-10-20 확인:
- https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000027 — 신청방법 인터넷/방문, 온라인 대리 불가, 인터넷 무료·방문 1통2,000원, 즉시(근무시간 내 3시간), 본인·위임·특수 신청 서류, 결과 확인 경로. 최근 내용 변경·확인일 2026-06-01.
- https://www.junggu.seoul.kr/minwon/content.do?cid=745084131&cmsid=14027&mode=view — 서울 중구 사실증명 민원편람의 방문 경로·신분증/신청서/위임 서류·2,000원 안내. 출입국·외국인등록·국내거소신고를 묶어 안내하므로 해당 유형의 공식 민원을 별도로 연결하고 요건을 일반화하지 않음.

하이코리아·AI정부 페이지는 본문 접근 오류로 근거에서 제외. 검색 결과의 민간 설명은 사실 근거로 사용하지 않음. 등록 말소·체류자격·체류허가 또는 제출처 심사 결과를 단정하거나 보장하지 않음.

## 이미지 제작

imagegen 스킬 기본 내장 생성 도구 모드. 두 장 개별 생성, 한글·내용·여백 육안 확인. CLI 미사용. 최종 저장:
- assets/alien-registration-certificate-thumbnail.png (1672×941)
- assets/alien-registration-certificate-card-news.png (1536×1024)

### 최종 프롬프트 1

Use case: ads-marketing. Landscape 16:9 Korean public document guide thumbnail. Bright realistic tidy desk, laptop, blank paper and blue folder. Navy white yellow editorial style. Huge exact white title "외국인등록 사실증명", exact yellow subtitle "정부24 인터넷 발급". Generous margins, lettering fully unclipped and mobile-readable. No people, passports, immigration cards, real official documents, personal identifiers, flags, seals, logos, watermark or extra text.

### 최종 프롬프트 2

Use case: infographic-diagram. Landscape 3:2 Korean public document body card. White light blue navy editorial style with three spacious panels, neutral 3D blank document, authenticated laptop, checklist icons. Exact title "외국인등록 사실증명 체크". Panel1 "1. 문서명 확인" subtitle "출입국 증명과 구분". Panel2 "2. 본인인증" subtitle "온라인 대리 불가". Panel3 "3. 제출 전 점검" subtitle "대상 정보 · 형식". Exact footer "증명서 발급과 체류 관련 신청은 별도입니다". Huge mobile-readable Korean letters, all text unclipped. No people, passports, real registration cards, personal identifiers, flags, official seals, logos, watermark or extra text.

## 검수·배포

- 홈·전체 글·발급조회 목록·검색 데이터·본문·OG/Twitter·sitemap 연결. 전체 58편, 발급조회 33편.
- JS 구문 검사, 카테고리 중복·목적지·이미지·canonical 검사, 전용 내부 링크·앵커·JSON-LD·sitemap·인코딩·템플릿 잔재 검사 및 git diff --check 통과.
- 데스크톱 육안 확인. 모바일 390×844에서 scrollWidth 375, 가로 넘침 없음. #trouble 이동과 이미지 2장 정상 로딩.
- 기존 광고 로직 수정 없음. 광고 구분 영역 2개 렌더링 유지.
- aside-browser 스킬의 aside guide 미설치 확인. 추가 설치 없이 기본 브라우저 도구로 화면 검수.
- Search Console·AdSense 성과 미조회, 추정 수치 없음.
- 관련 9개 파일만 main 커밋·기존 SSH로 push. 공개 글/목록/sitemap/이미지 HTTP200과 배포 커밋 일치는 배포 후 실행 출력으로 확인하여 보고.
- 무관한 draft-assets 및 홍보 운영 초안은 보존·커밋 제외.
