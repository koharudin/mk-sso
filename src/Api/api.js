import axios from "axios"

const app_data = JSON.parse(localStorage.getItem("app_data"))
export const ApiCall = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_SERVER}/api`,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${app_data?.app_access_token}`,
    Accept: "application/json",
    ContentType: "application/json",
  },
})

ApiCall.interceptors.request.use(
  (config) => {
    const app_data = JSON.parse(localStorage.getItem("app_data"))

    config.headers["Authorization"] = `Bearer ${app_data?.access_token}`
    config.headers["Accept"] = `application/json`
    config.headers["ContentType"] = `application/json`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
