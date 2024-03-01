import React, { useState } from 'react';

function InputBox({onOrderClick, onCancelClick, betAmountClick}) {
    const [value, setValue] = useState(0);

    const divideByHalf = () => {
        const newValue = Math.ceil(value / 2);
        setValue(newValue < 100 ? 0 : newValue);
        betAmountClick(newValue < 100 ? 0 : newValue);
    };

    const setAmountValueButton = (val) =>{
        setValue(val);
        betAmountClick(val);
    }

    const doubleUp = () => {
        if(value == 0)
        setValue(100);
        else
        setValue(value * 2);
        betAmountClick(value * 2);
    };

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value);
        if(newValue >=100){
            betAmountClick(newValue);
        }
        setValue(newValue);
    };
    return (
        <div style={{ padding: '1vh 4vw 1vh 4vw', borderBottom: 'solid black 1px' }}>
            <div style={{ display: 'flex', width:'92vw' }}> 
                <div style={{display :'flex', height:'6vh', marginRight:'2vw'}}>
                    <button onClick={divideByHalf} style={{width:'12vw', fontWeight:'bolder'}}>-</button>
                    <input className='dfc' type="number" style={{width:'20vw', fontWeight:'bold'}} value={value} onChange={handleChange} />
                    <button onClick={doubleUp} style={{width:'12vw', fontWeight:'bolder'}}>+</button>
                </div>
                <div className='bet-buttons' style={{backgroundColor:'green'}} onClick={() => onOrderClick()}>Order 100</div>
                {/* <div style={{display :'flex', height:'5vh', marginLeft:'2vw'}}>
                    <button onClick={divideByHalf} style={{width:'12vw'}}>-</button>
                    <input type="number" style={{width:'20vw'}} value={value} onChange={handleChange} />
                    <button onClick={doubleUp} style={{width:'12vw'}}>+</button>
                </div> */}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div className='amount-btn' onClick={()=> setAmountValueButton(100)}>100</div>
                <div className='amount-btn'  onClick={()=> setAmountValueButton(200)}>200</div>
                <div className='amount-btn'  onClick={()=> setAmountValueButton(300)}>300</div>
                <div className='amount-btn'  onClick={()=> setAmountValueButton(400)}>400</div>
                <div className='amount-btn'  onClick={()=> setAmountValueButton(500)}>500</div>
                <div className='amount-btn'  onClick={()=> setAmountValueButton(1000)}>1000</div>
                <div className='amount-btn'  onClick={()=> setAmountValueButton(1500)}>1500</div>
                <div className='amount-btn'  onClick={()=> setAmountValueButton(2000)}>2000</div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'1vh'}}>
                <div className='bet-buttons' style={{backgroundColor:'red'}} onClick={() => onCancelClick()}>Cancel</div>
                <div className = {value < 100 || isNaN(value) ? 'disabled bet-buttons' :'bet-buttons'} style={{backgroundColor:'green'}} onClick={() => onOrderClick()}>Order</div>
            </div>
        </div>
    )
}

export default InputBox