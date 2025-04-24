document.getElementById('length').addEventListener('input', function() {
    const length = this.value;
    document.getElementById('passwordLength').textContent = length;
  
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, rgb(56, 174, 60) ${value}%, #ddd ${value}%)`;
  });
  
  function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
  
    if (length < 12 || length > 128) {
      alert("La longueur doit être comprise entre 12 et 128 caractères.");
      return;
    }
  
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    let characters = "";
    if (includeUppercase) characters += upper;
    if (includeLowercase) characters += lower;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
  
    if (!characters) {
        alert("Veuillez sélectionner au moins un type de caractère.");
        return;
      }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    document.getElementById("passwordDisplay").textContent = password;
  }
  
  
  

  