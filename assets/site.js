/* 막힘해결 — client-side search */
(function () {
  var POSTS = [
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
      title: "카카오톡 PC 로그인 무한로딩 해결",
      url: "/posts/kakao-pc-infinite-loading.html",
      tags: ["카카오톡", "PC", "로그인", "프로그램"],
      status: "planned"
    },
    {
      title: "크롬 메모리 사용량 줄이는 방법",
      url: "/posts/chrome-memory.html",
      tags: ["Chrome", "메모리", "브라우저", "웹"],
      status: "planned"
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
      status: "planned"
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.MAKHIM_POSTS = POSTS;
})();
