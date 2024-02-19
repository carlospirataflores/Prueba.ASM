function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'Blastoise' && password === 'Blastoise123') {
      window.location.href = 'modulo2.html';
    } else if (username === 'Charizard' && password === 'Charizard123') {
      window.location.href = 'modulo3.html';
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }
  