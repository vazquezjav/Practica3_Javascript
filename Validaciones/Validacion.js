function validarCamposObligatorios()
{
    var banderaE = validarCorreo()
    if(banderaE == false){
        alert("El correo debe tener mas de 3 caracteres antes del @ y tener el  dominio ups.edu.ec o est.ups.edu.ec")
    }




    var bandera= false;
    for (var i = 0; i < document.forms[0].length; i++)
    {
var elemento = document.forms[0].elements[i];
            if (elemento.value.trim() == '' ) 
             {

                bandera = true;
                if(elemento.id == 'cedula')
                {
                    elemento.style.border = "1px red solid";
                    document.getElementById("mensajeCedula").innerHTML= ("Obligatoria");
                    document.getElementById("mensajenombre").innerHTML= ("Obligatoria");
                    document.getElementById("mensajeapellido").innerHTML= ("Obligatoria");
                    document.getElementById("mensajedireccion").innerHTML= ("Obligatoria");
                    document.getElementById("mensajetelefono").innerHTML= ("Obligatoria");
                    document.getElementById("mensajecorreo").innerHTML= ("Obligatoria");
                    document.getElementById("mensajepassword").innerHTML= ("Obligatoria");

                }
             }
            }
             if (bandera)
             {
            alert('Llenar todos los campos')
            return false
            }
            else
            {
                return true 
            }
}
var aux =0
function validarLetras(elemento)    
{

    if (elemento.value.length > 0)
    
    var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
    console.log(miAscii)
    if ((miAscii >=97 && miAscii <=122) || (miAscii == 32  && aux == 0) )
    {   
            if(miAscii == 32 )
            {
                aux =aux+1;
            }
            return  true
    }
    else
    {
        elemento.value=elemento.value.substring(0,elemento.value.length-1)
        return false
    }
    
}

var aux2 =0
function validarnumeros(elemento)    
{

    if (elemento.value.length > 0)
    
    var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
    console.log(miAscii)
    if ((miAscii >=48 && miAscii <=57) && aux2 <10)
    {   
        
        aux2=aux2+1
        return  true
    }
    else
    {
        elemento.value=elemento.value.substring(0,elemento.value.length-1)
        return false
    }
    
}


var aux3 =0
function validartelefono(elemento)    
{

    if (elemento.value.length > 0)
    
    var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
    console.log(miAscii)
    if ((miAscii >=48 && miAscii <=57) && aux3 <10)
    {   
        
        aux3=aux3+1
        return  true
    }
    else
    {
        elemento.value=elemento.value.substring(0,elemento.value.length-1)
        return false
    }
    
}
       
function validarCorreo(){
    var x = document.getElementById("correo").value
    var correo = x.split("@")
    
    if(x == correo){
    }if((correo[0].length >= 3 ) && (correo[1] == "ups.edu.ec" || correo[1] == "est.ups.edu.ec") )
    {
        alert("Si cumple Correo")
      
    }
    else
    {
        alert("No cumple correo")
    }
    
}

function validarCedula() {
   
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i));
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total) {
          alert("CUmple cedula")
          return true
      }else{
          alert("Nom cumple cedula")
          return false
      }
    }
  }


function CompararFechas()
{
	//Comprobamos que tenga formato correcto
	var Fecha_aux = document.getElementById("fechaNacimiento").value.split("/");
 	var Fecha1 = new Date(parseInt(fecha_aux[2]),parseInt(fecha_aux[1]-1),parseInt(fecha_aux[0]));
 
 	//Comprobamos si existe la fecha
	if (isNaN(Fecha1)){
		alert("Fecha introducida incorrecta")
		return false
	}
	else{
        alert("La fecha que has introducido es "+Fecha1)
        return true
	}
}

