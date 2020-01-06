import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export function api() {
  return axios.create({
    baseURL: "https://weight-lifting-journal-3.herokuapp.com/api/auth",
    headers: {
      Authorization: getToken()
    }
  });
}

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      Authorization: token
    }
  })
}