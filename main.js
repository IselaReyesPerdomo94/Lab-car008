//Getting buttons that trigger modal boxes

const signInDesk = document.getElementById('signin-desk');
const signIn = document.getElementById('signin');
const closeSignin = document.getElementById('close-signin');
const registerButton = document.getElementById('register');
const closeRegister = document.getElementById('close-register');
const linkNewAccount = document.getElementById('new-account-a');
const driverButton = document.getElementById('driver-button');
const driverButton2 = document.getElementById('driver-button-2');
const closeDriverButton = document.getElementById('close-driver');

//functions for showing or hidding modal boxes
const showModal = id => document.getElementById(id).classList.remove('hide');
const hideModal = id => document.getElementById(id).classList.add('hide');

//show sign in modal
const openSignInModal = () => showModal('signin-modal');
//closing sign in modal 
const closeSignInModal = () => hideModal('signin-modal');

//functions to open or close modals
const openRegister = () => showModal('registration');
const closeRegisterModal = () => hideModal('registration');
const openDriverModal = () => showModal('driver-register');
const closeDriverModal = () => hideModal('driver-register');

//events
signIn.addEventListener('click', openSignInModal);
signInDesk.addEventListener('click', openSignInModal);
closeSignin.addEventListener('click', closeSignInModal);
registerButton.addEventListener('click', openRegister);
closeRegister.addEventListener('click', closeRegisterModal);
linkNewAccount.addEventListener('click', () => {
    closeSignInModal();
    openRegister();
})
driverButton.addEventListener('click', openDriverModal);
driverButton2.addEventListener('click', openDriverModal);
closeDriverButton.addEventListener('click', closeDriverModal);

//displaying map with api geo location
var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}