// Define o fundo vermelho enquanto a página carrega
document.body.style.cssText = `
    background-color: #22398f;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

// Remove o fundo vermelho após o carregamento completo
function removeRedBackground() {
    document.body.style.backgroundColor = '';
    document.body.style.overflow = ''; // Restaura o overflow, caso tenha sido ajustado.
}

// Quando a página estiver completamente carregada, remove o fundo vermelho
window.addEventListener('load', removeRedBackground);
