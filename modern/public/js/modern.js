// Inject Alpine
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/alpinejs@3.13.5/dist/cdn.min.js";
script.defer = true;
document.head.appendChild(script);

// Dark mode
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
});

// Toggle dark mode (Ctrl+D)
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "d") {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    showToast("Switched to " + next + " mode", "info");
  }
});

// Toast system
window.showToast = function (msg = "Saved!", type = "success") {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-5 right-5 z-[9999] text-white px-4 py-2 rounded-xl shadow-lg bg-${type === "success" ? "green" : "red"}-600 animate-fade`;
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
};

// Auto upgrade sidebar
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const sidebar = document.querySelector(".layout-side-section, .sidebar");
    if (sidebar) {
      sidebar.style.borderRadius = "1rem";
      sidebar.style.padding = "1rem";
      sidebar.style.backdropFilter = "blur(20px)";
      sidebar.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
    }
  }, 1000);
});
