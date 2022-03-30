import React, {useState} from 'react';
import './App.css';

type FilterType = "all" | "dollar" | "euro"
function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 500, number: "w453629474"},
        {banknote: "euro", nominal: 200, number: "n946729456"},
        {banknote: "dollar", nominal: 50, number: "q453624674"},
        {banknote: "dollar", nominal: 10, number: "w453629094"},
        {banknote: "dollar", nominal: 100, number: "p453629546"}
    ]);
    const [filter, setFilter] = useState<FilterType>("all")
    let newMoneyArray = money;
    if (filter === "dollar") {
        newMoneyArray = money.filter((someBanknote) => someBanknote.banknote === "dollar");
    }
    if (filter === "euro") {
        newMoneyArray = money.filter((someBanknote) => someBanknote.banknote === "euro");
    }
    const onClickFilterHandler = (name: FilterType) => {
        setFilter(name);
    }
    return (
        <>
            <ul>
                {newMoneyArray.map((obj, index) => {
                    return (
                        <li key={index}>
                            <span> {obj.banknote} </span>
                            <span> {obj.nominal} </span>
                            <span> {obj.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "30px"}}>
                <button onClick={() => onClickFilterHandler("all")}> All currencies</button>
                <button onClick={() => onClickFilterHandler("dollar")}> Only dollars</button>
                <button onClick={() => onClickFilterHandler("euro")}> Only euros</button>
            </div>
        </>
    );
}

export default App;
