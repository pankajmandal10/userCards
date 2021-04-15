import React, { Component } from 'react'
import Details from './section/Details'
import {Route} from "react-router-dom"
import SearchBox from './section/SearchBox'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={SearchBox} exact />
                    <Route path="/searchbox" component={SearchBox} exact  />
                    <Route path="/searchbox/:id" component={Details} exact />
                
            </section>
        )
    }
}

export default Section
