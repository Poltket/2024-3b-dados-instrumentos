const url = 'https://raw.githubusercontent.com/Poltket/Api-2024-ket/refs/heads/main/Instrumentos.json'

async function vizualizainfo(){
    const res = await fetch(url)
    const dados = await res.json()

    const Instrumentos = Object.keys(dados)
    const InstrumentoMaisVotado = Instrumentos[0]
    const quantidadeDeVotos = Object.values(dados)[0]

    console.log(InstrumentoMaisVotado)
    console.log(quantidadeDeVotos)
}

vizualizainfo()































