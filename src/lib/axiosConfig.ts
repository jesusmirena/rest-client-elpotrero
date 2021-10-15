import axios from "axios";

const instance = axios.create();

const token = window.sessionStorage.getItem("jwt") || "";

instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
