// variaveis?
// Dados de entrada?
// Dados de saida?

const perguntaElement = document.querySelector("#resposta")
const inputpergunta = document.querySelector("#inputPergunta")
const respostas = [
    "Sim",
    "Não",
    "Talvez",
    "Melhor não fazer tantos planos hein!","Você é muito esperto(a)",
    "continue assim ","Tente mais vezes "

]

// Clicar em fazer pergunta

function fazerPergunta() {  
    if(inputpergunta.value == ""){
        alert("Digite uma pergunta")
        return 
        // Toda funsão que encontra um return, ele para a execução.
    }

    const pergunta = "<div>"+ inputpergunta.value +"</div>"
    
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    // console.log(respostas[numeroAleatorio])

    perguntaElement.innerHTML =pergunta + respostas[numeroAleatorio]

    // Fazer sumir a resposta, depois de 3 segundos.

    setTimeout(function() {
        perguntaElement.style.opacity = 0
        
    },3000)
  
}