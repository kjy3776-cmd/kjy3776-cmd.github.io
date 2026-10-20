# 2026-10-20 여권정보증명서 신규 발행

공개 URL: https://www.innerapple.com/posts/passport-information-certificate-online.html

이번 실행 신규 1편. 완료 시 한국 시간 당일 신규 5편·개선 2편. 기존 55편의 파일·제목·검색 의도를 대조했고 출입국사실증명과 별도 목적이므로 신규 작성. 개인 여권정보 조회·외부 커뮤니티 게시 없음.

## 공식 자료 확인

2026-10-20 확인:
- https://www.passport.go.kr/home/kor/contents.do?menuPos=53 — 외교부 현행 여권 정보 증명서: 주민등록번호 확인 용도, 본인·법정대리인·임의대리인 준비물, 온라인·무인 무료/국내 방문 1,000원, 정부24·재외동포365 경로. 브라우저에서 사실증명·조회 메뉴를 통해 직접 이동해 본문 대조.
- https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000001 — 정부24 여권 사실증명: 유형별 처리기간·채널별 비용·신분확인 서류. 최근 내용 변경·확인일 2025-08-01 표시.
- https://www.passport.go.kr/home/kor/contents.do?menuPos=52 — 외교부 현행 사실증명·조회 종류와 목적 구분.

정부24 종합 안내의 사이트 가기(menuPos=49)가 현재 외교부 발급 진행 상황 알림 메뉴로 열리는 불일치를 발견했다. 이를 신청 화면으로 오안내하지 않고 본문에 확인일과 우회 경로를 명시. 실제 외교부 정보증명서 안내(menuPos=53)를 주 동선으로 연결. 대리 유형 안내를 온라인 전 채널 가능으로 일반화하지 않음. 여권 재발급·비자·신원확인 결과 보장 없음.

## 이미지

imagegen 스킬의 기본 내장 생성 도구 모드로 두 장 개별 생성. CLI 미사용. 한글·내용·여백 육안 확인. 최종 저장:
- assets/passport-information-certificate-thumbnail.png (1672×941)
- assets/passport-information-certificate-card-news.png (1536×1024)

### 최종 프롬프트 1

Use case: ads-marketing. Landscape 16:9 Korean practical guide title thumbnail. Bright realistic tidy desk, laptop, blank paper and plain navy travel document booklet without any seal, emblem, country name or identification. Established navy white yellow editorial style. Huge exact white title "여권정보증명서", exact yellow subtitle "인터넷 발급·준비물". Generous margins, mobile readable, no people, real passport, personal data, official logo, watermark or extra text.

### 최종 프롬프트 2

Use case: infographic-diagram. Landscape 3:2 Korean editorial body card for a public document guide. Navy white light blue palette, three spacious panels with friendly 3D blank document, authenticated laptop, checklist icons. Exact large title "여권정보증명서 체크". Panel1 "1. 문서명 확인" subtitle "발급기록과 구분". Panel2 "2. 공식 경로" subtitle "본인인증 확인". Panel3 "3. 제출 전 점검" subtitle "언어 · 번호 · 발급일". Exact footer "증명서 발급과 여권 재발급은 다릅니다". Large unclipped mobile-readable Korean lettering. No people, real passport or personal numbers, seals, logos, watermark, extra text.

## 검수 및 배포

- 홈·전체 글·발급조회 목록·검색 데이터·본문·OG/Twitter·sitemap 연결. 전체 56편, 발급조회 31편.
- 카테고리 중복·목적지·이미지·canonical 검사 통과. JS 구문 검사와 git diff --check 통과.
- 재사용 검사기의 immigration-fact 잔재 검사는 정상적인 관련 글 내부 링크를 오탐했다. 새 전용 검사기에서 실제 이전 템플릿 slug와 인코딩, 내부 경로·앵커·JSON-LD·sitemap 검사 후 오류 없음 확인. 원본 검사기 변경 없음.
- 데스크톱 육안 확인, 모바일 390×844에서 scrollWidth 375로 가로 넘침 없음. #trouble 이동 및 두 이미지 로딩 정상.
- 기존 광고 로직 변경 없음. 렌더링 광고 구분 영역 2개 확인.
- aside-browser 스킬 실행 명령 aside guide 미설치 확인. 추가 설치하지 않고 기본 브라우저 도구로 공식 안내와 로컬 화면 검수.
- Search Console·AdSense 성과 이번 실행 미조회, 수치 추정 없음.
- 관련 9개 파일만 main 커밋·기존 SSH로 push하고 공개 본문/목록/sitemap/이미지 HTTP200과 배포 커밋 일치를 후속 실행 출력으로 확인하여 보고.
- 무관한 draft-assets와 홍보 운영 파일은 보존하고 커밋 제외.
