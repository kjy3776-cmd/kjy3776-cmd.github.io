# 2026-11-13 국민연금 추납 신규 1편

- 오늘 신규1/10, 개선0/2. 납부예외 글은 현재 납부를 쉬는 신청, 이번 글은 과거 인정기간의 추납 신청으로 의도 구분. 기존 글을 훼손하지 않음.
- 2026-11-13 공식 자료 3개 대조: NPS getOHAF0047M0.do?menuId=MN24001116, getOHAC0000M5.do?menuId=MN24001072, getOHAF0097M0.do. 현재자격·최대119개월·대상기간 예외·혼인관계 상세/전부공개/제출용·추가증빙·접수후 담당확인·최대60회 이자·신청월기준소득월액/납부기한월보험료율 확인. 개인 인증·내역조회·서류전송·납부 없음.
- 이미지 built-in imagegen 2종 1672×941 검수: assets/nps-back-payment-thumbnail.png, assets/nps-back-payment-steps.png. 원본 exec-d0bd9a73-47ba-43a6-bcd2-0ce3c6db1280.png / exec-24f64be0-e5ca-44b7-bf22-798ce9d78d7b.png.
- 프롬프트1: Korean editorial website title thumbnail, landscape16:9, cream/navy/orange, exact 국민연금 추납 신청 / 대상 · 서류 · 납부 확인. Large mobile-readable type, calendar/document/checkmark; no official logo/seal/promises.
- 프롬프트2: Korean landscape infographic, cream/navy/teal, exact 추납 신청 3단계 / 가입·기간 확인 / 서류·납부방법 / 고지·반영 확인. Three large cards and arrows, no fineprint/official logo/promises.

## 전날 KST 11월12일 보고
- 신규9편(첫만남이용권, 모바일건강보험증, 아동수당, 양육수당변경, 국민연금납부예외, 실업크레딧, 내용증명, 고용보험이력, 진료기록사본), 개선2편(행복출산, 우편물전송).
- 11개 커밋 main 푸시, 해당 실행에서 공개 HTTP200 확인. 마지막 e45ea3d.
- Search Console: 이번 실행 GSC Wizard list_sites 결과 payment_required/subscription_required. 활성 체험/구독 없어 조회 거절. 재연결이 아닌 해당 서비스 구독 활성화 후 재시도 필요. 수치 미확보.
- AdSense: 이번 실행 실제 수치 미조회. 수익 추정이나 보장 없음.

- 검수 완료: 공식URL 3개 HTTP200 및 추납 본문 확인. 단일H1/canonical/JSON-LD/날짜/OG이미지/내부파일/앵커/목록1회/sitemap1회/PNG치수/git diff --check 통과. Chrome390×844에서 문서폭375, 본문349.4, 이미지2개로드/폭310.6, 광고표기2곳, 가로넘침 없음. 이미지 한글 검수, viewport초기화·미리보기탭종료·서버종료.
