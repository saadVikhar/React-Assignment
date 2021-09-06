export default function validateInfo(values) {
    let errors = {};

    if(!values.firstname.trim()) {
        errors.firstname = "firstname required";
    }

    if(!values.lastname.trim()) {
        errors.lastname = "lastname required";
    } 

    if(!values.profiles.trim()) {
        errors.profiles = "profiles required";
    } 

    if(!values.username.trim()) {
        errors.username = "username required";
    } 

    if(!values.email) {
        errors.email = "Email required";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }
    if(!values.password) {
        errors.password = "password is required" 
    }    else if (values.password.length < 6) {
        errors.password = "password needs to be 6 characters or more"
    }
return errors;
}