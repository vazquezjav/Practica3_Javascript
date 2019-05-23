var imagenes = ['Images/1.jpg', 'Images/2.jpg', 'Images/3.jpg', 'Images/4.jpg', 'Images/5.jpg','Images/6.jpg','Images/7.jpg','Images/8.jpg','Images/9.jpg', 'Images/10.jpg'],

cont = 0;

var nuevo=0 ;
function cambio(contenedor) 
{
    var m = imagenes.length;

    for (var i =0;i<5;i++) 
    {
       
      aleatorio = Math.floor(Math.random() * m--);

      nuevo=nuevo+","+aleatorio;
     
    }
    alert (nuevo)
    alert(imagenes[nuevo[0] ])
    alert(imagenes[nuevo[2] ])
    alert(imagenes[nuevo[4] ])
    alert(imagenes[nuevo[6] ])
    alert(imagenes[nuevo[8] ])


  }
  document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor);
})

contmax=0;
contmin=0;
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
function siguiente () 
    { 
        
        if(contmax<10)
        {
            boton1.disabled=false;
            boton2.disabled=false;
            contmax=contmax+2;
            document.getElementById('imagen').src =imagenes[nuevo[contmax]] ;
        }
        else{
            alert("Ultima Imagen")
            boton1.disabled = true;
        }

    }

function anterior () 
    {
        
        if(contmax >0)
        {
            boton2.disabled = false;
            boton1.disabled=false;
            contmax=contmax-2;
            document.getElementById('imagen').src = imagenes[nuevo[contmax]];
        }
        else{
            alert("Ultima Imagen")
            boton2.disabled = true;
        }
        
 

    }
    



