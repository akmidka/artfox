import { Link } from "gatsby"
import React from "react"

class Header extends React.Component{
  constructor(){
    super()
    this.state={
      navBarActive: " ",
      hr1active: "",
      hr2active: "",
      hr3active: "",
    }
    this.navbarShow=this.navbarShow.bind(this)
  }
  navbarShow(){
    if(this.state.navBarActive !== "navbar_active"){
      this.setState({
        navBarActive: "navbar_active",
        hr1active: "first_hr_active",
        hr2active: "second_hr_active",
        hr3active: "third_hr_active",
      })
    }else{
      this.setState({
        navBarActive: " ",
        hr1active: "",
        hr2active: "",
        hr3active: "",
      })
    }
    
  }
  render(){
    return(
    <header>
        <div className={"navbar "+this.state.navBarActive}>
          <div className="navbar_button" onClick={this.navbarShow}>
            <hr className={"first_hr "+this.state.hr1active}></hr>
            <hr className={"second_hr "+this.state.hr2active}></hr>
            <hr className={"third_hr "+this.state.hr3active}></hr>
          </div>
          <Link className="link" to="#about_us">О нас</Link>
          <Link className="link" to="#our_team">Команда</Link>
          <Link className="link" to="#master_class">Мастер-классы и курсы</Link>
          <Link className="link" to="#contact">Связаться с нами</Link>
          <Link className="link" to="/">Art party</Link>
        </div>
      </header>
    )
  }
  
}


export default Header
