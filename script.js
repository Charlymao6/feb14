function openCard() {
    // Ocultar la primera interfaz (ícono de la carta)
    document.getElementById('initialScreen').classList.add('hidden');
  
    // Mostrar la segunda interfaz (carta)
    document.getElementById('cardScreen').classList.remove('hidden');
  }
  
  document.getElementById('finishBtn').addEventListener('click', function () {
    // Ocultar la carta
    document.getElementById('cardScreen').classList.add('hidden');
  
    // Mostrar el efecto de besos y abrazos
    const effect = document.getElementById('effect');
    effect.classList.remove('hidden');
    effect.innerHTML = '💋🤗💖'; // Emojis de besos y abrazos
  
    // Animación adicional
    setInterval(() => {
      effect.innerHTML += '💋🤗'; // Añadir más emojis
    }, 1000);
  });