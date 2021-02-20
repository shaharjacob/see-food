import React, { useState } from 'react';
import Background from '../../assets/4.jpg'
import './Main.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { selectOptions, selectStyles } from '../../utils/select'
import Overlay from "react-overlay-component";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


const Main = ( {showMenu} ) => {

    const [groceries, setGroceries] = useState({})
    const [showOverlay, setOverlay] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([])

    const animatedComponents = makeAnimated();

    const mainStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: '100%',
        display: 'grid',
        gridTemplateRows: '0.4fr 0.6fr',
        gridTemplateColumns: '0.72fr 0.28fr',
    }

    const configs = {
        animate: true,
    };
    
    const onGrocerieSelect = (e) => {
        setSelectedOptions(e)
        let groceriesKeys = Object.keys(groceries) 
        if (e.length < groceriesKeys.length){
            let currOptionsValues = []
            for (let i = 0; i < e.legngth; i++){
                currOptionsValues.push(e[i].value)
            }
            for (let j = 0; j < groceriesKeys.length; j++){
                if (!currOptionsValues.includes(groceriesKeys[j])){
                    setGroceries(prevState => {
                        let state = { ...prevState };
                        delete state[groceriesKeys[j]]
                        return state;
                    })
                    break;
                }
            } 
        }
        else {
            setOverlay(true)
        }
        
        
    }

    const onAmountCancel = () => {
        setSelectedOptions(selectedOptions.slice(0, selectedOptions.length - 1))
        setOverlay(false)
    }

    const onAmountSave = () => {
        let selectedGrocery = selectedOptions[selectedOptions.length -1].value
        let type = document.getElementById("amount-type")
        let amount = document.getElementById("amount-number")
        
        setGroceries((prevState) => ({
            ...prevState,
            [selectedGrocery]: {
                type: type.value,
                amount: amount.value,
            }
        }))
        setOverlay(false)
    }

    return (
    <div style={mainStyle}>
        <span></span>
        <span></span>
        <span></span>
        <span>
            <div className="main-title">
                ?אילו מצרכים ברשותך
            </div>
            <div className="main-select">
                <Overlay 
                    configs={configs} 
                    isOpen={showOverlay} 
                    closeOverlay={() => setOverlay(false)}>
                    <div className="overlay-content">
                        <span className="padding-inside-overlay">
                            <input className="groceries-inputs" id="amount-number" type="number" placeholder="כמות..." />
                        </span>
                        <span className="padding-inside-overlay">
                            <select className="groceries-inputs" id="amount-type">
                                <option value="gram">גרם</option>
                                <option value="unit">יחידה</option>
                            </select>
                        </span>
                        
                    </div>
                    <div className="overlay-content">
                        <span className="padding-inside-overlay">
                            <Button variant="secondary" onClick={() => onAmountCancel()}>ביטול</Button>
                        </span>
                        <span className="padding-inside-overlay">
                            <Button variant="primary" onClick={() => onAmountSave()}>שמור</Button>
                        </span>
                    </div>
                </Overlay>
                <Select
                    placeholder="הקלד..."
                    onChange={(e) => onGrocerieSelect(e)}
                    value={selectedOptions}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    styles={selectStyles}
                    options={selectOptions}/>
            </div>
            <div className="found-recipes-button">
                <Button variant="primary">מצא מתכון!</Button>
            </div>
            <Dropdown>
                
                <Dropdown.Toggle style={{background: 'inherit', border: '0'}} id="dropdown-basic">
                    <i className="fas fa-bars fa-2x" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </span>       
    </div>
    );
}

export default Main;
