function UI() {

}
UI.prototype.addFilmToUI = function(newFilm) {


    const filmList = document.getElementById("films");
    let html = '<tr>\
    <td><img src="' + newFilm.url + '" class="img-fluid img-thumbnail"></td>\
    <td>"' + newFilm.title + '"</td>\
    <td>"' + newFilm.director + '"</td>\
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>\
       </tr> '
    filmList.innerHTML += '<tr>\
    <td><img src="' + newFilm.url + '" class="img-fluid img-thumbnail"></td>\
    <td>"' + newFilm.title + '"</td>\
    <td>"' + newFilm.director + '"</td>\
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>\
       </tr> ';

}
UI.prototype.clearInputs = function(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}