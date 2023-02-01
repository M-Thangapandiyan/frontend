const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const phonenumber = document.getElementById("phonenumber");
const country = document.getElementById("country");


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
    const countries = country.value.trim();
    const gender = document.querySelectorAll('input[name="person"]:checked');

    if (emailValue === '') {
        setError(email, 'email is requied');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'enter the valid email');
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
        setError(password, 'Password must be a minimum of 8 characters including number, Upper, Lower And one special character');
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
    } else if(!isValidName(fname)){
        setError(fname, 'only letters');
    }else {
        setSuccess(fname);
    }

    if (lnameValue === '') {
        setError(lname, 'lastname is requied cannot be blank');
    } else if (!isValidlName(lname)) {
        setError(lname, 'only letters');
    } else {
        setSuccess(lname);
    }


    function isValidName(fname) {
        const letters = /^[A-Za-z]+[ A-Za-z]{1,20}$/;
        return re.test(fname);
    }
    function isValidlName(lname) {
        const letters = /^[A-Za-z]+[ A-Za-z]{1,20}$/;
        return re.test(lname);
    }
    if (contact === '') {
        setError(phonenumber, 'phonenumber is requied cannot be blank');
    } else {
        setSuccess(phonenumber);
    }
function c() {
    const letters = /^[A-Za-z]+[ A-Za-z]{1,20}$/;
}


   

    if (countries === "" || countries === "select country") {
        setError(country, 'select a country')
    } else {
        setSuccess(country);
    }

    if (document.getElementById("agree").checked) {
        document.getElementById("agreement").innerHTML = '';

    } else {
        document.getElementById("agreement").innerHTML = "select terms and condition";
    }

    if (!gender.length) {
         document.getElementById("disp").innerHTML = "select a gender";
    }
    else {
        document.getElementById("disp").innerHTML = '';
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

