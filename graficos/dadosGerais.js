const url = 'https://raw.githubusercontent.com/Poltket/Api-2024-ket/refs/heads/main/Instrumentos.json'

async function vizualizainfo(){
    const res = await fetch(url)
    const dados = await res.json()

    const Instrumentos = Object.keys(dados)
    const InstrumentoMaisVotado = Instrumentos[0]
    const quantidadeDeVotos = Object.values(dados)[0]

    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')

    paragrafo.innerHTML = `Nessa pesquisa, buscamos encontrar qual instrumento musical favorito pelos brasileiros. O ${CursoMaisVotado} foi o curso mais votado entre todos, com um total de ${quantidadeDeVotos}.`
   
    let caixa
}

vizualizainfo()































