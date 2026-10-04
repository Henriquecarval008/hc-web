// ==============================
// CONFIGURAÃ‡ÃƒO RÃPIDA DO SITE
// Troque somente os valores abaixo.
// ==============================
const WHATSAPP_NUMBER = '5591980747388'; // Ex.: 5591987654321
const WHATSAPP_MESSAGE = 'Olá! Vi o portfólio da HC Web e gostaria de solicitar um orçamento para criar um site para minha empresa.';

const whatsappLink = document.getElementById('whatsappLink');
const phoneText = document.getElementById('phoneText');

if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
}
