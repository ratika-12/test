import React, {useState}from 'react'

const CurrencyCalculator = () => {
  const [pounds, setPounds]=useState(1);
  const [rupees, setRupees] = useState(100);
  const poundsToRupees = pounds * 100;
  const rupeesToPounds = rupees / 100;
  const handlePoundsChange = (e) => {
    setPounds(e.target.value);
    setRupees(e.target.value * 100); 
  };

  const handleRupeesChange = (e) => {
    setRupees(e.target.value);
    setPounds(e.target.value / 100); 
  };

  return (
    <div>
      <h1>currency calculator</h1>
      <div>
        <label>Enter Pounds:</label>
        <input type="number" value={pounds}
        onChange={handlePoundsChange}/>
      </div>
      <div>
        <label>Enter Rupees:</label>
        <input
          type="number"
          value={rupees}
          onChange={handleRupeesChange}
        />
      </div>
      <div>
        <p> 1 pound = 100 India rupees</p>
        <p>Converted Amount: {pounds} pounds = {poundsToRupees} rupees</p>
        <p>Converted Amount: {rupees} rupees = {rupeesToPounds} pounds</p>
      </div>
    </div>
  )
}

export default CurrencyCalculator
