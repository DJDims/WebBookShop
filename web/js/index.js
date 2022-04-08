
const infoElement = document.getElementById("info");

const menuLogin = document.getElementById("menu_login");
menuLogin.addEventListener('click', toggleBtnLogin);
const menuLogout = document.getElementById("menu_logout");
menuLogout.addEventListener('click', toggleBtnLogin);

const menuMain = document.getElementById("book_Shop");
const menuAddBook = document.getElementById("menu_add_book");
const menuAddAuthor = document.getElementById("menu_add_author");
const menuPurchases = document.getElementById("menu_purchases");
const menuProfile = document.getElementById("menu_profile");
const menuAdminPanel = document.getElementById("menu_admin_panel");

menuMain.addEventListener('click', function () {
    addActiveClass(this);
});
menuAddBook.addEventListener('click', function () {
    addActiveClass(this);
});
menuAddAuthor.addEventListener('click', function () {
    addActiveClass(this);
});
menuPurchases.addEventListener('click', function () {
    addActiveClass(this);
});
menuProfile.addEventListener('click', function () {
    addActiveClass(this);
});
menuAdminPanel.addEventListener('click', function () {
    addActiveClass(this);
});

function toggleBtnLogin() {
    if (menuLogin.classList.contains("d-none")) {
        menuLogin.classList.remove("d-none");
        menuLogout.classList.add("d-none");
        infoElement.innerHTML = "Вы вышли";
        hideMenu();
    } else {
        menuLogin.classList.add("d-none");
        menuLogout.classList.remove("d-none");
        infoElement.innerHTML = "Вы вошли";
        showMenu();
    }
}

function showMenu() {
    menuAddBook.classList.remove("d-none");
    menuAddAuthor.classList.remove("d-none");
    menuPurchases.classList.remove("d-none");
    menuProfile.classList.remove("d-none");
    menuAdminPanel.classList.remove("d-none");
}

function hideMenu() {
    menuAddBook.classList.add("d-none");
    menuAddAuthor.classList.add("d-none");
    menuPurchases.classList.add("d-none");
    menuProfile.classList.add("d-none");
    menuAdminPanel.classList.add("d-none");
}

function clearMenuActiveClass() {
    menuMain.classList.remove("active");
    menuAddBook.classList.remove("active");
    menuAddAuthor.classList.remove("active");
    menuPurchases.classList.remove("active");
    menuProfile.classList.remove("active");
    menuAdminPanel.classList.remove("active");
}

function addActiveClass(element) {
    clearMenuActiveClass();
    element.classList.add("active");
    element.preventDefault();
}