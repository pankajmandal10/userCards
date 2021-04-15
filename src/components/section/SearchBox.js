import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../css/SearchBox.css'
import {  Input, Card, CardBody, CardTitle, } from 'mdbreact';
import "mdbreact/dist/css/mdb.css"
import countriesList from './countries.json'

class SearchBox extends Component {

    state = {
        search : ""
    }

    renderCountry = country =>{
        // const {search} = this.state;
        // var code = country.code.toLowerCase()

        return <div className="col-md-3" style={{ marginTop : '20px' }}>
            <Card>
                <CardBody>
                    <CardTitle title={country.title}>{country.name.substring(0, 15)}{ country.name.length > 15 && "..."}</CardTitle>
                </CardBody>
            </Card>
        </div>
    }

    onchange = e =>{
        this.setState({ search : e.target.value });
    }

    render() {

        const {search} = this.state;
        const filteredCountries = countriesList.filter( country =>{
            return country.Title.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        return (
            <div className="product">
            <main style={{marginTop: '4rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <Input label="Search User" icon="search" style={{borderRadius: "5px" }} onChange={this.onchange}/>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div id="product">
                        {
                            filteredCountries.map( country =>{
                                return (
                                <>
                                <div className="card" key={country.Id}>
                                <Link to={`/searchbox/${country.Id}`}>
                                   <img src={country.Url} alt=""/>
                                </Link>
                                <div className="content">
                                <p>{country.Title}</p>
                                </div>
                     </div>
                                </>
                                )
                            })
                        
                        }
                    </div>
                </div>
            </main>
           
            </div> 
           
        );
    }
}

export default SearchBox;