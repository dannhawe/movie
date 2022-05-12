import { Route } from "react-router-dom"
export const LoginTemplate = (props) => {
    const url = 'https://picsum.photos/200/200'
    const { Component, ...resParam } = props
    return <Route {...resParam} render={(propsRoute) => {
        return <div>
            <div className="w-full bg-full1 h-screen md:-mx-4" style={{ filter: 'blur(6px)', backgroundImage: `url(${url})` }} />
            <div className="absolute w-3/5 bg-white rounded-3xl" style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}>
                <div className="flex justify-center -mt-10">
                    <img className="border-2 w-20 h-20 rounded-full" src={url} />
                </div>
             <Component {...propsRoute} />
            </div>
        </div>
    }} >
    </Route>    
}
