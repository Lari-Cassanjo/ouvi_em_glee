async function buscar_musica() {
    // Faz uma requisição para o arquivo JSON e armazena os dados
    const response = await fetch("banco_de_musicas.json");
    const dados = await response.json();

    // Obtém o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("cards");

    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document
        .getElementById("campo-pesquisa")
        .value.toLowerCase();

    // Inicializa a string que armazenará os resultados
    let resultados = "";

    // Verifica se o campo de pesquisa não está vazio
    if (campoPesquisa) {
        // Itera sobre cada música nos dados
        dados.forEach((musica) => {
            // Converte o título e o episódio para minúsculas para facilitar a comparação
            let titulo = musica.Titulo.toLowerCase();
            let episodio = musica.Episodio.toLowerCase();

            // Verifica se o título ou o episódio contém o termo de pesquisa
            if (
                titulo.includes(campoPesquisa) ||
                episodio.includes(campoPesquisa)
            ) {
                // Cria um novo elemento div para cada resultado e adiciona os detalhes da música
                resultados += `
                    <div class="resultados">
                        <h2>${musica.Titulo}</h2>
                        <p class="membros">${musica.Membros}</p>
                        <p class="episodio">${musica.Episodio}</p>
                    </div>
                `;
            }
        });
    } else {
        // Se o campo de pesquisa estiver vazio, exibe uma mensagem
        resultados =
            "<p>Busca vazia! Digite o título de uma música ou de um episódio.</p>";
    }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}
