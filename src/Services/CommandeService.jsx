import http from "./AxiosContext";
const getAll = () => {
  
  return http.get("/commande/getAll");
};
const get = id => {
  return http.get(`/commande/getOrderbyId/${id}`);
};
const create = data => {
  return http.post("/commande/create",data);
};
const update = (id, data) => {
  return http.put(`/commande/updateOrder/${id}`,data);
};
const remove = _id => {
  return http.delete(`/commande/deleteOrder/${_id}`);
};
const findByName = title => {
  return http.get(`/commande/getOrderbyRef=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};