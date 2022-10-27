const form = document.getElementById("form-envio")
const quantidadeVendida = document.getElementById("quantidade-vendida")
const restanteEstoque = document.getElementById("restante-estoque")

function validaQuantidade(quantidadeVendida) {
    const valorEnviado = quantidadeVendida >  restanteEstoque
    return valorEnviado
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let formEValido = false;

    const quantidadeVendida = document.getElementById("quantidade-vendida")
    const restanteEstoque = document.getElementById("restante-estoque")
    const mensagemSucesso = `Foi vendida a quantidade de: <b>${quantidadeVendida}</b> e o valor restante em estoque é: <b>${restanteEstoque}</b>`

    formEvalido = validaQuantidade(quantidadeVendida)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector(".envio-sucedido")
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        /* quantidadeVendida.style.border = '1px solid red' */
        document.querySelector(".nao-enviou")
    }
}
)