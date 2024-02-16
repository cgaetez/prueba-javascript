$(document).ready(function(){


function valida(input){
    let numberRegex = /^\d+$/;
        return numberRegex.test(input); 
}
    


    $('#buscar').on('click',function(e){
        e.preventDefault();

        if(valida($('#hero').val())){
            console.log('es número');
            let id = $('#hero').val();
            let url = `https://superheroapi.com/api/122174522798008153/${id}`;
            $.ajax({
                type:"GET",
                url:url,
                dataType:"json",
                success: function(datosApi) {
                    console.log(datosApi);
                    datosApi.forEach(element => {
                    $('#resultado').append(
                        `<p>${element.id}-
                        ${element.name}</p>`);
                    })
                },
                error: function(error) {
                    //si todo sale bien, se agrega la funcionalidad aquí.
                },
            });
        }else{
            console.log('no es número');
        }
        
    });
});


/*Una vez ingresado el número del héroe a buscar y después de realizar un click sobre
el botón de búsqueda, se debe capturar y validar la información para evitar búsquedas
que contengan algún texto diferente a números y mostrar la información
dinámicamente mediante la librería jQuery y CanvasJS con un gráfico de pastel. Para
lograr todo esto se debe*/