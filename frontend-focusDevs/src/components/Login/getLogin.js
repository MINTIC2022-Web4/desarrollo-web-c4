import axios from "axios";


const getLogin = async (dataLogin) => {
    console.log("🚀 ~ file: getLogin.js ~ line 3 ~ getLogin ~ data", dataLogin)
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/login',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        data: dataLogin,
    };
    const res = await axios(options);
    return res.data;
};
export default getLogin;