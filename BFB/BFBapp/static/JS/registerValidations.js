export class Validations {
    
    validateEmail(emailInput) {
        if (emailInput.value == '') {
            warningEmailRegister.innerHTML = 'Email is empty'
            emailInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/^[a-z0-9@.]+$/.test(emailInput.value)) {
            warningEmailRegister.innerHTML = 'Email must have lowercase letters and numbers'
            emailInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (emailInput) {
            const domains = ['@gmail.com', '@yahoo.com', '@outlook.com']
            let isValid = false

            domains.forEach(function (domain) {
                if (emailInput.value.endsWith(domain)) {
                    isValid = true
                }
            })

            if (!isValid) {
                warningEmailRegister.innerHTML = 'Email is invalid'
                emailInput.style.borderBottomColor = 'rgb(195, 20, 20)'
                return false
            }
        }
        return true
    } // validate email function

    validateFirstName(firstNameInput) {
        if (firstNameInput.value == '') {
            warningFirstNameRegister.innerHTML = 'First name empty'
            firstNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(firstNameInput.value)) {
            warningFirstNameRegister.innerHTML = 'First name must have only letters'
            firstNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/^[A-Z]/.test(firstNameInput.value)) {
            warningFirstNameRegister.innerHTML = 'First name must start with a capital letter'
            firstNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        }
        return true
    } // validate firstname function

    validateLastName(lastNameInput) {
        if (lastNameInput.value == '') {
            warningLastNameRegister.innerHTML = 'Last name empty'
            lastNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/^([a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(lastNameInput.value)) {
            warningLastNameRegister.innerHTML = 'Last name must have only letters'
            lastNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/^([A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+\s)*[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+$/.test(lastNameInput.value)) {
            warningLastNameRegister.innerHTML = 'Last name must start with a capital letter (each word)'
            lastNameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        }
        return true
    } // validate lastname function & display form's second part

    validateUsername(usernameInput) {
        if (usernameInput.value == '') {
            warningUsernameRegister.innerHTML = 'Username is empty'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (usernameInput.value.length < 10 || usernameInput.value.length > 20) {
            warningUsernameRegister.innerHTML = 'Username must have between 10 to 20 characters'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/^[A-Z]/.test(usernameInput.value)) {
            warningUsernameRegister.innerHTML = 'Username must start with a capital letter'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/^[A-Za-z0-9]*$/.test(usernameInput.value)) {
            warningUsernameRegister.innerHTML = 'Username must not have a special character'
            usernameInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        }
        return true
    } // validate username function

    validatePassword(passwordInput) {
        if (passwordInput.value == '') {
            warningPasswordRegister.innerHTML = 'Password is empty'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (passwordInput.value.length < 6 || passwordInput.value.length > 12) {
            warningPasswordRegister.innerHTML = 'Password must have between 6 to 12 characters'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/[A-Z]/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'Password must have at least one capital letter'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/\d/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'Password must have at least one number'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (!/[^a-zA-Z0-9]/.test(passwordInput.value)) {
            warningPasswordRegister.innerHTML = 'Password must have at least one special character'
            passwordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        }
        return true
    } // validate password function

    validateRepeatPassword(repeatPasswordInput, passwordInput) {
        if (repeatPasswordInput.value == '') {
            warningRepeatPasswordRegister.innerHTML = 'Repeated password is empty'
            repeatPasswordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        } else if (repeatPasswordInput.value != passwordInput.value) {
            warningRepeatPasswordRegister.innerHTML = 'Passwords do not match'
            repeatPasswordInput.style.borderBottomColor = 'rgb(195, 20, 20)'
            return false
        }
        return true
    } // validate repeated password function
}
