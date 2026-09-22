/* 막힘해결 — client-side search */
(function () {
  var POSTS = [
    {
      title: "Excel ‘#SPILL! — 분산 범위가 비어 있지 않음’ 해결 7단계",
      url: "/posts/excel-spill-range-not-blank.html",
      tags: ["Excel", "엑셀", "#SPILL!", "분산 범위가 비어 있지 않음", "FILTER", "UNIQUE", "동적 배열", "장애 셀", "병합 셀", "표 수식"],
      status: "live"
    },
    {
      title: "Netflix ‘tvq-pb-101(2.10.5006): 너무 많은 디바이스’ 해결 7단계",
      url: "/posts/netflix-tvq-pb-101-2-10-5006.html",
      tags: ["Netflix", "넷플릭스", "OTT", "tvq-pb-101", "2.10.5006", "너무 많은 디바이스", "동시 시청", "활성 스트림", "계정 보안"],
      status: "live"
    },
    {
      title: "Netflix(넷플릭스) ‘오류 ui-800-3’ 해결 7단계",
      url: "/posts/netflix-ui-800-3.html",
      tags: ["Netflix", "넷플릭스", "OTT", "스마트 TV", "ui-800-3", "DRM", "네트워크 오류", "셋톱박스", "앱 재설정"],
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
      tags: ["Claude", "클로드", "AI", "로그인", "이메일", "인증 코드"],
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
      tags: ["Adobe", "Creative Cloud", "어도비", "로그인", "서버 오류", "활성화"],
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
      tags: ["Instagram", "인스타그램", "SNS", "알림", "DM", "아이폰", "갤럭시"],
      status: "live"
    },
    {
      title: "제미나이 파일 업로드 안 될 때: 오류별 해결 7단계",
      url: "/posts/gemini-file-upload-error.html",
      tags: ["Gemini", "제미나이", "AI", "파일", "업로드", "PDF"],
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
      title: "OBS 검은화면 나올 때 고치는 법",
      url: "/posts/obs-black-screen.html",
      tags: ["OBS", "검은화면", "방송", "콘텐츠 제작"],
      status: "planned"
    },
    {
      title: "아이폰 사진 PC로 옮기는 방법",
      url: "/posts/iphone-photos-to-pc.html",
      tags: ["아이폰", "사진", "PC", "모바일"],
      status: "planned"
    },
    {
      title: "캡컷 워터마크 합법적으로 없애기",
      url: "/posts/capcut-watermark.html",
      tags: ["캡컷", "워터마크", "콘텐츠 제작"],
      status: "planned"
    },
    {
      title: "윈도우11 와이파이 아이콘 사라짐 복구",
      url: "/posts/win11-wifi-icon.html",
      tags: ["Windows11", "와이파이", "아이콘"],
      status: "live"
    },
    {
      title: "엑셀 VLOOKUP #N/A 오류 해결",
      url: "/posts/excel-vlookup-na.html",
      tags: ["Excel", "VLOOKUP", "#N/A", "Office"],
      status: "planned"
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
        var badge =
          p.status === "planned"
            ? ' <span class="badge-soon">예정</span>'
            : "";
        return (
          '<a href="' +
          p.url +
          '"><strong>' +
          p.title +
          "</strong>" +
          badge +
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
