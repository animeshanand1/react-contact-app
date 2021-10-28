import React from "react";
import Paper from "@material-ui/core/Paper";


function Header(){
    return(
        <Paper style={{padding:"5px",display:'flex'}} square elevation={3}>
            <img style={{padding:"0 2px",width:"34px" ,height:'38px'}} src="https://storage.googleapis.com/moravio-web/media/react_native_e0c7e12161/react_native_e0c7e12161.png"/>
            <h1 className="site-head">Contact-App</h1>

        </Paper>
       
    )
   
}










export default Header;