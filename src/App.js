import { useState } from "react";

export default function App() {
  return (

    <div>
      <TipCalculator />
    </div>
  )

}

function TipCalculator() {

  const [bill, setBill] = useState("");
  const [persantage1, setPersantage1] = useState(0);
  const [persantage2, setPersantage2] = useState(0);

  const tip = bill * ((persantage1 + persantage2) / 2 / 100);

  function handlerReset() {
    setBill("");
    setPersantage1(0);
    setPersantage2(0);
  }



  return (
    <div className="tipCalc">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPeercentage persantage={persantage1} onSelect={setPersantage1}> ✅How did you like the service? </SelectPeercentage>
      <SelectPeercentage persantage={persantage2} onSelect={setPersantage2}>✅How did your friends like the service? </SelectPeercentage>

      {bill > 0 && <>
        <Output bill={bill} tip={tip} />
        <Reset onReset={handlerReset} />
      </>}
    </div>
  )

}

function BillInput({ bill, onSetBill }) {

  return (
    <div>
      <label>✅How much was the bill?  </label>
      <input type="text" placeholder="Bill value" value={bill} onChange={e => onSetBill(Number(e.target.value))} />


    </div>
  )

}

function SelectPeercentage({ children, persantage, onSelect }) {

  return (
    <div>
      <label>{children}</label>
      <select value={persantage} onChange={e => onSelect(Number(e.target.value))}>
        <option value="0">😐 Dissatisfied ( 0% )</option>
        <option value="5">😊 It was okay ( 5%) </option>
        <option value="10">😀 It was good ( 10%)</option>
        <option value="20">🥰 Absoiutely amazing! ( 20%) </option>
      </select>
    </div>
  )

}

function Output({ bill, tip }) {
  return (
    <h3>You pay {bill + tip} ( ${bill} + ${tip} tip)</h3>
  )

}
function Reset({ onReset }) {
  return <button className="ResetBtn" onClick={onReset}>Reset</button>

}