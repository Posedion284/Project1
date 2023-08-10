//This is the Views in django
import http from "./Https";
const RegisterUrl = "register";
const LoginUrl = "login";

const register = (data) => {
    console.log("registerdata====>",data);
    //http similar to url mapping where first argument  is /register and data is variable 
    //that contains data 
    return http.Post(RegisterUrl, data) 
}

const login = (data) => {
    console.log("Login ===> ",data);
    return http.Post(LoginUrl,data)
}

export default {
    register: register,
    login: login
}