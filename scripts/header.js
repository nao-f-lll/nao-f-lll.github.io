function toggleLanguageList() {
  var languageList = document.getElementById("language-list");
  languageList.style.display =
    languageList.style.display === "block" ? "none" : "block";
}

function selectLanguage(language) {
  var selectedLanguage = document.getElementById("selected-language");
  selectedLanguage.textContent = language;
}

document.addEventListener("click", function (event) {
  var languageButton = document.querySelector(".language-button");
  var languageList = document.getElementById("language-list");
  if (
    !languageButton.contains(event.target) &&
    !languageList.contains(event.target)
  ) {
    languageList.style.display = "none";
  }
});

function toggleInputSearch() {
  var searchButton = document.getElementById("search-button");
  var searchInput = document.getElementById("search-input");
  var searchIcon = document.getElementById("search-icon");

  searchInput.style.display =
    searchInput.style.display === "block" ? "none" : "block";

  var inputSearchState =
    searchInput.style.display === "block" ? "#069be7" : "black";

  searchButton.style.backgroundColor = inputSearchState;

  searchIcon.style.backgroundColor = inputSearchState;
}

function toggleMenuList() {
  var menuList = document.getElementById("nav-list");
  var searchIcon = document.getElementById("search-icon");
  var searchButton = document.getElementById("search-button");
  var closeMenuIcon = document.getElementById("close-menu-icon");
  var menuIcon = document.getElementById("list-menu-icon");

  menuIcon.style.display = "none";

  menuList.style.display = "block";

  closeMenuIcon.style.display = "block";

  if (searchIcon) {
    searchIcon.style.display = "none";
  }

  if (searchButton) {
    searchButton.style.display = "none";
  }
}

function toggleCloseMenuList() {
  var menuList = document.getElementById("nav-list");
  var searchIcon = document.getElementById("search-icon");
  var searchButton = document.getElementById("search-button");
  var closeMenuIcon = document.getElementById("close-menu-icon");
  var menuIcon = document.getElementById("list-menu-icon");

  menuIcon.style.display = "block";

  menuList.style.display = "none";

  closeMenuIcon.style.display = "none";

  if (searchIcon) {
    searchIcon.style.display = "block";
  }

  if (searchButton) {
    searchButton.style.display = "block";
  }
}

function listTeams() {
  var arrowDownIcon = document.getElementById("arrow_down_icon");
  var arrowUpIcon = document.getElementById("arrow_up_icon");

  arrowDownIcon.style.display = "none";
  arrowUpIcon.style.display = "block";
}

function unListTeams() {
  var arrowIconDown = document.getElementById("arrow_down_icon");
  var arrowUpIcon = document.getElementById("arrow_up_icon");

  arrowIconDown.style.display = "block";
  arrowUpIcon.style.display = "none";
}

function handleTeamsMenu() {
  var listTeamsMenu = document.querySelector(".drop-menu-child");
  var isListed = listTeamsMenu.style.display === "block";
  if (isListed) {
    unListTeams();
    listTeamsMenu.style.display = "none";
  } else {
    listTeams();
    listTeamsMenu.style.display = "block";
  }
}
