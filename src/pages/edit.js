import { useEffect, useState } from "react";
import { memo } from "react";
import './ed.css';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton, ButtonGlobalClassNames, PrimaryButton }
    from '@fluentui/react/lib/Button';
import { Input } from "@fluentui/react-components";
function Edits() {
    const [ids,setid]=useState('');
    const [namez,set_data]=useState({});
    const [name,setname]=useState("");
    const [age,setage]=useState("");
    const [depart,setdpart]=useState("");
    const [date,setdate]=useState("");
    const [newdata,set_newdata]=useState({});
    const [updata,setup]=useState([]);
    let datas=JSON.parse(localStorage.getItem('datas'));
    const set_id=(e)=>{
      let a=e.target.value;
      console.log(a);
      setid(a);
      let h=datas[a-1];
       console.log(h);
      if(h){
        setname(h.names);
        setage(h.age);
        setdpart(h.depart);
        setdate(h.dates);
        
      }
    }
    const seet_dd=(e)=>{
        
       let k=e.target.name;
       let v=e.target.value;

       set_data((p)=> ({...p,[k]:v}));
       
       

    }
    const Issub=(e)=>{
        e.preventDefault();
        setup((p)=>([...p,namez]));
        console.log(ids);
        datas[ids-1]=namez;
        console.log(datas);
        localStorage.setItem("datas",JSON.stringify(datas));
        alert("Updata Sucessfull");
    }
    console.log(name);

    return ( 
    <>
    <div class="mai">
        <h1>Edit:</h1>
        <form action="" onSubmit={Issub}>
            <label>Employe Id: </label>
            <Input type="number"  name="ids"  onChange={set_id}  defaultValue={ids || ''} className="number"/><br/><br/>
             <label>Employ Name: </label>
             <Input type="text" name="names" onChange={seet_dd}  defaultValue={name || ''} className="texts"/><br/><br/>
             <label>Employ Age: </label>
             <Input type="number" name="age"  onChange={seet_dd}  defaultValue={age || ''} className="number"/><br/><br/>
             <label>Employ Department: </label>
             <Input type="text" name="depart" onChange={seet_dd} defaultValue={depart || ''} className="texts"/><br/><br/>
             <label>Employ Date Of Joining: </label>
             <Input type="date" name="dates" onChange={seet_dd}  defaultValue={date || ''} className="datas"/><br/><br/>
             <PrimaryButton type="submit">Submet</PrimaryButton>
             
            </form>
            {/* <DefaultButton>Clear</DefaultButton> */}
    </div>
    </> 
    );
}

export default memo(Edits);