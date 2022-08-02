export const storeToken = (token) => {
localStorage.setItem("token", token);
}

export const storeUsername = (username) => {
localStorage.setItem("username", username);
}

export const clearUsernameAndToken = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
}
