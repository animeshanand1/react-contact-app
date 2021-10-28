import React from "react";

function Footer(){
    return(
        <div>
            <p style={{
                bottom:0,
                position:'absolute',
                textAlign:'center',
                width:'100%'
                }}>Copyright  &copy;{new Date().getFullYear()} Animesh Thakur </p>


        </div>
    )
}

export default Footer;