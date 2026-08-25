const botoes = document.querySelectorAll(".botoes button");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const numeroSpan = botao.querySelector("span");

        const quantidadeAtual = Number(numeroSpan.textContent);

        if (curtiu === false) {

            numeroSpan.textContent = quantidadeAtual + 1;

            curtiu = true;

            botao.classList.add("curtido");

        } else {

            numeroSpan.textContent = quantidadeAtual - 1;

            curtiu = false;

            botao.classList.remove("curtido");

        }

    });

});


const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {

        btnTema.textContent = "☀️ Modo claro";

    } else {

        btnTema.textContent = "🌙 Modo escuro";

    }

});
