import { Link } from "react-router-dom"
export default function Home(props){
    return(
        <>
        {
        props.username ?
        <h1>{props.data[0].uname} Is Logged In </h1>
        :
        <>
        <h1>You Are Logged Out Of the Sytem Please Login</h1>
        <Link to='/'>Signup</Link>
        </>

        }
        </>
    )
}