import { Fragment } from "react"
import { Redirect, Route } from "react-router-dom"
import { USER_LOGIN } from "../../util/Settings/config"

export const CheckoutTemplate = (props) => {
    const { Component, ...resParam } = props
    // console.log(localStorage.getItem(USER_LOGIN))
    if (!localStorage.getItem(USER_LOGIN)) {
        console.log('login')
        return <Redirect to='/login' />
    }
    return <Route {...resParam} render={(propsRoute) => {

        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }}/>
}
