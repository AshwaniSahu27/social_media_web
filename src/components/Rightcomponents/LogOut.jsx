import React from 'react'
import authServices from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/userDataSlice'
import { useNavigate } from 'react-router-dom'

function LogOut() {
   const dispatch = useDispatch()
  const navigate = useNavigate()

    function handleClick(){
        authServices.logout().then(()=>{
         dispatch(logout())
        })
        navigate("/")
    }

  return (
      <button  className=" text-[#f70] duration-200 rounded-full" onClick={handleClick}>
        LogOut
      </button>
  )
}

export default LogOut