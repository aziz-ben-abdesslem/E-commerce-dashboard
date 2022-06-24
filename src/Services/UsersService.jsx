//aatitou el accés bech yorbot bin el back wel front 
import http from "./AxiosContext";
const getAll = () => {
  return http.get("/users/getAll");
};
const get = id => {
  return http.get(`/users/getbyId/${id}`);
};
const create = data => {
  return http.post("/users/register",data);
};
const update = (id, data) => {
  return http.put(`/users/updateUser/${id}`,data);
};
const remove = _id => {
  return http.delete(`/users/deleteUser/${_id}`);
};
const findByName = title => {
  return http.get(`/users/getbyName=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};