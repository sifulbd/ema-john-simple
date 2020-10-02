import React from 'react';
import fakeData from "../../fakeData/index";
const Inventory = () => {
    const handleOnClick = () => {
        fetch('http://localhost:5000/addPorduct', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(fakeData)
        })        
    }
    return (
        <div>
            <>
                <h2>The Inventory coming soon</h2>
                <button onClick={handleOnClick}> Add Data </button>
            </>
        </div>
    );
};

export default Inventory;