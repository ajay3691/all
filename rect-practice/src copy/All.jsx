import React, { Component } from 'react'
import CompA from './controllers/1CompA'
import State from './controllers/3State'
import StateCount from './controllers/4StateCount'
import StateFun from './controllers/3useStateFun'
import TableCount from './controllers/4TableCount'
import Clock from './controllers/5Clock'
import Didmount from './controllers/5Didmount'
import Constructor from './controllers/6Constructor'
import Bind from './controllers/7Bind'
import Bind1 from './controllers/7Bind1'
import TablMap from './controllers/8TablMap'
import Login from './controllers/9Login'
import LoginValue from './controllers/9LoginValu'
import Router1 from './controllers/10Router'
import Axio from './controllers/11Axio'
import AxioDidmount from './controllers/12AxioDidmount'
import AxioLength from './controllers/13AxioLength'
export class All extends Component {
    render() {
        return (
            <div>
                <CompA />
                <State />
                <StateFun />
                <StateCount />
                <TableCount />
                <Clock />
                <Didmount />
                <Constructor />
                <Bind />
                <Bind1 />
                <TablMap />
                <Login />
                <LoginValue />
                <Router1 />
                <Axio />
                <AxioDidmount />
                <AxioLength />
            </div>
        )
    }
}

export default All
