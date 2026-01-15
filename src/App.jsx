import { useState } from "react"
import InputBox from "./inputcomponent/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {

    const [fromVal , setfromVal] = useState(0);
    const [toVal , setToVal] = useState(0);
    const [fromCurrency , setFromCurrency] = useState("usd");
    const [toCurrency , setToCurrency] = useState("inr");

    
    const currencyObject = useCurrencyInfo(fromCurrency);
    

    const options = Object.keys(currencyObject);

    function convert(){
        setToVal(fromVal* currencyObject[toCurrency])
    }


    

    return (
        <>
        
            <div className="main-b">

                <InputBox
                    label={"from"}
                    className="input-box"
                    inputVal={fromVal}
                    onAmountChange={(e) => {setfromVal(e.target.value)}}
                    CurrencyOptions={options}
                    selectCurrency={fromCurrency}
                    onCurrencyChange={(e) => {setFromCurrency(e.target.value);}}
                    

                ></InputBox>

                <InputBox
                    label={"to"}
                    inputVal={toVal}
                    onAmountChange={(e) => {setToVal(e.target.value)}}
                    disabled={true}
                    CurrencyOptions={options}
                    selectCurrency={toCurrency}
                    onCurrencyChange={(e) => {setToCurrency(e.target.value)}}

                ></InputBox>
                <button onClick={convert} className="convert-btn">
                    Convert
                </button>
            </div>
        </>
    )
}

export default App
