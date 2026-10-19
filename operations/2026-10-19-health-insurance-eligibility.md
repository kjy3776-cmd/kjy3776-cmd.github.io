# 2026-10-19 건강보험 자격확인서 신규 발행

- 자동운영 10 / 실행시각 07:57 UTC. 이번 실행 신규 1편. 완료 후 한국시간 당일 신규 6편·기존 개선 2편으로 집계.
- URL: https://www.innerapple.com/posts/health-insurance-eligibility-certificate.html
- 기존 자격득실확인서는 취득·상실 이력, 신규 글은 본인 자격확인서 발급·제출 형태로 검색 의도를 분리하고 내부 링크 연결.
- 공식 검증: 정부24 PG4CADM0106(무료·즉시 근무시간 내 3시간·온라인 대리 불가), 국민건강보험공단 articleNo=10945782(가입자/피부양자 본인·건강보험25시·팩스·전자문서지갑·ARS 예외), 10945783(자격득실 정의). 2026-10-19 현재 공개 안내 대조.
- 이미지 생성 스킬 / built-in image_gen generate 모드. 원본 유지, 프로젝트 assets에 복사. 최종 경로 assets/health-insurance-eligibility-thumbnail.png(1672×941), assets/health-insurance-eligibility-card-news.png(1536×1024). 두 이미지 육안 한글 확인 통과. 모형 문서 표기, 개인정보 없음.
- 썸네일 프롬프트: Use case: ads-marketing. Create a Korean editorial website landscape title thumbnail, 16:9. Established practical document-guide style: bright realistic desk, laptop and generic blue insurance document, no actual personal data, no official seals or logos. Large highly legible Korean navy rectangular title area, bold white main title and yellow subtitle. Exact text only: "건강보험 자격확인서" and "인터넷 발급 · 서류 구분". Keep all letters unclipped with generous margins, readable on mobile. Polished clean trustworthy appearance, not an advertisement, no watermark.
- 카드뉴스 프롬프트: Use case: infographic-diagram. Korean editorial body card news, landscape 3:2. Clean white and light blue background, large navy typography, three numbered rounded panels with friendly 3D blue document/check/laptop icons. Main heading exact "자격확인서 발급 전 체크". Panel 1 exact "1. 문서명 확인" subtitle "자격득실확인서와 구분". Panel 2 exact "2. 본인인증" subtitle "온라인 대리 신청 불가". Panel 3 exact "3. 제출 방식 확인" subtitle "출력 · 전자증명서". Footer exact "인정 서류는 제출처에 확인하세요". No other text, no seal, no logos, no personal data, no watermark. Spacious mobile-readable clear Korean glyphs.
- 홈·전체 목록·발급조회 분류(25편)·검색·본문·OG/Twitter·sitemap 연결. 전체 공개 카드 50편. 관련 없는 사용자 untracked 변경 제외.
- 로컬 검사: node --check, check-categories(unique/coverage/destinations/images/canonical), 문서 링크·앵커·JSON-LD·PNG 규격 검사, git diff --check 통과.
- 기본 브라우저 데스크톱·모바일 검수. 390×844에서 scrollWidth 375로 가로 넘침 없음, #trouble 이동, 이미지 naturalWidth 1672/1536 확인. 기존 광고 코드 변경 없음, 중간·사이드 광고 라벨 유지. Aside 미설치로 기본 도구 대체.
- Search Console·AdSense 실제 성과는 이번 실행에서 접근·조회하지 않음. 추정치 없음. 외부 커뮤니티·지식iN 게시 없음.
- 배포는 main 커밋·기존 SSH push 후 공개 글/홈/목록/분류/sitemap/이미지의 HTTP 200과 배포 워크플로 결과를 별도 확인.
