import React, { useMemo, useState } from 'react';
import "./Index.css";
import { ReactComponent as Logo } from "../logo.svg";

function Index() {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const incrementNumber = () => setNumber(prev => prev + 1)
    const incrementCount = () => setCount(prev => prev + 1)

    const isNumberEven = useMemo(() => {
        let i = 0;
        while (i < 200000000) i++
        return number % 2 === 0
    }, [number])

    return (
        <div className="Main">
            <p className="Text">Theme by useMemo</p>
            <Logo className="Logo" />
            <p>Kelompok 25</p>
            <div className="App">
                <button className="Button" onClick={incrementNumber}>number: {number}</button>
                <div>{isNumberEven ? "Genap" : "Ganjil"}</div>
                <button className="Button" onClick={incrementCount}>count: {count}</button>
            </div>
        </div>
    )
}

export default Index;