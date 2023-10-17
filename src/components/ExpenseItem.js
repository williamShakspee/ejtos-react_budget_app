import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
    
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button  style={{
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '50%', // Makes the button round
    width: '35px',      // Adjust width and height to control the button size
    height: '35px',
    border: 'none',     // Remove border for a clean look
    fontSize: '48px',   // Adjust font size for the plus symbol
    display: 'flex',              // Use flexbox for centering
    alignItems: 'center',         // Center vertically
    justifyContent: 'center',
    fontWeight: 'bolder',
    lineHeight: '1.5',
    paddingBottom: '11px',
  }}
         className="green-circle-button" onClick={() => increaseAllocation(props.name)}>+</button></td>
        <td><div className="button-label"></div><button style={{
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%', 
    width: '35px',     
    height: '35px',
    border: 'none',    
    fontSize: '60px',  
    display: 'flex',              
    alignItems: 'center',         
    justifyContent: 'center',
    lineHeight: '1.5',
    paddingBottom: '11px',
  }}

         className="green-circle-button" onClick={() => decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
