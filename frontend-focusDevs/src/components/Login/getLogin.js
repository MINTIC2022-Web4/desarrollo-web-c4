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
    if (res.status === 200) {
        return res.data;
    } else if (res.status === 401) {
        throw new Error('Unauthorized');
    }
};
export default getLogin;