const botoes = document.querySelectorAll(".botoes button");

const botaoTema = document.querySelector(".btn-tema");


/* CURTIDAS */

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


/* MODO ESCURO */

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");


    if (document.body.classList.contains("tema-escuro")) {

        botaoTema.textContent = "☀️ Modo claro";

    } else {

        botaoTema.textContent = "🌙 Modo escuro";

    }

});