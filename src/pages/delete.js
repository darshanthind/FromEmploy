import { useState } from "react";
import './dele.css';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton, ButtonGlobalClassNames, PrimaryButton }
    from '@fluentui/react/lib/Button';
function Delete() {
    const [ids,setid]=useState('');
    const set=(e)=>{
        let k=e.target.value;
        setid(k);
    }
    const deles=()=>{
        let names=JSON.parse(localStorage.getItem('datas'));
        let x=[...names];
        x.splice(Number(ids),1);
        localStorage.setItem('datas',JSON.stringify(x));
        setid('');
        alert("Sccessfuly Delete data");
    }
    return (
    <>
    <div className="main">
    <h1>Delete:</h1>
        <div className="inp">
           
        <label>Employ id: </label>
        <TextField type="text" onChange={set} value={ids} className="texts" /><br></br><br></br>
        <DefaultButton onClick={deles} className="button">Delete</DefaultButton>
        </div>
    </div>
    </>
    );
}

export default Delete;