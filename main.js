const form = document.getElementById("form-envio")
const quantidadeVendida = document.getElementById("quantidade-vendida")
const restanteEstoque = document.getElementById("restante-estoque")


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const quantidadeVendida = document.getElementById("quantidade-vendida")
    const restanteEstoque = document.getElementById("restante-estoque")
    const mensagemSucesso = `Foi vendida a quantidade de: <b>${quantidadeVendida.value}</b> e a quantidade restante no estoque é de: <b>${restanteEstoque.value}</b>`
    const mensagemNegativa = `O formulário não pode ser enviado pois a quantidade restante no estoque é de: <b>${restanteEstoque.value}</b> sendo inferior a quantidade vendida de: <b>${quantidadeVendida.value}</b>`
    const msgNegativa = document.querySelector(".nao-enviou")
    const msgPositiva = document.querySelector(".envio-sucedido")

    formEValido = restanteEstoque.value >= quantidadeVendida.value
    if (formEValido) {
        document.querySelector(".envio-sucedido").innerHTML = mensagemSucesso
        msgPositiva.style.display = "block"
        msgNegativa.style.display = "none"

        quantidadeVendida.value = ''
        restanteEstoque.value = ''
    } else {
        document.querySelector(".nao-enviou").innerHTML = mensagemNegativa
        msgNegativa.style.display = 'block'
        msgPositiva.style.display = "none"
    } 
}
)