import { useState } from "react"

const useViewState = () => {
    const [viewState, setViewState] = useState({isLoading: false, data: null, error: null});

    const setLoading = (isLoading=true, reset=true) => {
        setViewState(prevState=>{
            return {isLoading: isLoading, data: reset ? null : prevState.data, error: reset ? null: prevState.error}
        })
    }

    const setData = (data, reset=true) => {
        setViewState(prevState=>{
            return {isLoading: false, data: data, error: reset ? null: prevState.error}
        })
    }

    const setError = (error, reset=true) => {
        setViewState(prevState=>{
            return {isLoading: false, data: reset ? null : prevState.data, error: error}
        })
    }

    return{
        viewState,
        setLoading,
        setData,
        setError,
    }
}

export default useViewState;