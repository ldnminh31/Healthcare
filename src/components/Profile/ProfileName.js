import React from "react";

class ProfileName extends React.Component{
    state = {
        name: "John Smith"
    };


    render(){
        return (
            <h6>Hi {this.state.name}</h6>
        )
    }
    
}


export default ProfileName;