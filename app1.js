"use strict";
(() => {
  function e() {
    $(".register input, select").val(""),
      $(".test-drive-form input, select").val(""),
      $("#flexCheckDefault1, #chkExchange, #chkWhatsApp").prop("checked", !1);
  }
//   GLOW LINE
  function v(e) {
    e.forEach((e) => {
      e.isIntersecting
        ? e.target.classList.add("is-inview")
        : e.target.classList.remove("is-inview");
    });
  }
//   button-group
  document.querySelectorAll("li.button-group").forEach((e) => {
    "mouseenter mouseleave touchend".split(" ").forEach(function (t) {
      e.addEventListener(t, function () {
        this.classList.toggle("is-active");
      });
    }),
      e.addEventListener("mouseleave", function () {
        this.classList.remove("is-active");
      });
  }),
//   button
Z.forEach((e) => {
    let t = e.classList.contains("thumbs"),
      r = e.querySelectorAll(".slide");
    t &&
      ((s = document.createElement("ul")),
      e.parentNode.parentNode.appendChild(s),
      s.classList.add("thumb-wrapper"),
      s.classList.add("body-push"),
      r.forEach((t) => {
        let r = t.querySelector("img").cloneNode(!1),
          i = document.createElement("li");
        i.appendChild(r),
          s.appendChild(i),
          s.querySelector("li:first-child").classList.add("is-active"),
          r.parentNode.addEventListener("click", function () {
            let r = e.querySelector(".slide.is-active");
            F(e, t, r);
          });
      })),
      (D = document.createElement("button")).classList.add("scroller-back"),
      (D.innerHTML = "Back"),
      (H = document.createElement("button")).classList.add("scroller-next"),
      (H.innerHTML = "Next");
    let i = document.createElement("span");
    i.classList.add("scroller-counter");
    let o = e.childElementCount;
    var s,
      n = 1;
    if (
      ((i.innerHTML = n + "/" + o),
      e.parentNode.insertBefore(D, e),
      e.parentNode.insertBefore(H, e),
      e.parentNode.insertBefore(i, e),
      [H, D].forEach((e) => {
        e.addEventListener("mouseover", function () {
          this.parentNode.parentNode.classList.add("is-hovered");
        }),
          e.addEventListener("mouseout", function () {
            this.parentNode.parentNode.classList.remove("is-hovered");
          });
      }),
      H.addEventListener("click", function () {
        let t = e.querySelector(".slide.is-active"),
          r = t.nextElementSibling;
        r && (F(e, r, t), n++, (i.innerHTML = n + "/" + o));
      }),
      D.addEventListener("click", function () {
        let t = e.querySelector(".slide.is-active"),
          r = t.previousElementSibling;
        r && (F(e, r, t), n--, (i.innerHTML = n + "/" + o));
      }),
      t)
    ) {
      var a = {
        root: e.parentNode,
        RootMargin: "0px 45% 0px 45%",
        threshold: 0.8,
      };
      let l = (e) => {
          e.forEach((e) => {
            var t = e.target.querySelector("img").getAttribute("src"),
              r = s.querySelectorAll(".is-active");
            (e.target.dataset.intersecting = e.intersectionRatio),
              e.isIntersecting
                ? (r.forEach((e) => {
                    e.classList.remove("is-active");
                  }),
                  e.target.classList.add("is-inview"),
                  s
                    .querySelector(`[src="${t}"]`)
                    .parentNode.classList.add("is-active"))
                : ((e.target.dataset.intersecting = 0),
                  e.target.classList.remove("is-inview"),
                  s
                    .querySelector(`[src="${t}"]`)
                    .parentNode.classList.remove("is-active"));
          });
        },
        c = new IntersectionObserver(l, a);
      r.forEach((e) => {
        c.observe(e);
      });
    }
    let u = () => {
      let t = e.querySelector(".slide.is-active");
      F(e, t);
    };
    window.addEventListener("resize", B(u));
  });
}