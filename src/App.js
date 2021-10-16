import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [num, setNum] = useState(null);
  let [num2, setNum2] = useState(null);
  let [num3, setNum3] = useState(null);
  let [num4, setNum4] = useState(null);
  let [ans, setAns] = useState(null);
  let [ans2, setAns2] = useState(null);
  let [isCorrect, setIsCorrect] = useState(false);
  let [isCorrect2, setIsCorrect2] = useState(false);
  let [showAns, setShowAns] = useState(false);
  let [showAns2, setShowAns2] = useState(false);


  let [enterAns, setEnterAns] = useState(null);
  let [enterAns2, setEnterAns2] = useState(null);
  // function genRand() {
  //   let a = 1 + Math.random() * 10000
  //   setNum(a);
  // }

  const nextSum = () => {
    let a = Math.floor(1 + Math.random() * 10000)
    let b = Math.floor(1 + Math.random() * 10000)
    setNum(a)
    setNum2(b)
    setAns(a + b)
    setShowAns(false);
    setEnterAns("");
  }

  const nextSub = () => {
    let a = Math.floor(1 + Math.random() * 10000)
    let b = Math.floor(1 + Math.random() * a)
    setNum3(a)
    setNum4(b)
    setAns2(a + b)
    setShowAns2(false);
    setEnterAns2("");
  }
  useEffect(() => {
    let a = Math.floor(1 + Math.random() * 10000)
    let b = Math.floor(1 + Math.random() * 10000)
    let c = Math.floor(1 + Math.random() * 10000)
    let d = Math.floor(1 + Math.random() * c)
    setNum(a)
    setNum2(b)
    setNum3(c)
    setNum4(d)

    setAns(a + b)
    setAns2(c - d);
  }, [])


  const handleChange = (e) => {
    setEnterAns(e.target.value);
  }
  const handleChange2 = (e) => {
    setEnterAns2(e.target.value);
  }
  const handleSubmit = (e) => {
    if (parseInt(enterAns) === parseInt(ans)) {
      setShowAns(true);
      setIsCorrect(true);
      return;
    }

    setShowAns(true);
    setIsCorrect(false);

  }
  const handleSubmit2 = (e) => {
    if (parseInt(enterAns2) === parseInt(ans2)) {
      setShowAns2(true);
      setIsCorrect2(true);
      return;
    }

    setShowAns2(true);
    setIsCorrect2(false);

  }
  return (
    <div className="App">
      Jenny and Viya


      <div>
        <h3>Sum : </h3>

        <div>
          {num2}  +  {num} = <input type="number" value={enterAns} onChange={handleChange} />

          <div className="answer">
            <button onClick={handleSubmit}>Answer</button>
          </div>
        </div>

        <div>
          {showAns &&
            <div> {isCorrect ? <h4 style={{ color: 'green' }} > Your Answer is correct. <button onClick={nextSum}>Next Sum</button></h4> : <h4 style={{ color: 'red' }}> Your Answer is wrong</h4>} </div>}
        </div>
      </div>


      <div>
        <h3>Substraction : </h3>

        <div>
          {num3}  -  {num4} = <input type="number" value={enterAns2} onChange={handleChange2} />

          <div className="answer">
            <button onClick={handleSubmit2}>Answer</button>
          </div>
        </div>

        <div>
          {showAns2 &&
            <div> {isCorrect2 ? <h4 style={{ color: 'green' }} > Your Answer is correct. <button onClick={nextSub}>Next Substraction</button></h4> : <h4 style={{ color: 'red' }}> Your Answer is wrong</h4>} </div>}
        </div>
      </div>
    </div >
  );
}

export default App;
