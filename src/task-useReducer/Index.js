import React, { useState, useReducer } from "react";
import "./Index.css";

const nilaiAwal = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case '+':
            return { count: state.count + 1 };
        case '-':
            return { count: state.count - 1 };
        case 'x2':
            return { count: state.count * 2 };
        case '/2':
            return { count: state.count / 2 };
        case 'Text':
            return { count: 0 };
        default:
            return { count: 0 };
    }
}

export default function Index() {
    const [state, kirim] = useReducer(reducer, nilaiAwal);
    return (
        <div className='Main'>
            <p className='Text'>Hitungan Sekarang: {state.count}</p>

            <div className="ViewButton">
                <div className="ViewButton1">
                    <button className='Button' onClick={() => kirim({ type: '+' })}>Tambah</button>
                </div>
                <div className="ViewButton2">
                    <button className='Button' onClick={() => kirim({ type: '-' })}>Kurangi</button>
                </div>
            </div>
            <div className="ViewButton">
                <div className="ViewButton">
                    <button className='Button2' onClick={() => kirim({ type: 'x2' })}>Kali 2</button>
                </div>
                <div className="ViewButton">
                    <button className='Button2' onClick={() => kirim({ type: '/2' })}>Bagi 2</button>
                </div>
            </div>
            <div className="ViewButton">
                <div className="ViewButton">
                    <button className='ButtonX' onClick={() => kirim({ type: 'Text' })}>Reset</button>
                </div>
            </div>
        </div>
    );
}
