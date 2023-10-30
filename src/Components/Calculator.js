import React, {useState} from 'react'
import Button from './Button';
import './Calculator.css';

function Calculator() {

    const [result, setResult] = useState({
        current:"0",
        total:"0",
        isInitial:true,
        preOp:""
    });

    function handleNumber(value){
        let newValue = value;
        if(!result.isInitial){
            newValue = result.current+value;
        }
        setResult({current:newValue, total:result.total, isInitial:false, preOp:result.preOp});
    }

    function handleOperator(value){
        const total = doCalculation();
        setResult({current: total.toString(), total:total.toString(), isInitial:true, preOp:value});
      }

    function doCalculation(){
        let total = parseInt(result.total);

        switch(result.preOp){
            case "+":
              total+= parseInt(result.current);
              break;
            case "-":
              total-= parseInt(result.current);
              break;
            case "*":
              total*= parseInt(result.current);
              break;
            case "/":
              total/= parseInt(result.current);
              break;
            default:
              total = parseInt(result.current);  
        }
        return total;
    }

    function renderDisplay(){
        return result.current;
    }

    function handleClear(){
        setResult({
            current:"0",
            total:"0",
            isInitial:true,
        });
    }

    return(

    <div className='container'>
        <div className='calculator justify-content-center'>
            <div className='display'>{renderDisplay()}</div>
            <Button value="7" onClick={handleNumber}/>
            <Button value="8" onClick={handleNumber}/>
            <Button value="9" onClick={handleNumber}/>
            <Button className="operator" onClick={handleOperator} value="/"/> 
            <Button value="4" onClick={handleNumber}/>
            <Button value="5" onClick={handleNumber}/>
            <Button value="6" onClick={handleNumber}/>
            <Button className="operator" onClick={handleOperator} value="*"/> 
            <Button value="1" onClick={handleNumber}/>
            <Button value="2" onClick={handleNumber}/>
            <Button value="3" onClick={handleNumber}/>
            <Button className="operator" onClick={handleOperator} value="-"/> 
            <Button value="C" onClick={handleClear}/>
            <Button value="0" onClick={handleNumber}/>
            <Button value="=" onClick={handleOperator}/>
            <Button className="operator" onClick={handleOperator} value="+"/> 
        </div>
    </div>
    
    )
}

export default Calculator;
