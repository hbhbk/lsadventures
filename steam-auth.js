// Ootame, kuni kõik HTML elemendid on laaditud
document.addEventListener('DOMContentLoaded', function() {
    // Otsime nupu ja kuulame klikke
    const loginButton = document.getElementById('steam-login-button');
    
    loginButton.addEventListener('click', () => {
      // Suuname kasutaja Steami autentimislehele
      window.location.href = 'https://store.steampowered.com/login/?redir=&redir_ssl=1&snr=1_4_4__global-header';  // See tee peaks viima serveri poole, kus toimub autentimine
    });
  });
  