# 운전면허증 분실 재발급 발행 기록

- 실행: 2026-10-21 KST 16시 자동운영, 신규 1편. 완료 시 당일 신규 7편·개선 2편.
- 글: posts/driver-license-lost-reissue-online.html
- 중복 검사: 기존 운전경력증명서·자동차등록증 재발급은 별도 문서. 면허증 분실/훼손 재발급 글은 없음.
- 공식 확인일 2026-10-21. 실제 개인 면허 조회·신청·결제는 하지 않음.
- 정부24 https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000029 : 경로별 처리기간·비용·신분확인·위임 서류·온라인 신청 경로. 최근 변경/확인일 2026-08-04.
- 한국도로교통공단 https://www.safedriving.or.kr/diGuide/selectDiGuide04.do : 준비물·사진·일반/IC 수수료·대리 신청·본인 수령·온라인 임시운전증명서 제한. 공개 브라우저의 실제 메뉴를 통해 이동하여 재확인.
- 한국도로교통공단 https://www.safedriving.or.kr/diGuide/selectDiGuide22.do?menuCd=MN-PO-12112 : IC의 본인 신청·사진 예외·비용·기기 조건 대조.
- 주의: 공식 처리기간은 실제 수령일 보장이 아님. 일반 재발급 사진 불필요와 IC 등록사진 부적합 예외 구분. 대리 신청과 본인 수령 구분. 갱신/적성검사·국제면허·재취득과 별도. 개인 운전 가능 여부 판정 금지.

## 이미지

imagegen 스킬 기본 내장 도구 모드로 생성 후 프로젝트 경로에 복사, 시각 검수.

- assets/driver-license-lost-reissue-thumbnail.png (1672×941)
- assets/driver-license-lost-reissue-card-news.png (1536×1024)

썸네일 프롬프트:

Use case: ads-marketing. Asset type: Korean editorial horizontal 16:9 website title thumbnail. Realistic tidy desk with closed wallet, car key, generic blank ID card face down and laptop. No real ID, personal data, license number, official seal, emblem or government logo. Large mobile-readable white and yellow bold Korean title on navy panel. Text verbatim: "운전면허증 재발급" and "분실·온라인 신청·수령 확인". Clean professional blue palette, generous margins, no watermark or extra text.

카드뉴스 프롬프트:

Use case: infographic-diagram. Asset type: Korean website body card news, horizontal 3:2. Clean polished navy blue-white four-panel graphic with 3D illustrations of blank generic ID card, wallet, laptop, calendar, checklist. Bold mobile-readable Korean exact text: title "운전면허증 재발급"; panels "1 분실·훼손 구분", "2 면허증 종류 선택", "3 수령 장소 확인", "4 본인 수령 준비"; footer "온라인 신청과 실물 수령은 달라요". Generous margins. No real personal details, license numbers, official seal, logos, invented forms, amounts or watermark.

## 검수·배포

- 홈·전체 목록·발급조회·검색 색인·본문·OG/Twitter·canonical·sitemap 연결. 총 공개 카드 67편, 발급조회 42편.
- node --check assets/site.js, 카테고리 고유 카드/커버리지/링크/이미지/canonical 검사, 새 글 내부 링크·앵커·JSON-LD·인코딩·이미지 치수, git diff --check 통과.
- 이미지 제목·네 단계 문구 시각 검수, 개인 식별정보·공적 서류 복제 없음.
- Aside 미설치 확인, 설치 없이 CUA 브라우저 사용. 데스크톱·390×844 모바일 줄바꿈·공식 버튼·처리기간 표 내부 스크롤 확인. #steps 이동 성공, scrollWidth 375≤390, 이미지 naturalWidth 1672/1536 확인. 뷰포트 복원.
- 기존 광고 로더/슬롯·빠른 이동 유지. 광고 구분 2곳 및 공식 링크 광고 아님 표시 확인.
- 기존 SSH 설정으로 main 커밋·푸시. 배포 작업 상태와 공개 HTTP 200 결과는 실행 출력·완료 응답에 기록.
- Search Console·AdSense 성과는 이번 실행에서 조회하지 않아 추정 수치 미기재. 외부 커뮤니티 게시 없음.
