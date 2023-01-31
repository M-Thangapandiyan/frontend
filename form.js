const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const phonenumber = document.getElementById("phonenumber");
const c = document.getElementById("country");
const gender1 = document.getElementById("gender1");
const gender2 = document.getElementById("gender2");
// const gender = document.querySelector('input[name="person"]:checked')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
});

function validateInput() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const contact = phonenumber.value.trim();
    const country = c.value.trim();
    const genders1 = gender1.value.trim();
    const genders2 = gender2.value.trim();
 

    if (emailValue === '') {
        setError(email, 'email is requied');
    } else if (!isValidEmail(emailValue)) {
        setError(email,'enter the valid email');
    }

    else {
        setSuccess(email);
    }

    function isValidEmail(email) {
        const re = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
        return re.test(String(email).toLowerCase());
    }

    if (passwordValue === '') {
        setError(password, 'Password is requied');
    } else if (!isValidPassword(password) && passwordValue.length < 8) {
        setError(password, ' Password must be a minimum of 8 characters including number, Upper, Lower And one special character');
    }
    else {
        setSuccess(password);
    }

    function isValidPassword(password) {
        const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/
        return re.test(password);
    }

    if (password2Value === '') {
        setError(password2, 'Re enter passsword cannot be blank');
    }
    else if (passwordValue !== password2Value) {
        setError(password2, 'Password does not match');
    }
    else {
        setSuccess(password2);
    }
    if (fnameValue === '') {
        setError(fname, 'firstname is requied cannot be blank');
    } else {
        setSuccess(fname);
    }
    if (lnameValue === '') {
        setError(lname, 'lastname is requied cannot be blank');
    } else {
        setSuccess(lname);
    }
    if (contact === '') {
        setError(phonenumber, 'phonenumber is requied cannot be blank');
    } else {
        setSuccess(phonenumber);
    }
 
    if (country === "" || country === "select country") {
        setError(c,'select a country')
    } else {
        setSuccess(c);
    }

    if (!genders1.checked) {
        setError(gender1, 'select a gender');
    } else {
        setSucces(gender1);
    }
 
    if (!genders2.checked) {
        setError(gender2, 'select a gender');
    } else {
        setSucces(gender2);
    }
}  

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

