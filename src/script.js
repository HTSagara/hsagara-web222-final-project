/* Show Menu and Hidden */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Takes to the section
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // close menu every time I click on a i con
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Open skills
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    var itemClass = this.parentNode.className;
    for(var i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// Show options on Radio Buttons Selection
let hiringRadioButton = document.getElementById('hiring');
let questionRadioButton = document.getElementById('question');
let commentRadioButton = document.getElementById('comment');

// Variable to make sure that the form is only printed once no matter how many times the hiring button is clicked
var clicked = 0;

// Adding event listeners
hiringRadioButton.addEventListener('click', function() {
    if (clicked == 0) {
        generatePayRateInput();
        clicked++;
    }
});

questionRadioButton.addEventListener('click', function() {
    if (clicked > 0) {
        deletePayRateInput();
        clicked = 0;
    }
});

commentRadioButton.addEventListener('click', function() {
    if (clicked > 0) {
        deletePayRateInput();
        clicked = 0;
    }
});

// Function to generate the pay rate input field
function generatePayRateInput() {
    let break1 = document.createElement('br');
    break1.id = 'b1';
    let break2 = document.createElement('br');
    break2.id = 'b2';
    let break3 = document.createElement('br');
    break3.id = 'b3';

    // Creating a label
    const node1 = document.createElement("label");
    const textNode = document.createTextNode("Expected Hourly Rate: ");
    node1.appendChild(textNode);
    node1.id = 'hiring-rate-label';

    // Creating the input Field
    const node2 = document.createElement("input");
    node2.id = 'hiring-rate-input';
    node2.type = 'number';
    node2.step = '0.1';
    node2.placeholder = 'Hourly Pay';
    node2.classList.add('format')

    document.querySelector(".radio-btns").appendChild(break1);
    document.querySelector(".radio-btns").appendChild(break2);
    document.querySelector(".radio-btns").appendChild(node1);
    document.querySelector(".radio-btns").appendChild(break3);
    document.querySelector(".radio-btns").appendChild(node2);
}

// Function to delete the pay rate input field
function deletePayRateInput() {
    let label = document.getElementById('hiring-rate-label');
    let input = document.getElementById('hiring-rate-input');
    let div = document.querySelector(".radio-btns");
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');

    div.removeChild(b1);
    div.removeChild(b2);
    div.removeChild(b3);
    div.removeChild(input);
    div.removeChild(label);
}

// Form Validation
const form = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const email = document.getElementById('contact-email');
const address = document.getElementById('contact-address');
const city = document.getElementById('contact-city');
const postalCode = document.getElementById('contact-postalcode');
const message = document.getElementById('contact-message');


      form.addEventListener('submit', e => {
        e.preventDefault();

        validateInputs();
      })

      const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
      }
      const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
      }
      const isValidPostalCode = postalCode => {
        const regex = /^[^DFIOQWUZ][0-9][^DFIOQU][ ]?[0-9][^DFIOQU][0-9]$/;
        return regex.test(String(postalCode).toLowerCase());
      }

      var validateInputs = () =>{
        const nameValue = contactName.value.trim();
        const emailValue = email.value.trim();
        const addressValue = address.value.trim();
        const cityValue = city.value.trim();
        const postalCodeValue = postalCode.value.trim();
        const messageValue = message.value.trim();

        if(nameValue === ''){
            setError(contactName, 'Name is required');
        }
        else{
            setSuccess(contactName);
        }
        if(emailValue === ''){
            setError(email, 'Email is required');
        }
        else{
            setSuccess(email);
        }
        if(addressValue === ''){
            setError(address, 'Address is required');
        }
        else{
            setSuccess(address);
        }
        if(cityValue === ''){
            setError(city, 'City is required');
        }
        else{
            setSuccess(city);
        }
        if(postalCodeValue === ''){
            setError(postalCode, 'Postal code is required');
        }
        else if(!isValidPostalCode(postalCodeValue)){
            setError(postalCode, 'Postal code is not valid');
        }
        else{
            setSuccess(postalCode);
        }
        if(messageValue === ''){
            setError(message, 'Message is required');
        }
        else{
            setSuccess(message);
        }
      }