import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'




export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
    
    render() {


        const {toggle} = this.state;
        // const {cart} = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">User List</Link></h1>
                    
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>  
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
