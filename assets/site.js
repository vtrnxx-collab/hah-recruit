// スマホのメニュー開閉と、募集要項の院タブ切り替え
document.querySelectorAll(".nav-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const header = btn.closest(".site-header");
    const open = header.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
});

document.querySelectorAll("[role=tablist]").forEach((list) => {
  const tabs = [...list.querySelectorAll("[role=tab]")];
  const select = (tab) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
  };
  tabs.forEach((t) => t.addEventListener("click", () => select(t)));
  // jobs.html#cat のようにハッシュで院を指定できる
  const fromHash = tabs.find((t) => t.dataset.hash === location.hash.slice(1));
  if (fromHash) {
    select(fromHash);
    list.scrollIntoView();
  }
});

// 最初に表示されるときだけ、ふわっと出す(動きを減らす設定の人には出さない)
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  document.querySelectorAll("main > section > .wrap").forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}
