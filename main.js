const form = document .getElementById('analise-emprestimo');

function validarEmprestimo(valorDivida, valorEmprestimo){
    return valorEmprestimo >= valorDivida
}

form.addEventListener('submit', function(e) {  
    let formValido = false;
    e.preventDefault();

    const valorDivida = document.getElementById('valor-divida');
    const valorEmprestimo = document.getElementById('valor-emprestimo');
    const mensagemSucesso = `O valor do empréstimo de: <b>${valorEmprestimo.value}</b> quita o total de sua dívida: <b>${valorDivida.value}</b>`;

    formValido = validarEmprestimo(valorDivida.value, valorEmprestimo.value)
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-mensage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    
        valorDivida.value = ' ';
        valorEmprestimo.value = ' ';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        
        valorDivida.value = ' ';
        valorEmprestimo.value = ' ';
    }
    
})
