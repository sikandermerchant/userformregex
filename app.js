//Form Blur event listeners - The blur event fires when an element has lost focus. The main difference between this event and focusout is that focusout bubbles while blur does not.
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('postcode').addEventListener('blur', validatePostcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhoneNumber);

function validateName(){
  const name = document.getElementById('name');

  const re = /^[a-zA-Z]{2,10}$/;///Name should be a-z capital or non-caps; and should be between 2-10 characters

  if(!re.test(name.value)){

  name.classList.add('is-invalid');
  }else{
  name.classList.remove('is-invalid');
  }
}

function validatePostcode(){
  const postcode = document.getElementById('postcode');

  const re = /((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})////regex from https://www.regextester.com/97264
  if(!re.test(postcode.value)){

  postcode.classList.add('is-invalid');
  }else{
  postcode.classList.remove('is-invalid');
  }
}

function validateEmail(){
  const email = document.getElementById('email');

  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){

  email.classList.add('is-invalid');
  }else{
  email.classList.remove('is-invalid');
  }
}

function validatePhoneNumber(){
  const phone = document.getElementById('phone');

  const re = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/;///uk phone regex https://www.regextester.com/104299
  
  if(!re.test(phone.value)){
  
  phone.classList.add('is-invalid');
  }else{
  phone.classList.remove('is-invalid');
  }
}