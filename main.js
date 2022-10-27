const form = document.getElementById("form-envio")
const quantidadeVendida = document.getElementById("quantidade-vendida")
const restanteEstoque = document.getElementById("restante-estoque")

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const quantidadeVendida = document.getElementById("#quantidade-vendida")
    const restanteEstoque = document.getElementById("#restante-estoque")
    const mensagemSucesso = `Foi vendida a quantidade de: <b>${quantidadeVendida}</b> e a quantidade restante no estoque é de: <b>${restanteEstoque}</b>`
    const mensagemNegativa = `O formulário não pode ser enviado pois a quantidade restante no estoque é de: <b>${restanteEstoque}</b> sendo inferior a quantidade vendida de: <b>${quantidadeVendida}</b>`
    const msgNegativa = document.querySelector(".nao-enviou")
    const msgPositiva = document.querySelector(".envio-sucedido")

    formEValido = restanteEstoque >= quantidadeVendida
    if (formEValido) {
        document.querySelector(".envio-sucedido").innerHTML = mensagemSucesso
        msgPositiva.style.display = "block"
        msgPositiva.style.display = "none"
    } else {
        document.querySelector(".nao-enviou").innerHTML = mensagemNegativa
        msgNegativa.style.displau = 'block'
        msgPositiva.style.display = "none"
    }
}
)