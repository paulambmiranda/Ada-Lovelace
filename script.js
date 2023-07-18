document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value!= ""){
  alert("Pronto! Você receberá as novidades por email.")
  }else{
  alert("Por favor, preencha os campos nomes e email!")
  }
}
