import http from "./AxiosContext"

const create =data=>{
    return http.post("/users/login",data)

}

const logout =data=>{
    return http.post("/users/logout",data)
}

export default{
    create,logout
}