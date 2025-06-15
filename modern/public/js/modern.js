// 1) Load Alpine.js
(function(){
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/alpinejs@3.13.5/dist/cdn.min.js";
  s.defer = true;
  document.head.appendChild(s);
})();

// 2) Dark/Light Mode Toggle Button Injection
document.addEventListener("DOMContentLoaded", () => {
  // create the toggle button
  const btn = document.createElement("div");
  btn.id = "darkModeBtn";
  btn.innerText = "Toggle Theme";
  btn.style.cursor = "pointer";
  document.querySelector(".navbar .container-fluid")?.appendChild(btn);

  // set initial theme
  const stored = localStorage.getItem("theme");
  const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = stored || prefers;
  document.documentElement.setAttribute("data-theme", theme);

  // click to toggle
  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    showToast(`Switched to ${next}`, "success");
  });
});

// 3) Toast API
window.showToast = function(msg="Done", type="success"){
  const t = document.createElement("div");
  t.className = `toast toast-${type}`;
  t.innerText = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 3000);
};

// 4) Floating Action Button (FAB)
document.addEventListener("DOMContentLoaded", () => {
  const fab = document.createElement("button");
  fab.innerText = "+";
  fab.style.cssText = [
    'position:fixed','bottom:20px','right:20px','width:56px','height:56px',
    'border-radius:50%','font-size:2rem','color:white','background:var(--grad-light)',
    'box-shadow:var(--shadow-light)','border:none','cursor:pointer','z-index:1000'
  ].join(';');
  document.body.appendChild(fab);
  fab.onclick = ()=> showToast("FAB Clicked!", "success");
});

// 5) Force apply custom classes to existing elements (no HTML change)
document.addEventListener("DOMContentLoaded", () => {
  // Style all existing buttons
  document.querySelectorAll("button, .btn").forEach(b => {
    b.classList.add("!px-5","!py-2","!rounded-full","!transition","!transform","!hover:scale-[1.03]");
    b.style.background = "var(--grad-light)";
    b.style.color = "white";
  });
  // Style sidebar links
  document.querySelectorAll(".layout-side-section a, .standard-sidebar ul li a").forEach(el => {
    el.classList.add("!flex","!items-center","!gap-3","!px-4","!py-2","!rounded-lg","!transition");
  });
  // Convert list rows into cards
  document.querySelectorAll(".list-row").forEach(row => {
    row.classList.add("!rounded-xl","!mb-4","!p-4","!transition","!hover:scale-[1.01]");
  });
});
