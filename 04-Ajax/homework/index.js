var URL = "http://localhost:5000/amigos";

let mostrarAmigos = function(){
    $ (`#lista`).empty();
    $.get (`${URL}`, function (amigos){
        amigos.forEach(e => {
            $(`#lista`).append(`<li id="${e.id}">${e.name} X</li>`)   //introducir un elemento html dentro de otro 
        });
    })
}
$("#boton").click(mostrarAmigos)


$ ("#search").click (function() {
    let input = $("#input").val()

    $.get (`${URL}/${input}`, function (amigo) {
        $(`#amigo`).text(amigo.name)   
    })
})

$ ("#delete").click (function (){
    let input = $ ("#inputDelete").val()
    let amigoBorrado; 
    $.get (`${URL}/${input}`, function (amigo) {
            amigoBorrado = amigo.name
    })
    $.ajax ({
        url:`${URL}/${input}`,
        type: "DELETE",
        success:function () {
            $(`#sucess`).text(`${amigoBorrado} ha sido eliminado`);
            mostrarAmigos ();
        }
    })
})