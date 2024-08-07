import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Ooops!!!!</h1>
            <h3>Somthing went wrong</h3>
            <h4>{err.status}: {err.statusText}</h4>
        </div>
    )
}

export default Error;