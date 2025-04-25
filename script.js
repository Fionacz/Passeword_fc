document.getElementById('length').addEventListener('input', function() {
    const length = this.value;
    document.getElementById('passwordLength').textContent = length;
    this.style.background = `linear-gradient(to right, rgb(56, 174, 60) ${(length - this.min) / (this.max - this.min) * 100}%, #ddd ${(length - this.min) / (this.max - this.min) * 100}%)`;
  });
  

  function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const options = {
      uppercase: document.getElementById('includeUppercase').checked,
      lowercase: document.getElementById('includeLowercase').checked,
      numbers: document.getElementById('includeNumbers').checked,
      symbols: document.getElementById('includeSymbols').checked
    };
  
    if (length < 12 || length > 128) return alert("La longueur doit être comprise entre 12 et 128 caractères.");
  
    const characters = (options.uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
                       (options.lowercase ? "abcdefghijklmnopqrstuvwxyz" : "") +
                       (options.numbers ? "0123456789" : "") +
                       (options.symbols ? "!@#$%^&*()_+-=[]{}|;:,.<>?" : "");
  
    if (!characters) return alert("Veuillez sélectionner au moins un type de caractère.");
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    document.getElementById("passwordDisplay").textContent = password;
  }
  

  function copyToClipboard() {
    const password = document.getElementById('passwordDisplay').textContent;
    if (!password) return alert("Aucun mot de passe à copier !");
  
    navigator.clipboard.writeText(password).then(() => {
      const btn = document.querySelector('.copy-btn');
      btn.textContent = "✅";
      setTimeout(() => btn.textContent = "📋 Copier", 1500);
    }).catch(err => alert("Erreur : " + err));
  }
  
  
  