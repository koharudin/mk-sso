import { useEffect } from "react"
import AppApi from "../Api/app_api"
import { Navigate } from "react-router-dom"

export default (props)=>{
  return <>
    {AppApi.isLogin()?<Navigate to="/dashboard"/>:<Navigate to="/login"/>}
  </>
}