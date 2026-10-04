// Menu mobile
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  toggle.setAttribute('aria-expanded', aberto);
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('aberto');
    toggle.setAttribute('aria-expanded', false);
  });
});

// Enquanto a foto não existir, o espaço dela fica reservado
// com o nome do arquivo esperado (ex.: imagens/vestido.jpg).
// Ao colocar a foto com o mesmo nome na pasta, ela aparece sozinha.
document.querySelectorAll('.foto img').forEach(img => {
  const falhou = () => {
    img.parentElement.classList.add('sem-foto');
  };
  img.addEventListener('error', falhou);
  if (img.complete && img.naturalWidth === 0) falhou();
});