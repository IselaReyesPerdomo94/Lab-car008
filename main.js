//Getting buttons that trigger modal boxes

const signInDesk = document.getElementById('signin-desk');
const signIn = document.getElementById('signin');
const closeSignin = document.getElementById('close-signin');

//functions for showing or hidding modal boxes
const showModal = id => document.getElementById(id).classList.remove('hide');
const hideModal = id => document.getElementById(id).classList.add('hide');

//show sign in modal
const openSignInModal = () => showModal('signin-modal');

const closeSignInModal = () => hideModal('signin-modal');

signIn.addEventListener('click', openSignInModal);
signInDesk.addEventListener('click', openSignInModal);
closeSignin.addEventListener('click', closeSignInModal);