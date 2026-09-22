/* =========================
   CIRCUNFERÊNCIA
========================= */

function calcularCircunferencia() {

    const raio = Number(
        document.getElementById("raio").value
    );

    const resultado =
        document.getElementById(
            "resultadoCircunferencia"
        );

    if (raio <= 0 || isNaN(raio)) {

        resultado.textContent =
            "Digite um raio válido.";

        return;
    }

    const comprimento = 2 * Math.PI * raio;

    resultado.textContent =
        `O comprimento da circunferência é aproximadamente ${comprimento.toFixed(2)}.`;
}


/* =========================
   DISTÂNCIA ENTRE DOIS PONTOS
========================= */

function calcularDistancia() {

    const x1 = Number(
        document.getElementById("x1").value
    );

    const y1 = Number(
        document.getElementById("y1").value
    );

    const x2 = Number(
        document.getElementById("x2").value
    );

    const y2 = Number(
        document.getElementById("y2").value
    );

    const resultado =
        document.getElementById(
            "resultadoDistancia"
        );

    if (
        isNaN(x1) ||
        isNaN(y1) ||
        isNaN(x2) ||
        isNaN(y2)
    ) {

        resultado.textContent =
            "Preencha todas as coordenadas.";

        return;
    }

    const distancia = Math.sqrt(
        Math.pow(x2 - x1, 2) +
        Math.pow(y2 - y1, 2)
    );

    resultado.textContent =
        `A distância entre os pontos é ${distancia.toFixed(2)} unidades.`;
}


/* =========================
   BARICENTRO
========================= */

function calcularBaricentro() {

    const ax = Number(
        document.getElementById("ax").value
    );

    const ay = Number(
        document.getElementById("ay").value
    );

    const bx = Number(
        document.getElementById("bx").value
    );

    const by = Number(
        document.getElementById("by").value
    );

    const cx = Number(
        document.getElementById("cx").value
    );

    const cy = Number(
        document.getElementById("cy").value
    );

    const resultado =
        document.getElementById(
            "resultadoBaricentro"
        );

    if (
        isNaN(ax) ||
        isNaN(ay) ||
        isNaN(bx) ||
        isNaN(by) ||
        isNaN(cx) ||
        isNaN(cy)
    ) {

        resultado.textContent =
            "Preencha todas as coordenadas dos três pontos.";

        return;
    }

    const gx = (ax + bx + cx) / 3;

    const gy = (ay + by + cy) / 3;

    resultado.textContent =
        `O baricentro é G(${gx.toFixed(2)}, ${gy.toFixed(2)}).`;
}


/* =========================
   RESPOSTAS DOS EXERCÍCIOS
========================= */

function mostrarResposta(numero) {

    const resposta =
        document.getElementById(
            `resposta${numero}`
        );

    if (resposta.style.display === "block") {

        resposta.style.display = "none";

    } else {

        resposta.style.display = "block";
    }
}faca
