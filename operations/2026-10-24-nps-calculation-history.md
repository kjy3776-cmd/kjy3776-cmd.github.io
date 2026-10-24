# 연금산정용 가입내역 확인서 신규 발행

- 확인일 2026-10-24. 이번 1편 공개 완료 시 당일 신규 2편·개선 0편.
- /posts/nps-calculation-history-certificate.html. 기존 가입증명 글은 문서명 비교만 제공. 별도 발급 문서와 납부 반영·미납 표시 오류 의도로 신규 작성.
- 공식 대조: https://m.nps.or.kr/elctcvlcpt/comm/getOHAC0000M5.do?menuId=MN24001055 / https://www.nps.or.kr/elctcvlcpt/comm/getOHAC0000M3.do / https://www.nps.or.kr/pnsinfo/ntpsklg/getOHAF0097M0.do .
- 납부 이력·상실자 포함, 반영 최대 4일, 당월 기한 전 미납 표시 가능, 추납·반납금·연체금 항목 구분, 무인기 영문·사업장명 영문 변환 제한을 명시. 개인 자료 조회·실제 발급 없음. 연금액·자격·승인 보장 없음.
- 홈·전체·카테고리·검색·본문·OG 이미지 연결. canonical·JSON-LD·sitemap·이미지 치수·링크·앵커·카테고리 유일성 검사 통과. 총 공개 80편, 발급조회 55편.
- 모바일 390×844: 문서 scrollWidth 375, 표 컨테이너 310.625px overflow-x auto. 신청 순서 앵커 이동과 이미지 naturalWidth 1672/1536·표시폭 310.625 확인. 광고 라벨과 공식 링크 광고 아님 확인. 캡처 API 시간 초과로 스크린샷은 확보 못함. viewport 복원.
- 기존 광고 설정 및 관련 없는 미추적 파일 보존. Search Console·AdSense 실적 조회·추정 없음. 외부 게시 없음.

## 이미지 생성

- imagegen 기본 내장 도구로 불투명 신규 이미지 2장 생성. 참조 이미지 없음. 두 결과 육안 검수 완료.
- assets/nps-calculation-history-thumbnail.png (1672×941), assets/nps-calculation-history-card-news.png (1536×1024).
- 썸네일 프롬프트: Use case: ads-marketing. Wide16:9 Korean website title thumbnail. Realistic home desk with generic paper calendar calculator, navy blue white and yellow editorial style. Huge mobile readable exact title "연금산정용 가입내역" and subtitle "발급·납부 반영·미납 표시". No other text, official seal, real identifiers, money amounts, or approval promises. Opaque background.
- 카드뉴스 프롬프트: Use case: infographic-diagram. Landscape3:2 Korean website card news. Navy white pale blue yellow four panels with generic document calendar checklist printer icons. Exact title "가입내역 확인서 점검". Four exact labels "1 문서명 확인", "2 납부일 대조", "3 표시 항목 확인", "4 제출 조건 점검". Footer "미납 표시는 납부기한도 확인". Large mobile readable text, no other text, official seals, personal data, monetary amounts. Opaque background.

## 배포 확인

기존 SSH 설정으로 main 커밋·푸시 후 Pages 성공과 공개 글·목록·사이트맵·이미지 HTTP 200을 확인해 완료 응답에 기록한다.
