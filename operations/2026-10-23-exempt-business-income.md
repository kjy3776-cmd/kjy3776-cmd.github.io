# 2026-10-23 면세사업자 수입금액증명 신규 발행

- 대상: /posts/exempt-business-income-certificate.html
- 기존 과세표준증명 글의 비교 설명과 구분되는 면세사업자용 신청·조회 오류 의도. 기존 글 대체나 중복 재발행 아님.
- 이번 배포 완료 시 한국 시간 당일 신규 2편, 개선 1편. 개선은 신규 수에 포함하지 않음.
- 공식 확인일: 2026-10-23. 실제 개인 납세정보 조회·로그인·발급은 수행하지 않음.

## 검증 자료

1. https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000329 — 무료, 신청 경로, 즉시(근무시간 내 3시간), 온라인 대리 불가, 방문·영문 준비. 페이지 최근 내용 확인일 2025-10-29.
2. https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=8648&mi=13322 — 즉시발급 증명 목록에서 면세 수입금액·과세표준·사업자등록증명을 별도 확인. 인천공항 납세지원센터 안내임을 본문 명시.
3. https://www.hanam.go.kr/jumin/contents.do?key=11527 — 해당 증명 무인발급 무료·본인 확인. 지역 사례이며 모든 기기 공통 취급으로 확대하지 않음.

## 내용 및 검사

- 대상·조건·예외·확인일 명시. 자료 없음=수입 0원으로 단정하지 않음. 세액·자격·승인 보장 없음.
- 홈, 전체 목록, 발급·조회 목록, 검색 데이터, 본문 및 OG/Twitter 이미지 연결. canonical·JSON-LD·sitemap 검사.
- node --check assets/site.js 통과. 카테고리 유일성·전체 78편 커버리지·링크·이미지 검사 통과(발급·조회 53편).
- 내부 링크·앵커·JSON-LD·이미지 치수 검사 통과, git diff --check 통과.
- 내장 브라우저 모바일 390×844: 문서 가로 넘침 없음(scrollWidth 375), 이미지 2장 로딩 확인, 표시 폭 310.625px. 620px 비교표는 310.625px 컨테이너 내 overflow-x:auto로 스크롤. 신청 순서 앵커 이동 확인.
- 기존 광고 설정 변경 없음. 광고 라벨과 공식 링크의 광고 아님 구분 확인.
- Search Console·AdSense 실제 성과를 조회하지 않았으며 수치 추정 없음. 외부 커뮤니티 게시 없음.

## 이미지 생성 기록

- imagegen 스킬, 신규 생성 2회, opaque background, 참조 이미지 없음.
- 썸네일: assets/exempt-business-income-thumbnail.png (1672×941)
- 카드뉴스: assets/exempt-business-income-card-news.png (1536×1024)
- 두 이미지 육안 검수 완료. 실제 증명서·개인 식별정보·공식 인장 사용 없음.
- 썸네일 프롬프트: Use case: editorial thumbnail, wide16:9 Korean website. Navy white yellow realistic small business desk with laptop calculator generic blank tax papers. Huge mobile-readable exact title "면세사업자 수입금액증명". Subtitle "무료 발급·기간·서류 확인". No official seals, no real identifiers or amounts, no extra text, no approval promise. Opaque background.
- 카드뉴스 프롬프트: Use case: infographic-diagram, landscape3:2 Korean card news. Navy pale blue white yellow clean readable typography. Exact title "수입금액증명 신청 점검". Four numbered panels exact labels "1 사업자 유형 확인", "2 사업장·기간 대조", "3 신청 결과 확인", "4 제출 서류 점검". Footer exact text "과세표준증명과는 다른 문서". Generic business document calendar checklist icons, no official logos or personal data, no extra text. Opaque background.

## 배포 확인

기존 SSH 설정으로 main 커밋·푸시 후 GitHub Pages 성공과 공개 URL·목록·사이트맵·이미지 HTTP 200을 별도 확인한다. 완료 결과는 자동운영 응답에 기록한다.
