import {validationResult} from "express-validator/check";

let getLoginRegister = (req, res) => {
    return res.render("./auth/master");
}

let postRegister = (req, res) => {
    let errorsArr = [];

    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach(item => {
            errorsArr.push(item.msg);
            return;
        });
        console.log(errorsArr);
    }
    console.log(req.body);
}
module.exports = {
    getLoginRegister: getLoginRegister,
    postRegister: postRegister
}