const mobileSidebarExpandButton = document.getElementById(
  "mobileSidebarExpandButton",
);
const mobileSidebarShrinkButton = document.getElementById(
  "mobileSidebarShrinkButton",
);
const sidebar = document.getElementById("sidebar");

const expandSidebar = () => {
  sidebar.classList.remove("-left-full");
  sidebar.classList.add("left-0");
  document.body.style.overflowY = "hidden";
};
const shrinkSidebar = () => {
  sidebar.classList.remove("left-0");
  sidebar.classList.add("-left-full");
  document.body.style.overflowY = "visible";
};

mobileSidebarExpandButton.addEventListener("click", expandSidebar);
mobileSidebarShrinkButton.addEventListener("click", shrinkSidebar);
