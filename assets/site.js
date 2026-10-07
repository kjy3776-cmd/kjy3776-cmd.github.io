/* 꿀TMI — client-side search */
(function () {
  var POSTS = [
    {
      title: "기본증명서 인터넷 발급: 일반·상세 선택과 개명 이력 확인",
      url: "/posts/basic-certificate-online-general-detailed.html",
      tags: ["생활·행정", "기본증명서", "인터넷 발급", "일반증명서", "상세증명서", "개명 이력", "전자가족관계등록시스템"],
      status: "live"
    },
    {
      title: "혼인관계증명서 인터넷 발급: 일반·상세 선택과 이혼 이력 확인",
      url: "/posts/marriage-relationship-certificate-online.html",
      tags: ["생활·행정", "혼인관계증명서", "인터넷 발급", "일반증명서", "상세증명서", "전자가족관계등록시스템"],
      status: "live"
    },
    {
      title: "건강보험료 납부확인서 온라인 발급: 기간·용도 선택과 출력 확인",
      url: "/posts/nhis-premium-payment-certificate-online.html",
      tags: ["건강백과", "건강보험료", "납부확인서", "건강보험료 납부확인서 발급", "정부24", "국민건강보험공단"],
      status: "live"
    },
    {
      title: "상속포기 방법: 3개월 기한·가정법원 신고·서류 확인",
      url: "/posts/inheritance-renunciation-deadline-court.html",
      tags: ["생활·행정", "상속포기", "상속포기 방법", "상속포기 3개월", "가정법원"],
      status: "live"
    },
    {
      title: "사망신고 언제까지? 1개월 기한·신고인·방문 준비서류",
      url: "/posts/death-registration-deadline-documents.html",
      tags: ["생활·행정", "사망신고", "사망신고 기한", "사망진단서", "가족관계등록"],
      status: "live"
    },
    {
      title: "인감증명서 인터넷 발급 가능할까? 일반용·부동산·금융기관 제출 구분",
      url: "/posts/seal-certificate-online-eligible-purposes.html",
      tags: ["내집마련꿀팁", "인감증명서", "정부24", "부동산 매도용", "금융기관 제출용"],
      status: "live"
    },
    {
      title: "혼인신고 어디서 하나요? 증인 2명·한쪽만 방문할 때 준비물",
      url: "/posts/marriage-registration-visit-witnesses.html",
      tags: ["생활·행정", "혼인신고", "혼인신고 증인", "한쪽만 혼인신고", "혼인관계증명서"],
      status: "live"
    },
    {
      title: "가족관계증명서 인터넷 발급: 일반·상세·특정 선택과 자녀 확인",
      url: "/posts/family-relationship-certificate-online.html",
      tags: ["생활·행정", "가족관계증명서", "인터넷 발급", "일반증명서", "상세증명서"],
      status: "live"
    },
    {
      title: "출생신고 언제·어디서 하나요? 1개월 기한과 온라인·방문 준비물",
      url: "/posts/birth-registration-online-or-visit.html",
      tags: ["생활·행정", "출생신고", "출생증명서", "온라인 출생신고", "전자가족관계등록시스템"],
      status: "live"
    },
    {
      title: "지방세 환급금 조회·신청: 위택스와 서울 ETAX에서 확인하는 방법",
      url: "/posts/wetax-local-tax-refund-lookup.html",
      tags: ["돈버는꿀팁", "지방세 환급금", "위택스", "스마트위택스", "서울시 ETAX"],
      status: "live"
    },
    {
      title: "주택 임대차계약 신고 대상·기한·온라인 신청",
      url: "/posts/rental-contract-report-eligibility-online.html",
      tags: ["내집마련꿀팁", "임대차 신고", "전월세 신고", "보증금 6천만 원", "월세 30만 원"],
      status: "live"
    },
    {
      title: "전월세 계약 전 확정일자 부여현황 확인: 임대인 동의와 선순위 보증금",
      url: "/posts/fixed-date-rental-history-before-lease.html",
      tags: ["내집마련꿀팁", "확정일자 부여현황", "선순위 보증금", "임대인 동의", "전월세 계약"],
      status: "live"
    },
    {
      title: "정부24 전입신고 통보서비스 신청: 세대주·소유자·임대인 자격과 서류",
      url: "/posts/move-in-notification-service-eligibility.html",
      tags: ["내집마련꿀팁", "전입신고 통보서비스", "세대주", "소유자", "임대인", "주소 변경 알림", "정부24"],
      status: "live"
    },
    {
      title: "전월세 임대인 미납국세 열람: 동의 없이 가능한 보증금·신청 기한",
      url: "/posts/unpaid-national-tax-inspection-before-lease.html",
      tags: ["내집마련꿀팁", "미납국세 열람", "전월세 계약", "임대인 동의", "보증금 1천만원", "세무서"],
      status: "live"
    },
    {
      title: "전세계약 전 HUG 안심전세 앱 집주인 정보조회: 임대인 동의·신청 조건",
      url: "/posts/hug-ansimjeonse-landlord-info-before-contract.html",
      tags: ["내집마련꿀팁", "HUG", "안심전세", "임대인 정보조회", "전세계약", "집주인 조회"],
      status: "live"
    },
    {
      title: "전월세 계약 전 임대인 국세 납세증명서 확인: 지방세와 차이·발급 경로",
      url: "/posts/national-tax-certificate-before-lease.html",
      tags: ["내집마련꿀팁", "국세 납세증명서", "전월세 계약", "임대인", "정부24", "홈택스"],
      status: "live"
    },
    {
      title: "전월세 계약 전 건축물대장 무료 열람: 정부24에서 용도·위반 표시 확인",
      url: "/posts/building-register-before-lease-online.html",
      tags: ["내집마련꿀팁", "건축물대장", "정부24", "무료 열람", "집합건축물대장", "위반건축물", "전월세 계약"],
      status: "live"
    },
    {
      title: "국민건강보험 환급금 3가지 차이와 조회·신청 방법",
      url: "/posts/nhis-refund-lookup-types.html",
      tags: ["건강백과", "건강보험 환급금", "본인부담상한액 초과금", "본인부담금환급금", "보험료 환급금", "국민건강보험공단", "환급금 조회", "환급금 신청"],
      status: "live"
    },
    {
      title: "원천동 광교 A17 자연앤센트레빌 600호 공급 계획: 위치·지분적립형·청약 자격 확인",
      url: "/posts/gwanggyo-a17-centreville-supply-guide.html",
      tags: ["내집마련꿀팁", "광교 A17", "광교 자연앤센트레빌", "원천동", "원천동 633", "지분적립형", "공공분양", "청약 자격", "600호"],
      status: "live"
    },
    {
      title: "힐스테이트 안양펠루스 줍줍 5억대? 10월 2일 임의공급 6세대 분양가·청약 조건",
      url: "/posts/hillstate-anyang-pellus-random-supply-2026.html",
      tags: ["내집마련꿀팁", "힐스테이트 안양펠루스", "안양동", "줍줍", "임의공급", "무순위", "분양가", "청약홈", "2026940215"],
      status: "live"
    },
    {
      title: "지방세 납세증명서 인터넷 발급: 정부24 무료 신청과 유효기간 확인",
      url: "/posts/local-tax-payment-certificate-online.html",
      tags: ["돈버는꿀팁", "지방세", "지방세 납세증명서", "완납증명", "정부24", "유효기간", "무료 발급"],
      status: "live"
    },
    {
      title: "건강보험 자격득실확인서 온라인 발급: 정부24·공단 경로와 제출 전 확인",
      url: "/posts/health-insurance-qualification-history-online.html",
      tags: ["건강백과", "건강보험", "자격득실확인서", "정부24", "국민건강보험공단", "온라인 발급", "재직증명서"],
      status: "live"
    },
    {
      title: "전입세대확인서 열람·발급: 전월세 계약 전 신청 자격·준비물·방문 수수료",
      url: "/posts/move-in-household-certificate-before-lease.html",
      tags: ["내집마련꿀팁", "전입세대확인서", "전입세대열람", "전월세 계약", "방문 신청", "주민센터", "열람 수수료"],
      status: "live"
    },
    {
      title: "국민연금 예상연금액 조회: 가입내역 기반 조회와 모의계산 차이",
      url: "/posts/nps-expected-pension-lookup.html",
      tags: ["돈버는꿀팁", "국민연금", "예상연금액", "가입내역", "납부내역", "모의계산", "연금 조회"],
      status: "live"
    },
    {
      title: "주민등록등본 인터넷 발급 방법: 정부24 무료 신청·초본 선택·출력 확인",
      url: "/posts/gov24-resident-registration-copy-online.html",
      tags: ["내집마련꿀팁", "주민등록등본", "주민등록표 등본", "주민등록표 초본", "정부24", "인터넷 발급", "무료 발급"],
      status: "live"
    },
    {
      title: "국가건강검진 결과 온라인 조회·출력: 공단에서 안 보일 때 확인 순서",
      url: "/posts/health-checkup-results-online.html",
      tags: ["건강백과", "국가건강검진", "건강검진 결과", "결과조회", "결과 출력", "국민건강보험공단"],
      status: "live"
    },
    {
      title: "2026년 국가건강검진 대상자 조회: 일반·암검진 확인과 검진기관 찾기",
      url: "/posts/national-health-checkup-eligibility-lookup.html",
      tags: ["건강백과", "국가건강검진", "건강검진 대상자", "일반건강검진", "암검진", "검진기관", "국민건강보험공단", "2026"],
      status: "live"
    },
    {
      title: "전입신고와 확정일자 차이: 전월세 세입자가 둘 다 확인해야 하는 이유",
      url: "/posts/move-in-report-fixed-date-difference.html",
      tags: ["내집마련꿀팁", "전입신고", "확정일자", "대항력", "우선변제권", "전월세", "보증금", "이사"],
      status: "live"
    },
    {
      title: "전월세 계약 전 등기사항증명서 확인: 소유자·근저당·신탁 점검",
      url: "/posts/lease-registry-before-contract.html",
      tags: ["내집마련꿀팁", "전월세", "등기사항증명서", "등기부등본", "인터넷등기소", "소유자", "근저당", "신탁", "전세사기 예방"],
      status: "live"
    },
    {
      title: "청년도약계좌 부분인출: 2년·3년 조건과 정부기여금",
      url: "/posts/youth-leap-account-partial-withdrawal.html",
      tags: ["돈버는꿀팁", "청년도약계좌", "부분인출", "2년", "3년", "정부기여금", "중도해지", "서민금융진흥원"],
      status: "live"
    },
    {
      title: "예방접종증명서 온라인 발급: 본인·자녀 국문·영문 신청과 기록 누락 확인",
      url: "/posts/vaccination-certificate-online.html",
      tags: ["건강백과", "예방접종증명서", "질병관리청", "예방접종도우미", "접종기록", "국문", "영문", "자녀"],
      status: "live"
    },
    {
      title: "정부24 전입신고 온라인 신청: 세대주 확인·처리결과 조회",
      url: "/posts/gov24-move-in-report-status.html",
      tags: ["정부24", "전입신고", "세대주 확인", "처리완료", "나의 신청내역", "이사", "내집마련꿀팁"],
      status: "live"
    },
    {
      title: "홈택스 미수령 국세환급금 조회·환급계좌 신고 방법",
      url: "/posts/hometax-unclaimed-refund-account.html",
      tags: ["국세청", "홈택스", "국세환급금", "미수령 환급금", "환급금찾기", "환급계좌", "돈버는꿀팁"],
      status: "live"
    },
    {
      title: "정부24 혜택알리미 ‘나의 혜택’ 조회 방법: 로그인·이용동의부터 신청 확인까지",
      url: "/posts/gov24-benefit-alert-my-benefits.html",
      tags: ["정부24", "혜택알리미", "나의 혜택", "정부 혜택 조회", "지원금", "돈버는꿀팁", "간편찾기"],
      status: "live"
    },
    {
      title: "Windows 11 업데이트 오류 0x80070422: 서비스 ‘사용 안 함’ 확인과 복구",
      url: "/posts/windows-update-0x80070422.html",
      tags: ["Windows 11", "윈도우 업데이트", "Windows Update", "0x80070422", "ERROR_SERVICE_DISABLED", "서비스 사용 안 함", "서비스 시작", "BITS"],
      status: "live"
    },
    {
      title: "Adobe Creative Cloud 앱 실행 ‘라이선스 오류 205’ 해결 7단계",
      url: "/posts/creative-cloud-license-error-205.html",
      tags: ["Adobe", "Creative Cloud", "크리에이티브 클라우드", "라이선스 오류 205", "error 205", "앱 실행 오류", "Windows 자격 증명 관리자", "Adobe App"],
      status: "live"
    },
    {
      title: "ChatGPT ‘업로드 한도에 도달했습니다(upload limit reached)’ 해결 7단계",
      url: "/posts/chatgpt-upload-limit-reached.html",
      tags: ["ChatGPT", "챗GPT", "업로드 한도에 도달했습니다", "upload limit reached", "파일 업로드 한도", "Library Storage", "저장 공간", "프로젝트 파일 제한"],
      status: "live"
    },
    {
      title: "Windows 11 ‘Bluetooth 켜기 버튼 사라짐’ 해결 7단계",
      url: "/posts/windows11-bluetooth-toggle-missing.html",
      tags: ["Windows 11", "윈도우11", "Bluetooth", "블루투스", "켜기 버튼 사라짐", "블루투스 토글 없음", "빠른 설정", "블루투스 어댑터", "드라이버"],
      status: "live"
    },
    {
      title: "디스코드(Discord) ‘RTC 연결 중(RTC Connecting)’ 무한 대기 해결 7단계",
      url: "/posts/discord-rtc-connecting.html",
      tags: ["디스코드", "Discord", "RTC 연결 중", "RTC Connecting", "No Route", "ICE Checking", "음성 채널 연결", "음성 서버", "방화벽"],
      status: "live"
    },
    {
      title: "ChatGPT 앱 ‘DeviceCheckError’ 로그인 안 됨: 날짜·시간·기기 인증 해결 7단계",
      url: "/posts/chatgpt-devicecheckerror.html",
      tags: ["ChatGPT", "챗GPT", "DeviceCheckError", "기기의 날짜와 시간", "인터넷 연결", "기기 인증", "모바일 로그인", "Play 프로텍트 인증"],
      status: "live"
    },
    {
      title: "Adobe Photoshop ‘스크래치 디스크가 꽉 찼기 때문에 요청을 완료할 수 없음’ 해결 7단계",
      url: "/posts/photoshop-scratch-disk-full.html",
      tags: ["Adobe", "Photoshop", "포토샵", "스크래치 디스크", "스크래치 디스크가 꽉 찼으므로", "scratch disks are full", "Photoshop Temp", "스크래치 디스크 공간 부족"],
      status: "live"
    },
    {
      title: "Excel ‘파일 형식 또는 파일 확장명이 잘못되어 열 수 없습니다’ 해결 7단계",
      url: "/posts/excel-file-format-extension-invalid.html",
      tags: ["Excel", "엑셀", "파일 형식 또는 파일 확장명이 잘못되어", "파일을 열 수 없습니다", "xlsx", "열기 및 복구", "데이터 추출", "통합 문서 손상"],
      status: "live"
    },
    {
      title: "웨이브(Wavve) 로그인 안 됨: SNS·이메일 계정 복구 7단계",
      url: "/posts/wavve-login-account-recovery.html",
      tags: ["웨이브", "Wavve", "OTT", "로그인 안됨", "아이디 찾기", "비밀번호 재설정", "SNS 간편가입", "카카오 로그인", "네이버 로그인", "이용권 안보임"],
      status: "live"
    },
    {
      title: "티빙(TVING) ‘크롬캐스트 버튼이 안 보임’ 해결 7단계",
      url: "/posts/tving-chromecast-button-missing.html",
      tags: ["티빙", "TVING", "OTT", "크롬캐스트", "Chromecast", "Cast 버튼", "광고형 스탠다드", "티빙 라이트", "TV 앱", "와이파이"],
      status: "live"
    },
    {
      title: "Windows 11 USB 오디오 ‘이 장치를 시작할 수 없습니다(코드 10)’ 해결 7단계",
      url: "/posts/windows-usb-audio-code-10.html",
      tags: ["Windows 11", "윈도우11", "USB 오디오", "USB 헤드셋", "코드 10", "이 장치를 시작할 수 없습니다", "USB Audio Class 1.0", "KB5124008", "소리 안 남"],
      status: "live"
    },
    {
      title: "ChatGPT ‘네트워크 오류가 발생했습니다’ 해결 7단계",
      url: "/posts/chatgpt-network-error.html",
      tags: ["ChatGPT", "챗GPT", "네트워크 오류가 발생했습니다", "A network error occurred", "Network error", "웹소켓", "VPN", "프록시", "브라우저"],
      status: "live"
    },
    {
      title: "Excel ‘#SPILL! — 분산 범위가 비어 있지 않음’ 해결 7단계",
      url: "/posts/excel-spill-range-not-blank.html",
      tags: ["Excel", "엑셀", "#SPILL!", "분산 범위가 비어 있지 않음", "FILTER", "UNIQUE", "동적 배열", "장애 셀", "병합 셀", "표 수식"],
      status: "live"
    },
    {
      title: "넷플릭스(Netflix) ‘tvq-pb-101(2.10.5006): 너무 많은 디바이스’ 해결 7단계",
      url: "/posts/netflix-tvq-pb-101-2-10-5006.html",
      tags: ["넷플릭스", "Netflix", "OTT", "tvq-pb-101", "2.10.5006", "너무 많은 디바이스", "동시 시청", "활성 스트림", "계정 보안"],
      status: "live"
    },
    {
      title: "넷플릭스(Netflix) ‘오류 ui-800-3’ 해결 7단계",
      url: "/posts/netflix-ui-800-3.html",
      tags: ["넷플릭스", "Netflix", "OTT", "스마트 TV", "ui-800-3", "DRM", "네트워크 오류", "셋톱박스", "앱 재설정"],
      status: "live"
    },
    {
      title: "OneDrive ‘로그인할 수 없습니다 0x8004de40’ 해결 7단계",
      url: "/posts/onedrive-0x8004de40.html",
      tags: ["OneDrive", "원드라이브", "Windows", "Microsoft 365", "로그인할 수 없습니다", "0x8004de40", "클라우드 연결", "초기화", "TLS"],
      status: "live"
    },
    {
      title: "Windows 11 ‘미리 보기하려는 파일이 컴퓨터에 해를 끼칠 수 있습니다’ 해결 7단계",
      url: "/posts/windows-file-preview-warning.html",
      tags: ["Windows", "Windows 11", "파일 탐색기", "미리 보기", "PDF 미리보기", "컴퓨터에 해를 끼칠 수 있습니다", "Mark of the Web", "MotW", "차단 해제"],
      status: "live"
    },
    {
      title: "Adobe Creative Cloud ‘오류 206: 네트워크 연결 없음’ 해결 7단계",
      url: "/posts/creative-cloud-error-206.html",
      tags: ["Adobe", "Creative Cloud", "오류 206", "네트워크 연결 없음", "서버 연결 끊김", "설치", "업데이트", "방화벽"],
      status: "live"
    },
    {
      title: "Windows 11 업데이트 ‘설치 오류 0x80070002’ 해결 7단계",
      url: "/posts/windows-update-0x80070002.html",
      tags: ["Windows", "Windows 11", "Windows Update", "윈도우 업데이트", "0x80070002", "설치 오류", "DISM", "SFC"],
      status: "live"
    },
    {
      title: "Adobe Acrobat PDF ‘액세스가 거부되었습니다’ 해결 7단계",
      url: "/posts/acrobat-pdf-access-denied.html",
      tags: ["Adobe", "Acrobat", "Reader", "PDF", "액세스가 거부되었습니다", "Access Denied", "보호 모드"],
      status: "live"
    },
    {
      title: "카카오톡 PC 로그인 무한로딩 해결 7단계",
      url: "/posts/kakao-pc-infinite-loading.html",
      tags: ["카카오톡", "카톡", "PC", "로그인", "무한로딩", "방화벽", "재설치"],
      status: "live"
    },
    {
      title: "NVIDIA 그래픽 드라이버 설치 실패 해결 7단계",
      url: "/posts/nvidia-driver-install-failed.html",
      tags: ["NVIDIA", "엔비디아", "Windows", "그래픽", "드라이버", "설치 실패", "클린 설치"],
      status: "live"
    },
    {
      title: "Adobe Acrobat PDF 인쇄 안 될 때 해결 7단계",
      url: "/posts/acrobat-pdf-print-error.html",
      tags: ["Adobe", "Acrobat", "PDF", "인쇄", "프린터", "이미지로 인쇄"],
      status: "live"
    },
    {
      title: "Claude 로그인 안 될 때: 이메일 링크·Google·인증 코드 해결 7단계",
      url: "/posts/claude-login-error.html",
      tags: ["Claude", "클로드", "AI", "로그인", "이메일", "인증 코드", "조직 계정", "Apple 비공개 이메일"],
      status: "live"
    },
    {
      title: "ChatGPT 로그인 안 될 때: 인증 방식·무한 확인·OTP 해결 7단계",
      url: "/posts/chatgpt-login-error.html",
      tags: ["ChatGPT", "챗GPT", "AI", "로그인", "OTP", "인증", "Cloudflare"],
      status: "live"
    },
    {
      title: "X 로그인 안 될 때: 비밀번호·이메일·인증 코드 복구 7단계",
      url: "/posts/x-login-recovery.html",
      tags: ["X", "트위터", "SNS", "로그인", "비밀번호", "인증 코드", "계정 복구"],
      status: "live"
    },
    {
      title: "Adobe Creative Cloud 로그인 안 될 때 해결 7단계",
      url: "/posts/creative-cloud-login-error.html",
      tags: ["Adobe", "Creative Cloud", "어도비", "로그인", "서버 오류", "활성화", "구독 갱신", "라이선스"],
      status: "live"
    },
    {
      title: "Adobe Firefly 50% 할인 조건: 무제한 범위와 플랜 비교",
      url: "/posts/adobe-firefly-50-off.html",
      tags: ["Adobe", "Firefly", "어도비", "AI", "50% 할인", "무제한 크레딧", "요금제"],
      status: "live"
    },
    {
      title: "ChatGPT 음성모드 마이크 안 될 때 해결 7단계",
      url: "/posts/chatgpt-voice-mic.html",
      tags: ["ChatGPT", "챗GPT", "AI", "음성모드", "마이크", "권한"],
      status: "live"
    },
    {
      title: "인스타그램 알림 안 올 때: 아이폰·갤럭시 해결 7단계",
      url: "/posts/instagram-notifications.html",
      tags: ["Instagram", "인스타그램", "SNS", "알림", "DM", "아이폰", "갤럭시", "수면 모드", "조용한 모드", "예약 요약", "집중 모드"],
      status: "live"
    },
    {
      title: "제미나이 파일 업로드 안 될 때: 오류별 해결 7단계",
      url: "/posts/gemini-file-upload-error.html",
      tags: ["Gemini", "제미나이", "AI", "파일", "업로드", "PDF", "파일이 포함된 채팅의 한도", "Drive 파일 추가", "데이터 삭제"],
      status: "live"
    },
    {
      title: "엑셀 빈 행 한 번에 삭제하는 3가지 방법",
      url: "/posts/excel-blank-rows.html",
      tags: ["Excel", "Office", "빈 행", "이동 옵션", "필터", "COUNTA"],
      status: "live"
    },
    {
      title: "HEIC를 JPG로 변환하는 무료 방법: PC 일괄 변환·iCloud",
      url: "/posts/heic-jpg-convert.html",
      tags: ["HEIC", "JPG", "아이폰", "변환", "Windows", "사진"],
      status: "live"
    },
    {
      title: "디스코드 마이크 안 될 때 체크리스트 7단계",
      url: "/posts/discord-mic-fix.html",
      tags: ["Discord", "마이크", "Windows", "음성", "권한"],
      status: "live"
    },
    {
      title: "크롬 메모리 사용량 줄이는 방법",
      url: "/posts/chrome-memory.html",
      tags: ["Chrome", "메모리", "브라우저", "웹"],
      status: "live"
    },
    {
      title: "윈도우11 와이파이 아이콘 사라짐 복구",
      url: "/posts/win11-wifi-icon.html",
      tags: ["Windows11", "와이파이", "아이콘"],
      status: "live"
    }
  ];

  function normalize(s) {
    return (s || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function search(q) {
    q = normalize(q);
    if (!q) return [];
    var parts = q.split(" ").filter(Boolean);
    return POSTS.filter(function (p) {
      if (p.status !== "live") return false;
      var hay = normalize(p.title + " " + p.tags.join(" "));
      return parts.every(function (part) {
        return hay.indexOf(part) !== -1;
      });
    });
  }

  function render(results, box) {
    if (!results.length) {
      box.innerHTML = '<div class="search-empty">검색 결과가 없습니다.</div>';
      box.classList.add("open");
      return;
    }
    box.innerHTML = results
      .map(function (p) {
        return (
          '<a href="' +
          p.url +
          '"><strong>' +
          p.title +
          "</strong>" +
          '<span class="sr-tags">' +
          p.tags.slice(0, 4).join(" · ") +
          "</span></a>"
        );
      })
      .join("");
    box.classList.add("open");
  }

  function init() {
    var input = document.getElementById("site-search");
    var box = document.getElementById("search-results");
    if (!input || !box) return;

    var timer;
    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var q = input.value;
        if (!normalize(q)) {
          box.classList.remove("open");
          box.innerHTML = "";
          return;
        }
        render(search(q), box);
      }, 120);
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        box.classList.remove("open");
        input.blur();
      }
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-wrap")) {
        box.classList.remove("open");
      }
    });
  }

  function enhanceNavigation() {
    document.querySelectorAll(".nav").forEach(function (nav) {
      if (nav.querySelector('a[href="/articles.html"]')) return;
      var search = nav.querySelector(".search-wrap");
      if (!search) return;
      var link = document.createElement("a");
      link.href = "/articles.html";
      link.textContent = "전체 글";
      link.className = "nav-hide-sm";
      nav.insertBefore(link, search);
    });
    document.querySelectorAll(".footer-links").forEach(function (footer) {
      if (footer.querySelector('a[href="/articles.html"]')) return;
      var link = document.createElement("a");
      link.href = "/articles.html";
      link.textContent = "전체 글";
      footer.appendChild(link);
    });
  }

  function enhanceRelated() {
    var related = document.querySelector(".related ul");
    if (!related) return;
    var path = window.location.pathname;
    var current = POSTS.find(function (p) { return p.url === path; });
    var existing = Array.prototype.map.call(related.querySelectorAll("a"), function (a) { return a.getAttribute("href"); });
    var currentTags = current ? current.tags.map(normalize) : [];
    var candidates = POSTS.filter(function (p) {
      return p.status === "live" && p.url !== path && existing.indexOf(p.url) === -1;
    }).map(function (p) {
      var score = p.tags.reduce(function (n, tag) { return n + (currentTags.indexOf(normalize(tag)) !== -1 ? 1 : 0); }, 0);
      return { post: p, score: score };
    }).sort(function (a, b) { return b.score - a.score; });
    candidates.slice(0, Math.max(0, 5 - existing.length)).forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.post.url;
      a.textContent = item.post.title;
      li.appendChild(a);
      related.appendChild(li);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { init(); enhanceNavigation(); enhanceRelated(); });
  } else {
    init();
    enhanceNavigation();
    enhanceRelated();
  }

  window.MAKHIM_POSTS = POSTS;
})();
