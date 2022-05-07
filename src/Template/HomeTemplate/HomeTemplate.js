import { Fragment } from "react"
import { Route } from "react-router-dom"
import Footer from "./Layout/Footer"
import Header from "./Layout/Header"

export const HomeTemplate = (props) => {
    const { Component, ...resParam } = props
    return <Route {...resParam} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <Component {...propsRoute}/>
            <Footer />
        </Fragment>
    }} >
    </Route>
}