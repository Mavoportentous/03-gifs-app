import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {

    const [counter, setCounter] = useState(initialValue);
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubtract = () => {
        setCounter(prevState => prevState - 1);
    }

    const handleReset = () => {
        setCounter(0);
    }
    return {/*objeto*/

        counter: counter,
        //Values
        handleAdd,
        handleSubtract,
        handleReset
        //Methods / Actions
    }
}


