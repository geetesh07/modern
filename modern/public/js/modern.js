// === Load Alpine ===
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/alpinejs@3.13.5/dist/cdn.min.js";
script.defer = true;
document.head.appendChild(script);

// === Dark Mode ===
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
});

// Optional: Global Dark Mode Toggle Key (e.g., press "D" to toggle)
document.addEventListener("keydown", (e) => {
  if (e.key === "D" && e.ctrlKey) {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    showToast("Switched to " + next + " mode", "info");
  }
});

// === Toast Message ===
window.showToast = function (msg = "Success", type = "success") {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-5 right-5 z-50 px-4 py-2 text-white rounded shadow-lg transition bg-${type === "success" ? "green" : type === "error" ? "red" : "gray"}-600`;
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => toast.remove(), 500);
  }, 3000);
};

// === Auto-enhance Sidebar ===
document.addEventListener("DOMContentLoaded", () => {
  const enhanceSidebar = () => {
    const sidebarItems = document.querySelectorAll(".sidebar-section .standard-sidebar-section a, .layout-side-section a");
    sidebarItems.forEach(el => {
      el.classList.add("flex", "items-center", "gap-2", "rounded-lg", "hover:bg-gray-100", "dark:hover:bg-slate-800", "p-2", "transition");
    });
  };

  setTimeout(enhanceSidebar, 1000);
});
