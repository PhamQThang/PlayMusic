document.getElementById('switch-to-register').addEventListener('click',
 function(event) {
    event.preventDefault();
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('register-container').classList.remove('hidden');
  });
  
  document.getElementById('switch-to-login').addEventListener('click',
   function(event) {
    event.preventDefault();
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('register-container').classList.add('hidden');
  });
  
  // Ẩn form đăng ký khi trang được tải lần đầu
  document.getElementById('register-container').classList.add('hidden');
