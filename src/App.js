// https://www.youtube.com/watch?v=CVpUuw9XSjY&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=5
import {useSelector, useDispatch} from "react-redux";
import {increment} from "./actions";
import {decrement} from "./actions";
import {sign_in} from "./actions";

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={()=>dispatch(increment(5))}>+5</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(sign_in())}>Login</button>

            {isLogged ? <p>Secret info</p> : <p>Not logged in</p>}
        </div>
    );
}

export default App;
