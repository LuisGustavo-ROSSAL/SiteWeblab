
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('🚧 Página em construção. Em breve, você poderá enviar mensagens por aqui!');
    });
  } else {
    console.error("Formulário não encontrado!");
  }
});
  const btn = document.getElementById('btnToggle');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Muda o ícone do botão conforme o fundo
    if(document.body.classList.contains('dark')) {
      btn.textContent = '🌙';
    } else {
      btn.textContent = '☀️';
    }
  });


  document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnAcessibilidade');
  let fontSize = 16; // Tamanho inicial
  const step = 2;     // Quanto aumenta por clique
  const maxSize = 24; // Limite máximo
  const baseSize = 16;

  btn.addEventListener('click', () => {
    fontSize += step;

    if (fontSize > maxSize) {
      fontSize = baseSize;
    }

    document.body.style.fontSize = fontSize + 'px';
  });
});