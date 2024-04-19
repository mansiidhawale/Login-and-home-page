document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    
    const hardcodedUsername = 'mansiidhawale';
    const hardcodedPassword = '123456789';
  
    if (username === hardcodedUsername && password === hardcodedPassword) {
     
      window.location.href = 'home.html';
    } else {
      alert('Invalid username or password');
    }
  });
  