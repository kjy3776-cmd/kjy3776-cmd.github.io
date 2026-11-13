# 2026-11-13 여권 분실신고 신규 발행

- 오늘 신규 6/10, 기존 개선 2/2. 이번 실행 신규 1편. 기존 passport-online-reissue는 발급 신청·사진·수령 의도, 이번 글은 신고·무효·취소 불가·습득 후 처리로 분리. 실제 글 비교 완료.
- 외교부 여권 분실·습득(menuPos=26), 정부24 여권 분실 신고(CappBizCD=12620000003), 국민콜110 A01_700812, 생활법령정보 여권 재발급받기(csmSeq=1703) 본문 실제 읽음. 확인일/대상/대리·미성년·해외 예외 명시. 외교부와 생활법령의 신고 경로와 무효효력, 정부24 수수료/처리/취소불가, 110 대리서류 대조. 정부24 Node fetch는200이나 동적 본문미검출, web 도구에서는 해당 민원 본문 직접 확인. 다른 공식3곳 Node200/여권본문확인. 실제 신청·인증·서류전송 없음.
- 표준 reading-layout 및 기존CSS 사용. 홈·전체·신청신고 분류·본문·OG·sitemap 연결. 분류 공개14→15.
- built-in imagegen 사용, 1672×941 두 이미지 한글 시각검수 통과.
- 최종 assets/passport-loss-report-thumbnail.png. 원본 exec-e5040151-ac94-4024-8856-799b923c1dfe.png.
- 프롬프트1: infographic-diagram, landscape16:9 Korean practical-service thumbnail, cream/navy/teal/coral, huge text 여권 분실신고 / 신고 방법 · 취소 불가 확인, generic travel booklet and magnifier, no official logo/seal/personal data/fineprint.
- 최종 assets/passport-loss-report-steps.png. 원본 exec-f2d7b1e2-aac2-43c1-b9ec-24a5f507ec8d.png.
- 프롬프트2: infographic-diagram, landscape16:9 Korean three-panel body card, cream/navy/teal, 여권을 잃어버렸다면 / 1 습득 여부 확인 / 2 공식 경로로 신고 / 3 무효·재발급 확인 / 분실신고 후 취소 불가, generic magnifier/form/check icons, mobile readable, no official logos or personal data.
- 검수: 단일H1, canonical/JSONLD/headline/date/OG, 모든 로컬 링크 파일·앵커, 홈·전체·분류·sitemap 각각1회, 이미지 치수, diff공백 통과. Chrome390×844 문서375·본문349.4, 이미지2개로드/폭310.6, 광고표기2곳, 가로넘침없음. viewportreset/preview탭정리 완료. 제3자게시/성과추정 없음.
