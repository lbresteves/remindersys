// botao
function criarLembrete() {
  var lembrete = document.getElementById("box").value;
  var data = document.getElementById("boxSelec").value;

  if (lembrete !== "" && data !== "") {
    var quadroBranco = document.getElementById("quadroBranco");

    // Verificar se já existe um grupo para a data atual
    var grupoData = document.querySelector('.grupo-data[data-data="' + data + '"]');
    if (!grupoData) {
      // Se não existir, criar um novo grupo
      grupoData = document.createElement("div");
      grupoData.classList.add("grupo-data");
      grupoData.setAttribute("data-data", data);

      // Criar um elemento de cabeçalho para a data
      var headerData = document.createElement("h3");
      headerData.innerText = data;

      // Adicionar o cabeçalho ao grupo
      grupoData.appendChild(headerData);

      // Adicionar o grupo ao quadro branco
      quadroBranco.appendChild(grupoData);
    }

    // Criar um novo elemento div para o lembrete
    var novoLembrete = document.createElement("div");
    novoLembrete.classList.add("lembrete");

    // Concatenar lembrete e data
    novoLembrete.innerText = lembrete;

    // Criar o botão de fechar
    var botaoFechar = document.createElement("span");
    botaoFechar.classList.add("fechar-lembrete");
    botaoFechar.innerText = "Fechar";

    // Adicionar evento de clique ao botão de fechar
    botaoFechar.addEventListener("click", function() {
      grupoData.removeChild(novoLembrete);
      // Verificar se o grupo não possui mais lembretes
      if (grupoData.childNodes.length === 1) {
        // Se não houver lembretes, remover o grupo do quadro
        quadroBranco.removeChild(grupoData);
      }
    });

    // Adicionar o botão de fechar ao lembrete
    novoLembrete.appendChild(botaoFechar);

    // Adicionar o novo lembrete ao grupo correspondente
    grupoData.appendChild(novoLembrete);

    // Limpar o conteúdo das caixas de texto
    document.getElementById("box").value = "";
    document.getElementById("boxSelec").value = "";
  }
}
