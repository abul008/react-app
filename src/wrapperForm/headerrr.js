import React, {Component} from "react";
// import Login from "./loginInp/login";
import Singin from "./singinInp/singin";
// import Button from "./ButtonInput/button";
// import Input from "./ButtonInput/input";
// import "../wrapperForm/header.css";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
          singInDisplay: "none",
          display: "none",
        };
      }
    
      clickButton = () => {
        this.setState({singInDisplay:"block"})
        this.setState({display:"none"})
    }

    clickButton1 =() => {
       
        this.setState({display: "block"})
        this.setState({singInDisplay:"none"})
    }
  
    render() {
        return(
        <div className="inputForm"  >
           {/* <Login  class="loginForm" stayle={{display:this.state.display}} /> */}
           <Singin singFormStayle={{display:this.state.singInDisplay}} />
           <div className="buttonDiv">
           <Button buttonName="Sing in" click={this.clickButton} ></Button>
           <Button buttonName="Log in" click={this.clickButton1}/>
           </div>
        </div>
        )
    }
}

export default Header;