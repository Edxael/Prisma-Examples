import React from 'react'
import { ApolloProvider } from "react-apollo"
import { HashRouter, Route, Link } from 'react-router-dom'
import './Styles/style.css'
import { client } from './EndPoint/EndPoint'

import AllRec from './01-All'
import AddRec from './02-Add'
import Update from './03-Update'
import Delete from './04-Delete'


export default class extends React.Component{
    render(){
        return(
            <ApolloProvider client={client}>
                <HashRouter>
                    <div className="MainContainer">
                
                        <div className="menu1">
                            <Link className="menuButton" to="/">All</Link>
                            <Link className="menuButton" to="/2">Add</Link>
                            <Link className="menuButton" to="/3">Update</Link>
                            <Link className="menuButton" to="/4">Delete</Link>
                        </div>
                
                        <hr/>
                
                        <Route exact path="/" component={AllRec}/>
                        <Route path="/2" component={AddRec}/>
                        <Route path="/3" component={Update}/>
                        <Route path="/4" component={Delete}/>
 
                        <br/>
                        <hr/>
                        <div>By: Edmundo</div>
                
                    </div>
                </HashRouter>
            </ApolloProvider>
        )
    }
}



// cjgn96f5b7kxl0b06m92wc3on