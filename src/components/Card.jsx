import React, {useState} from 'react';
import s from "./Cards.module.css"

export default function Card({setData, data, name, descr, id }) {

    const [flagChange, setFlagChange] = useState(false);
    const [changeValue, setChangeValue] = useState("");

    function handleDeleteBtn(id) {
        let filteredCards = data.filter((card) => {
            return card.id !== id
        })
        setData(filteredCards);
        console.log(data);
    }

    function handleFlagChange() {
        setFlagChange(!flagChange);
    }

    function handleSetChange(e) {
        setChangeValue(e.target.value);
    }

    function handleDescrChange(id) {
        if (changeValue.length === 0) {
            console.log("fill the area");
        } else {
            let filteredCard = data.filter((card) => {
                return card.id === id
            })
            let otherCards = data.filter((card) => {
                return card.id !== id;
            })
            filteredCard[0].descr = changeValue;
            setData([...filteredCard, ...otherCards]);
            setFlagChange(!flagChange);
        }
    }


    return (
        <div className={s.container} key={id}>
            <div className={s.name}>{name}</div>
            <hr />
            {flagChange
                ?
                <div>
                    <input type="text" onChange={handleSetChange} value={changeValue} />
                    <button onClick={() => handleDescrChange(id)}>Accept</button>
                    <div></div>
                    <button onClick={handleFlagChange}>Cancel</button>
                </div>
                :
                <>
                    <div className={s.descr}>{descr}</div>
                    <button onClick={handleFlagChange}>Change</button>
                    <button onClick={() => handleDeleteBtn(id)}>Delete</button>
                </>
            }
        </div>
    );
}