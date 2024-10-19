document.getElementById('entrar-btn').addEventListener('click', () => {
    const musica = document.getElementById('musica');
  
    // Intentar reproducir la música
    musica.play().then(() => {
      console.log('Música reproducida correctamente.');
    }).catch(error => {
      console.error('Error al reproducir la música:', error);
      alert('Toca de nuevo si no escuchas la música.');
    });
  
    // Cambiar al contenido principal
    document.querySelector('.welcome').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
  });
  