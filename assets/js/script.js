$(document).ready(function(){


function valida(input){
    let numberRegex = /^\d+$/;
        return numberRegex.test(input); 
}
    
function reset(){
    $('#error').addClass('d-none');
    $('#resultado').addClass('d-none');
    $('#resultado  .connections').html("");
}

    $('#buscar').on('click',function(e){
        e.preventDefault();
        reset();

        if(valida($('#hero').val())){
            console.log('es número');
            let id = $('#hero').val();
            let url = `https://superheroapi.com/api.php/122174522798008153/${id}`;
            $.ajax({
                type:"GET",
                url:url,
                dataType:"json",
                success: 
                function(datosApi) {
                    if(datosApi.response != 'error'){
                        console.log(datosApi);
                        $('#resultado  img').attr("src",`${datosApi.image['url']}`);
                        $('#resultado  .name').html(`Nombre: ${datosApi.name}`);
                        /*
                        datosApi.connections.forEach(element => {
                        //$('#resultado  .connections').append(`${element}`);
                        })*/
  
                        Object.entries(datosApi.connections).forEach(([key, value]) => {
                          $('#resultado  .connections').append(`<p class="my-0">${key}: ${value}</p>`);
                           
                        });
                        
                        $('#resultado').removeClass('d-none');
                    }else{
                        console.log('no existe id');
                        $('#error').removeClass('d-none');
                    }                   
                },
                error: function(error) {
                    //si todo sale bien, se agrega la funcionalidad aquí.
                    console.log('error acá');
                    console.log(error);
                    $('#error').removeClass('d-none');
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