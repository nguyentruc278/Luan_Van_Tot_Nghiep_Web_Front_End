import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Global from './Global/Global'
import Vietnam from './VietNam/Vietnam'

export default function Index() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Global />
                    </Route>
                    <Route path="/vietnam">
                        <Vietnam />
                    </Route>
                </Switch>
            </Router>

            {/* <Footer /> */}
        </div>
    )
}
