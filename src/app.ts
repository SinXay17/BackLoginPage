
function toggleForm(formType: 'login' | 'register') {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (!loginForm || !registerForm) return;

    if (formType === 'register') {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    } else {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
}


async function handleRegister(event: Event) {
    event.preventDefault();

    const usernameInput = document.getElementById('reg-username') as HTMLInputElement;
    const emailInput = document.getElementById('reg-email') as HTMLInputElement;
    const passwordInput = document.getElementById('reg-password') as HTMLInputElement;

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('ລົງທະບຽນສຳເລັດແລ້ວ! (สมัครสมาชิกสำเร็จ)');
            
            toggleForm('login');
        } else {
            alert('ຂໍ້ຜິດພາດ: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('ບໍ່ສາມາດເຊື່ອມຕໍ່ກັບເຊີເວີໄດ້');
    }
}