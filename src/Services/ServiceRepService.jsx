import http from "./AxiosContext";

const getAll = () => {
  return http.get("/servicerep/getAllServices");
};
const get = id => {
  return http.get(`/servicerep/getbyID/${id}`);
};
const create = data => {
  return http.post("/servicerep/createService",data);
};
const update = (id, data) => {
  return http.put(`/servicerep/updateService/${id}`,data);
};
const remove = _id => {
  return http.delete(`/servicerep/deleteService/${_id}`);
};
const findByName = title => {
  return http.get(`/servicerep/getbyName=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};