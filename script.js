init()
function init(){
  var inName = document.getElementById("nome")
  var inText = document.getElementById("texto")
  
  inName.onkeyup = salvar
  inText.onkeyup = salvar
}

function salvar(){
  var nome = document.getElementById("nome").value
  var texto = document.getElementById("texto").value
  
  localStorage.setItem("name", nome)
  localStorage.setItem("content", texto)
}
function carregar(){
  if("name" in localStorage){
    var nome = localStorage.getItem("name")
    document.getElementById("nome").value = nome
  }
  if("content" in localStorage){
    var texto = localStorage.getItem("content")
    document.getElementById("texto").value = texto
  }
}
function limpar(){
  localStorage.clear()
  document.getElementById("nome").value = ""
  document.getElementById("texto").value= ""
}