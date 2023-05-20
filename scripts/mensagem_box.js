function verificarMensagem() {
    var mensagemLabelType = document.getElementById("mensagemLabelType");
    var mensagemLabelSelec = document.getElementById("mensagemLabelSelec");
  
    if (box.value !== "") {
        mensagemLabelType.style.display = "none";
        mensagemLabelSelec.style.display = "none";
    } else {
        mensagemLabelType.style.display = "block";
        mensagemLabelSelec.style.display = "block";
    }
  }
  
  
  function formatarData(input) {
    var input = event.target;
    var tecla = event.key;
  
    // Verificar se a tecla pressionada é um número (0-9) ou uma barra (/)
    var teclaPermitida = (tecla >= "0" && tecla <= "9") || tecla === "/";
  
    // Permitir a entrada da tecla permitida
    if (!teclaPermitida) {
      event.preventDefault();
    }
  
    // Obter o valor atual do input
    var valorInput = input.value;
  
    // Remover todos os caracteres não numéricos, exceto a barra (/)
    var valorNumerico = valorInput.replace(/[^\d/]/g, "");
  
    // Adicionar as barras com base no comprimento do valor numérico
    if (valorNumerico.length >= 3 && valorNumerico.charAt(2) !== "/") {
      valorNumerico = valorNumerico.slice(0, 2) + "/" + valorNumerico.slice(2);
    }
    if (valorNumerico.length >= 6 && valorNumerico.charAt(5) !== "/") {
      valorNumerico = valorNumerico.slice(0, 5) + "/" + valorNumerico.slice(5);
    }
  
    // Limitar o valor numérico a 8 caracteres
    valorNumerico = valorNumerico.slice(0, 10);
  
    // Atualizar o valor do input com o valor numérico formatado
    input.value = valorNumerico;;
  }