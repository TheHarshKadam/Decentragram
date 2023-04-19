import React from 'react'
import Identicon from 'identicon.js';
import ppic from "../Group 2.png";
import ua from "../user-avatar.png"
import gu from "../group-users.png"
import mg from "../mechanical-gears.png"

function Sidebar(props) {
  return (
    <div style={{marginTop:"20px", border:"1px solid grey", padding:"40px", borderRadius:"10px",margin:"50px 20px"}}>
        <img style={{display:"block",margin:"auto",width:"150px",borderRadius:"100px", border:"5px solid #3586C7"}} src={ppic} alt="" />
        <p style={{marginTop:"20px", color:"grey", textAlign:"center"}}>{props.account}</p>
        <div className='row'>
            <div className='col text-center'>
                <h4>45</h4>
                <p>Images</p>
            </div>
            <div className='col text-center'>
            <h4 style={{color: "linear-gradient(180deg, #7DF4FE 0%, #3586C7 100%)"}} >3.67</h4>
                <p>ETH</p>
            </div>
        </div>
        <hr/>
        <div style={{marginTop:"20px"}}>
            <a href='#' style={{textDecoration:"none"}}>
            <div className="row" >
                <div className="col-1"><img src={ua} alt=""/></div>
                <div className="col"><p style={{fontSize:"20px", color:"#3586C7"}} >Profile</p></div>
            </div>
            </a>
            <a href='#' style={{textDecoration:"none"}}>
            <div className="row" >
                <div className="col-1"><img src={gu} alt=""/></div>
                <div className="col"><p style={{fontSize:"20px", color:"#3586C7"}} >Community</p></div>
            </div>
            </a>
            <a href='#' style={{textDecoration:"none"}}>
            <div className="row" >
                <div className="col-1"><img src={mg} alt=""/></div>
                <div className="col"><p style={{fontSize:"20px", color:"#3586C7"}} >Settings</p></div>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Sidebar
