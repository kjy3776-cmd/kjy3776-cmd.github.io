# 차상위계층 확인서 발행 기록

- 실행: 2026-10-21 KST 15시 자동운영, 신규 1편.
- 완료 시 당일 집계: 신규 6편·개선 2편. 개선은 신규 최소 수량에 불포함.
- 글: posts/near-poverty-confirmation-certificate-online.html
- 중복 검토: 기존 수급자증명서 글은 다른 문서와의 차이로 차상위를 언급할 뿐. 본 글은 차상위계층 확인 자격에 한한 발급·조회 문제를 독립적으로 다룸.
- 공식 확인일 2026-10-21. 개인 자격 조회·로그인 후 발급은 수행하지 않음.
- 정부24 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000098 : 차상위계층 확인 자격만 발급 가능, 인터넷·방문, 무료, 즉시(근무시간 내 3시간), 제3자 위임/동의 서식. 페이지 변경·확인일 2025-06-18.
- 복지로 이용안내 https://m.bokjiro.go.kr/ssis-tem/cms/mob/intro/intro/info/index.html : 증명서 발급 대상에 차상위계층 확인서 열거, 별도 복지 증명서 구분, 검색·모의계산은 참고용.
- 복지로 사이트맵 https://m.bokjiro.go.kr/ssis-tem/cms/mob/customer/sitemap/index.html : 서비스 신청 → 증명서 발급 진위확인 → 증명서 발급 확인.
- 조건·예외: 발급과 신규 자격 심사 분리, 다른 차상위 자격·수급자증명서 등과 임의 대체 금지, 제3자 서류 확인, 발급/개별 사업 승인 보장 없음. 소득 기준·심사 기간을 임의 추정하지 않음.

## 이미지

imagegen 스킬 기본 내장 도구 모드로 생성한 후 아래 프로젝트 경로에 복사·시각 검수.

- assets/near-poverty-confirmation-certificate-thumbnail.png (1672×941)
- assets/near-poverty-confirmation-certificate-card-news.png (1536×1024)

썸네일 프롬프트:

Use case: ads-marketing. Asset type: Korean editorial website horizontal 16:9 title thumbnail. Polished realistic photo of a calm desk with laptop and blank generic document, hand holding document with no private details. Navy large title panel, white and yellow bold Korean typography readable on mobile. Text verbatim: "차상위계층 확인서" and "발급 대상·온라인 신청". Clean blue palette and generous margins. No official logos, seals, money promises, personal data, government certificate replication or watermark. Respectful neutral depiction.

카드뉴스 프롬프트:

Use case: infographic-diagram. Asset type: Korean editorial body card news, landscape 3:2. Polished blue-white four-panel guide with large numbered headings, generic document, computer, checklist and magnifier 3D illustrations. Respectful neutral tone and mobile-readable navy bold Korean typography. Text verbatim: title "차상위계층 확인서"; panels "1 자격 이름 확인", "2 정확한 서류 선택", "3 공식 경로 발급", "4 제출 조건 점검"; footer "확인서 발급과 자격 신청은 달라요". No government seal, logo, personal data, amounts, eligibility promises, fake official document or watermark. Clean generous margins.

## 검수·배포

- 홈·전체 목록·발급조회 카테고리·검색 색인·본문·OG/Twitter 이미지·canonical·sitemap 연결. 공개 카드 총 66편, 발급조회 41편.
- node --check assets/site.js, 카테고리 고유 카드/커버리지/링크/이미지/canonical 검사 통과. 새 글 내부 링크·앵커·JSON-LD·인코딩·이미지 치수 검사 및 git diff --check 통과.
- 이미지 제목·네 단계·면책 문구 시각 검수. 실제 개인 증명서나 식별정보 없음.
- Aside 미설치 확인, 설치 없이 CUA 사용. 로컬 데스크톱·390×844 모바일 줄바꿈·공식 버튼·비교표 내부 스크롤 확인. #steps 이동 성공, scrollWidth 375≤390, 이미지 naturalWidth 1672/1536 확인. 뷰포트 복원.
- 기존 광고 로더·슬롯·빠른 이동 코드는 유지, 광고 구분 2곳 및 공식 링크 광고 아님 표시 확인.
- 기존 SSH 설정으로 main 커밋·푸시. 배포와 공개 HTTP 검증은 실행 출력 및 완료 응답에 기록.
- Search Console·AdSense 성과를 본 실행에서 조회하지 않아 추정 수치 미기재. 외부 커뮤니티 게시 없음.
