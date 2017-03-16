/**
 * 
 * Requetes ajax de type GET
 */

function getBooks(){
    $.ajax({
        url : URL + "consulting/books",
        async : true,
        type : "GET",
        datatype : "json",
        success : function(datas){
            createTableBooks(datas);
        },
        error : function(){
            alert("marche pas");
        }
    });
}