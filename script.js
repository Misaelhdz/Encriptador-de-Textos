
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
    
//variables
var TextoEncrypt = document.querySelector(".text-input");
var ButtonEncrypt = document.querySelector("#btn-encriptar");
var MsgEncrypt = document.querySelector("#msg");
var ButtonDecrypt = document.querySelector("#btn-desencriptar"); 



     //boton y funcion de encriptar
    ButtonEncrypt.addEventListener("click", function encriptar(event){
      event.preventDefault();

    TextoEncrypt.value = TextoEncrypt.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    MsgEncrypt.value = TextoEncrypt.value;
    TextoEncrypt.value = "";  
    });

    //boton y funcion de desencriptar
    ButtonDecrypt.addEventListener("click", function desencriptar(event){
        event.preventDefault();
  
    TextoEncrypt.value = TextoEncrypt.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");      
    MsgEncrypt.value = TextoEncrypt.value;
    TextoEncrypt.value = "";
    
    });
        
    //boton de copiar
    function CopiarAlPortapapeles() {

        var texto = document.getElementById("msg");
        texto.select();
        document.execCommand("copy");
    
        //alert("Copiado!");
        MsgEncrypt.value="";
    }

    //boton de pegar
    const botonPegar = document.querySelector("#btn-paste");
    botonPegar.addEventListener("click", (event) => {
    event.preventDefault()
      navigator.clipboard.readText().then((copiedText) => {
        
      TextoEncrypt.value = copiedText;
        //console.log(copiedText);
      });
    });
    
    //Validación de Mayusculas y tildes
    function validar() {
        const input = document.getElementById("input-texto");
        if(!input.checkValidity()) {
          alert("No se admiten letras mayusculas , ni tildes.");
          if(!input.checkValidity()){
            location.reload();
          }
        } 
      }

      //ricrhdz =^-^=!

    

      
      

    
    

 
