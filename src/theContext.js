import {useState} from "react"
const TheContext = React.createContext()

function TheContextProvider(props) {
    const [count, setCount] = useState(0)

    function add() {
        return(
            setCount(prevCount => prevCount ++)
        )
    }
    return(
        <TheContext.Provider value={{count, add}}>
            {props.children}
        </TheContext.Provider>
    )
}
export default {TheContextProvider, TheContext}