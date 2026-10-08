/* 꿀TMI — client-side search */
(function () {
  var POSTS = [
    {
      title: "건강보험 피부양자 등록 방법: 90일 기준·서류·온라인 신고",
      url: "/posts/health-insurance-dependent-registration-90-days.html",
      tags: ["건강백과", "건강보험", "피부양자 등록", "피부양자 자격취득 신고", "90일", "가족관계증명서", "국민건강보험공단"],
      status: "live"
    },
    {
      title: "양도소득세 신고방법·기한·서류·가산세: 부동산 예정신고부터 확인",
      url: "/posts/capital-gains-tax-filing-deadline-documents-penalty.html",
      tags: ["돈버는꿀팁", "양도소득세", "양도소득세 신고방법", "양도소득세 신고기한", "양도소득세 서류", "양도소득세 가산세", "홈택스"],
      status: "live"
    },
    {
      title: "제적등본·초본 인터넷 발급: 차이와 법원 신청 경로",
      url: "/posts/removed-family-register-certificate-online.html",
      tags: ["생활·행정", "제적등본", "제적초본", "제적부", "옛 호적", "인터넷 발급", "전자가족관계등록시스템"],
      status: "live"
    },
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
  ];

  var primaryCategories = {"/posts/health-insurance-qualification-history-online.html":"발급·조회","/posts/wetax-local-tax-refund-lookup.html":"돈버는꿀팁","/posts/rental-contract-report-eligibility-online.html":"신청·신고","/posts/health-insurance-dependent-registration-90-days.html":"신청·신고","/posts/capital-gains-tax-filing-deadline-documents-penalty.html":"신청·신고","/posts/removed-family-register-certificate-online.html":"발급·조회","/posts/basic-certificate-online-general-detailed.html":"발급·조회","/posts/marriage-relationship-certificate-online.html":"발급·조회","/posts/nhis-premium-payment-certificate-online.html":"발급·조회","/posts/fixed-date-rental-history-before-lease.html":"내집마련꿀팁","/posts/move-in-notification-service-eligibility.html":"신청·신고","/posts/unpaid-national-tax-inspection-before-lease.html":"내집마련꿀팁","/posts/hug-ansimjeonse-landlord-info-before-contract.html":"내집마련꿀팁","/posts/national-tax-certificate-before-lease.html":"발급·조회","/posts/building-register-before-lease-online.html":"내집마련꿀팁","/posts/nhis-refund-lookup-types.html":"돈버는꿀팁","/posts/gwanggyo-a17-centreville-supply-guide.html":"내집마련꿀팁","/posts/hillstate-anyang-pellus-random-supply-2026.html":"내집마련꿀팁","/posts/local-tax-payment-certificate-online.html":"발급·조회","/posts/move-in-household-certificate-before-lease.html":"발급·조회","/posts/nps-expected-pension-lookup.html":"돈버는꿀팁","/posts/gov24-resident-registration-copy-online.html":"발급·조회","/posts/health-checkup-results-online.html":"건강백과","/posts/national-health-checkup-eligibility-lookup.html":"건강백과","/posts/move-in-report-fixed-date-difference.html":"내집마련꿀팁","/posts/lease-registry-before-contract.html":"내집마련꿀팁","/posts/youth-leap-account-partial-withdrawal.html":"돈버는꿀팁","/posts/vaccination-certificate-online.html":"발급·조회","/posts/gov24-move-in-report-status.html":"신청·신고","/posts/hometax-unclaimed-refund-account.html":"돈버는꿀팁","/posts/gov24-benefit-alert-my-benefits.html":"돈버는꿀팁","/posts/inheritance-renunciation-deadline-court.html":"신청·신고","/posts/death-registration-deadline-documents.html":"신청·신고","/posts/birth-registration-online-or-visit.html":"신청·신고","/posts/family-relationship-certificate-online.html":"발급·조회","/posts/marriage-registration-visit-witnesses.html":"신청·신고","/posts/seal-certificate-online-eligible-purposes.html":"발급·조회"};
  POSTS.forEach(function(p) { if (primaryCategories[p.url]) p.tags[0] = primaryCategories[p.url]; });
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

  function enhanceArticleAds() {
    var body = document.querySelector(".reading-layout .post-body");
    if (!body || body.querySelector(".manual-ad")) return;
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/assets/article-ads.css?v=20261008-sticky-nav";
    document.head.appendChild(stylesheet);
    function slot(id, sidebar) {
      var box = document.createElement("div");
      box.className = "manual-ad" + (sidebar ? " manual-ad-sidebar" : "");
      box.setAttribute("aria-label", "광고");
      var label = document.createElement("div");
      label.className = "manual-ad-label";
      label.textContent = "광고";
      box.appendChild(label);
      var ad = document.createElement("ins");
      ad.className = "adsbygoogle";
      ad.style.display = "block";
      ad.setAttribute("data-ad-client", "ca-pub-1328779882408752");
      ad.setAttribute("data-ad-slot", id);
      ad.setAttribute("data-ad-format", "rectangle");
      ad.setAttribute("data-full-width-responsive", sidebar ? "false" : "true");
      box.appendChild(ad);
      return box;
    }
    var fourth = Array.prototype.find.call(body.querySelectorAll("h2"), function (h) {
      return /^4[.)]\s/.test(h.textContent.trim());
    });
    if (fourth) fourth.parentNode.insertBefore(slot("1850818389", false), fourth);
    var sidebar = document.querySelector(".reading-sidebar");
    var desktop = window.matchMedia("(min-width: 941px)");
    if (sidebar && desktop.matches) {
      var rail = document.createElement("div");
      rail.className = "reading-rail";
      sidebar.parentNode.insertBefore(rail, sidebar);
      // The ad scrolls away first; only the navigation card remains sticky.
      rail.appendChild(slot("7770104338", true));
      rail.appendChild(sidebar);
    }
    // Do not request ads on local previews or inside a hidden mobile sidebar.
    function requestVisibleAds() {
      if (!/^(www\.)?innerapple\.com$/.test(window.location.hostname)) return;
      document.querySelectorAll(".manual-ad .adsbygoogle").forEach(function (ad) {
        if (ad.dataset.manualRequested || ad.getBoundingClientRect().width === 0) return;
        ad.dataset.manualRequested = "true";
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      });
    }
    stylesheet.addEventListener("load", requestVisibleAds);
    window.addEventListener("resize", requestVisibleAds);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { init(); enhanceNavigation(); enhanceRelated(); enhanceArticleAds(); });
  } else {
    init();
    enhanceNavigation();
    enhanceRelated();
    enhanceArticleAds();
  }

  window.MAKHIM_POSTS = POSTS;
})();
