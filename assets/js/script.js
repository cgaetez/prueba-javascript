$(document).ready(function(){


function valida(input){
    let numberRegex = /^\d+$/;
        return numberRegex.test(input); 
}
  
function chartCall(SuperData){
    let dataIn = new Object();
    let all = []
    Object.entries(SuperData).forEach(([key, value]) => {
        dataIn.y= parseInt(value);
        dataIn.label= key;
        all.push(dataIn);
    })
    console.log(dataIn);
    console.log(all);

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Estadísticas de poder"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: 
                all
            
        }]
    });
    chart.render();
    }


function reset(){
    $('#error').addClass('d-none');
    $('#resultado').addClass('d-none');
    $('#resultado  .connections').html("");
    $('#resultado  .published').html("");
    $('#resultado  .occupation').html("");
    $('#resultado  .first-appearance').html("");
    $('#resultado  .height').html("");
    $('#resultado  .weight').html("");
    $('#resultado  .aliases').html("");
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
                        Object.entries(datosApi.connections).forEach(([key, value]) => {
                          $('#resultado  .connections').append(`<p class="my-0">${key}: ${value}</p>`);
                        });
                        $('#resultado .published').append(`<p class="my-0 fst-italic">Publicado por: ${datosApi.biography.publisher}</p>`);
                        $('#resultado .occupation').append(`<p class="my-0 fst-italic">Ocupación: ${datosApi.work.occupation}</p>`);
                        $('#resultado .first-appearance').append(`<p class="my-0 fst-italic">Primera aparición: ${datosApi.biography["first-appearance"]}</p>`);
                        $('#resultado .height').append(`<p class="my-0 fst-italic">Altura: ${datosApi.appearance.height}</p>`);
                        $('#resultado .weight').append(`<p class="my-0 fst-italic">Peso: ${datosApi.appearance.weight}</p>`);
                        $('#resultado .aliases').append(`<p class="my-0 fst-italic">Alias: ${datosApi.biography.aliases}</p>`);

                        chartCall(datosApi.powerstats);
                        
                        
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