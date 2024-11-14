const url = 'https://raw.githubusercontent.com/Poltket/Api-2024-ket/refs/heads/main/Instrumentos.json'

async function vizualizainfo() {
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados.instrumentos)
    const Instrumentos = Object.keys(dados.instrumentos)
    const votos = Object.values(dados.instrumentos)
    const InstrumentoMaisVotado = Instrumentos[0]
    const quantidadeDeVotos = Object.values(dados)[0]

    const data = [
        {
            x:Instrumentos,
            y:votos,
            type: 'bar'
        }
    ]

    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')

    paragrafo.innerHTML = ` Nessa pesquisa, buscamos encontrar qual instrumento musical favorito pelos brasileiros. O ${InstrumentoMaisVotado} foi o curso mais votado entre todos, com um total de ${quantidadeDeVotos}.`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

vizualizainfo()































