import http from "./Https";
const FormUrl = "form";

const form = (data) =>{
    console.log("Form ===> ",data);
    return http.Post(FormUrl,data);
}

export default {
    form: form,
}