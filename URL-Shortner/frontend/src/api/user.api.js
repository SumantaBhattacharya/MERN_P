import axiosInstance from "../utils/axiosInstance";
export const registerUser = async (username, email, password) => {

    const {data} = await axiosInstance.post("/auth/signup", {

        username: username,
        email: email,
        password: password
    
    })

    return data;
    
}