let bool = false;
function sideBarButton() {
  bool = !bool;
  const sideNavItems = document.querySelectorAll("#mySidebar a");
  if (bool) {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    sideNavItems.forEach((item) => {
      item.querySelector("p").style.display = "block";
    });
  } else {
    document.getElementById("mySidebar").style.width = "90px";
    document.getElementById("main").style.marginLeft = "90px";

    sideNavItems.forEach((item) => {
      item.querySelector("p").style.display = "none";
    });
  }
}

let bool2 = false;
function notifButton() {
  bool2 = !bool2;
  if (bool2) {
    document.getElementById("announcements").style.visibility = "visible";
  } else {
    document.getElementById("announcements").style.visibility = "hidden";
  }
}

const sideBarOnLoad = () => {
  const sideNavItems = document.querySelectorAll("#mySidebar a");
  document.getElementById("mySidebar").style.width = "90px";
  document.getElementById("main").style.marginLeft = "90px";

  sideNavItems.forEach((item) => {
    item.querySelector("p").style.display = "none";
  });
};

sideBarOnLoad();