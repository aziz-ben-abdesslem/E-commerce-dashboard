import http from "./AxiosContext";
const getAll = () => {
  return http.get("/contact/getAll");
};

const remove = _id => {
  return http.delete(`/contact/deletecontact/${_id}`);
};

export default {
  getAll,
  remove,
};