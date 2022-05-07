import { Route } from "react-router-dom"
export const LoginTemplate = (props) => {
    const url = 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/278303058_2110680102433880_2739465157886102220_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=waOP9YdAecQAX8Fq58b&tn=R0tIwYU3eR8hikK-&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-0Gt2Ow3cdeXWiS_R0J5p3Nln6sby03B4_5U5IJxg8tg&oe=626AB88A'
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
