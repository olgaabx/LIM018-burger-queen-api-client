import axios from "axios";

const BASE_URL = "http://localhost:3000";
const authPath = "/auth";
const producstPath = "/products"

export const auth = (email, password) => {
  return axios.post(`${BASE_URL}${authPath}`, { email, password });
};

export const getProducts = (token) => {
  return axios.get(`${BASE_URL}${producstPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}