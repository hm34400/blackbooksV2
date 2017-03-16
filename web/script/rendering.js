/**
 * rendu des données
 */
var table = null;
function createTableBooks(books){
    table = document.createElement("table");
    $(CONTENT).append(table);
    $(table).append(getHeaderLineForTableBook());
    getContentForTableBook(books);
    $(table).addClass("col-xs-10 col-xs-offsett-1");
}

function getContentForTableBook(books){
    $.each(books,function(){
        $(table).append(getLineForTableBook(this));
    });
}
function getLineForTableBook(book){
//   alert("id: " + book.id + " - titre : " + book.title + " - auteur " + book.author);
    var line = document.createElement("tr");
    var cellId = document.createElement("td");
    var cellTitle = document.createElement("td");
    var cellAuthorName = document.createElement("td");
    //affectation des textes
    $(cellId).text(book.id);
    $(cellTitle).text(book.title);
    $(cellAuthorName).text(book.author);
    //insertion des th dans la ligne
    $(line).append(cellId);
    $(line).append(cellTitle);
    $(line).append(cellAuthorName);
    
    //equivalent à $(line).append(cellId).text(book.id);
    
    return line;
}

function getHeaderLineForTableBook(){
    //creation des balises
    var line = document.createElement("tr");
    var idBook = document.createElement("th");
    var titleBook = document.createElement("th");
    var authorName = document.createElement("th");
    //affectation des textes
    $(idBook).text("id");
    $(titleBook).text("titre");
    $(authorName).text("auteur");
    //insertion des th dans la ligne
    $(line).append(idBook);
    $(line).append(titleBook);
    $(line).append(authorName);
    
    return line;
}