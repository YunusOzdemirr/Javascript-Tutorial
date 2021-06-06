const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms)
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        //Hata
        UI.displayMessages("Tüm alanları doldurunuz.", "danger")
    } else {
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film başarıyla eklendi...", "success");
    }
    ui.clearInputs(titleElement, urlElement, directorElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessages("Silme işlemi başarılı...", "success");
    }
}

function clearAllFilms() {
    if (confirm("Silmek istediğinize emin misiniz")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }

}