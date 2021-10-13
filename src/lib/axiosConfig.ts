import axios from "axios";

const instance = axios.create()

const token = window.sessionStorage.getItem("jwt") || ""

console.log(token, "ESTAMOS EN EL ARCHIVO DE CONFIG AXIOS")

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance