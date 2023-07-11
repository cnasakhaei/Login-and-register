export const validate = (data, type) => {
    const errors = {};



    if (!data.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is invaild"
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password is required"
    } else if (data.password.length  < 6) {
        errors.password = "Password need to be 6 charecter or more"
    } else {
        delete errors.password
    }

    

    if (type === "singup") {

        if (!data.name.trim()) {
            errors.name = "Username required"
        } else {
            delete errors.name
        }
        if (!data.confirmPassword) {
            errors.confirmPassword ="Confirm the password"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password don't match"
        } else {
            delete errors.confirmPassword
        }
        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "Accept our regulation"
        }
        
    }

    return errors; 
}