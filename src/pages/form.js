import './form.css';
import { useState, useEffect } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton, PrimaryButton }
  from '@fluentui/react/lib/Button';
import { Button } from '@fluentui/react-components';

// import '@fluentui/react/dist/css/fabric.css';
function Inputs() {
  const [em_name, setfield] = useState({});
  const [names, setdata] = useState([]);
  const set = (e) => {
    let keys = e.target.name;
    let values = e.target.value;
    setfield((p) => ({ ...em_name, [keys]: values }));
  }
  const issub = (e) => {
    e.preventDefault();
    let l = Object.keys(em_name).length;
    if (l >= 4) {
      // settable(true);
      setdata((p) => [...p, em_name]);
    }
    alert("Sccessfuly enter ");
    setfield({});
  }
  useEffect(() => {
    let g = JSON.parse(localStorage.getItem("datas"));;
    if (g !== null) {
      if (g.length > 0) {
        for (let i = 0; i < names.length; i++) {
          g.push(names[i]);
        }
      }
    }

    if (g == null) {
      localStorage.setItem("datas", JSON.stringify(names));
    } else {
      localStorage.setItem("datas", JSON.stringify(g));
    }

  }, [names]);
  const clear = () => {
    setfield({});
  }

  return (
    <>

      <div className='main'>
        <h1>Employe Form:</h1>
        <form action="" onSubmit={issub}>

          <label>Employ Name: </label>
          <TextField type="text" name="names" onChange={set} value={em_name.names || ''} className="input" /><br /><br />
          <label>Employ Age: </label>
          <TextField type="number" name="age" onChange={set} value={em_name.age || ''} className="input" /><br /><br />
          <label>Employ Department: </label>
          <TextField type="text" name="depart" onChange={set} value={em_name.depart || ''} className="input" /><br /><br />
          <label>Employ Date Of Joining: </label>
          <TextField type="date" name="dates" onChange={set} value={em_name.dates || ''} className='input' /><br /><br />
          <Button type="submit">Submet</Button>

        </form>
        <DefaultButton onClick={clear} className="btn">Clear</DefaultButton>
      </div>
    </>
  )
}
export default Inputs;
