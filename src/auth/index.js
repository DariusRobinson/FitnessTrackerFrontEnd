export const storeToken = (token) => {
localStorage.setItem("token", token);
}

export const storeUsername = (username) => {
localStorage.setItem("username", username);
}

export const grabToken = () => {
   const token = localStorage.getItem('token')
    return token
} 

export const grabUser = () => {
    const user = localStorage.getItem('username')
     return user
 } 
 


export const clearUsernameAndToken = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
}
