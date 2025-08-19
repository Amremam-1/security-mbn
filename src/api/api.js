import axios from "axios"

const api = axios.create({
  baseURL: "https://www.mahercp.net/admin/informatinal/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
})

export default api
