export const refreshAccessToken = async () => {

    try{
        const response = await axios.post("http://localhost:4001/api/auth/refresh-token", {}, {
            withCredentials: true // crucial for cookies
        });

        const accessToken = response.data.data.accessToken; // we need the data inside the accesstoken
        localStorage.setItem("accessToken", accessToken);
        return accessToken;
    } catch (err) {
        console.error("Failed to refresh token:", err.message);
        throw err;
    } 

};
