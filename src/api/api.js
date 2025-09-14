import axios from "axios"

const api = axios.create({
  baseURL: "https://filterr.net/MBN/admin/informatinal/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
})

export default api
