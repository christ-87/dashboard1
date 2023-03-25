// ======= Login starts===========
const wrapperLogin = document.querySelector('.wrapper_login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink?.addEventListener('click', () => {
    wrapperLogin?.classList.add('active');
})

loginLink?.addEventListener('click', () => {
	wrapperLogin?.classList.remove('active');
})
btnPopup?.addEventListener('click', () => {
	wrapperLogin?.classList.add('active-popup');
})
iconClose?.addEventListener('click', () => {
	wrapperLogin?.classList.remove('active-popup');
})
