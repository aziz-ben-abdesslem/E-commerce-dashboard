import http from "./AxiosContext";
const getAll = () => {
  return http.get("/articles/getAllArt");
};
const get = id => {
  return http.get(`/articles/getbyID/${id}`);
};
const create = data => {
  return http.post("/articles/createArt",data);
};
const update = (id, data) => {
  return http.put(`/articles/updateArt/${id}`,data);
};
const remove = _id => {
  return http.delete(`/articles/deleteArt/${_id}`);
};
const findByName = title => {
  return http.get(`/articles/getbyName=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};