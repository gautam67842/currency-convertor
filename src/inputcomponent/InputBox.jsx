import { useId } from "react";
import "./inputbox.css"

function InputBox({
    label,
    className = "",
    inputVal,
    onAmountChange,
    disabled,
    CurrencyOptions = [],
    selectCurrency,
    onCurrencyChange,
}) {
    const uniqueId = useId();

    return (
        <>

            <div className={`container ${className}`} >

                <div className="input-div">

                    <label htmlFor={uniqueId}>{label}</label>
                    <input
                        id={uniqueId}
                        type="number"
                        value={inputVal}
                        onChange={onAmountChange}
                        disabled={disabled}

                    />


                </div>
                <div className="select-div">

                    <p>currency type</p>

                    <select value={selectCurrency} onChange={onCurrencyChange} name="" id="">
                        {CurrencyOptions.map((option, idx) => {
                            return <option
                                key={idx}
                                value={option}>
                                {option}
                            </option>
                        })}
                    </select>

                </div>

            </div>
        </>
    )
}

export default InputBox;