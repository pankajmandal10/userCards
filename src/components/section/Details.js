import React, { Component } from 'react'
import {DataContext} from '../Context'
// import countriesList from './countries.json'
import '../css/Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        usercard: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({usercard: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {usercard} = this.state;
        
        return (
            <>
                {
                    usercard.map(user =>(
                        <div className="details" key={user._id}>
                            <img src={user.url} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{user.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
