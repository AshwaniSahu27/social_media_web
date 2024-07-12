import React from "react";
import myPhoto from "/my_photo.jpg"
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { logOpen, signOpen } from "../../store/actionsSlice";
import { Link } from "react-router-dom";
import Signup from "../Signup";
import Login from "../Login"
import LogOut from "./LogOut";



function Right() {
  const userInfo = useSelector((state)=>state.userInfo);
  const dispatch = useDispatch()
  const actions = useSelector((state)=>state.actions)

  console.log(userInfo)
  return (
    <section className="right-section">
      {userInfo.status? <div className="right-section-head ">
        <div className="flex w-[80%]  gap-2">

   
        <div className="right-section-head-logo ">
          <img src={myPhoto} alt=""  />
        </div>
        <div className="right-section-head-paras ">
          <div className="right-section-head-para1 hover-dailogBox">
            {userInfo.userData.name}
          </div>
          <div className="right-section-head-para2">ashwani sahu</div>
        </div>  
        </div>

              <LogOut />

        
      </div>:  <div className="flex gap-5">   <Link
            onClick={() => dispatch(signOpen())}
            className="py-1 px-3 rounded-lg bg-blue-500/40 ext-primary font-medium transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
          <Link
            onClick={() => dispatch(logOpen())}
            className="py-1 px-3 rounded-lg bg-blue-500/40 ext-primary font-medium transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </div>}
        {actions.loginOpen && <Login />}
        {actions.signupOpen && <Signup />}
        {actions.signupOpen && <LogOut />}


      <div className="right-section-para">
        <p>Suggesed for you</p>
        <a href="#">see all</a>
      </div>
      <div className="right-section-footer"></div>
    </section>
  );
}

export default Right;
