import { useEffect, useRef, useState } from "react";
import { memo } from "react";
import './ed.css';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton, ButtonGlobalClassNames, PrimaryButton }
  from '@fluentui/react/lib/Button';
import { Input } from "@fluentui/react-components";
function Edits() {
  const ename = useRef(null);
  const [ids, setid] = useState('');
  const [namez, set_data] = useState({});
  const [names, setname] = useState("");
  const [age, setage] = useState("");
  const [depart, setdpart] = useState("");
  const [dates, setdate] = useState("");
  const [newdata, set_newdata] = useState({});
  const [updata, setup] = useState([]);
  let datas = JSON.parse(localStorage.getItem('datas'));

  useEffect(() => {
    console.log('One of the dependencies changed:', { names, age, depart, dates });

    set_data((p) => ({ ...p, }, { names, age, depart, dates }));

  }, [names, age, depart, dates]);
  const set_id = (e) => {
    let a = e.target.value;
    // console.log(a);
    setid(a);
    let h = datas[a - 1];
    // console.log(h);
    if (h) {

      setname(h.names);
      setage(h.age);
      setdpart(h.depart);
      setdate(h.dates);

    } else {
      setname("");
      setage("");
      setdpart("");
      setdate("");
    }

  }

  const Issub = (e) => {
    e.preventDefault();

    setup((p) => ([...p, namez]));

    console.log(ids);
    datas[ids - 1] = namez;
    console.log(datas);
    localStorage.setItem("datas", JSON.stringify(datas));
    alert("Updata Sucessfull");

    setname("");
    setage("");
    setdpart("");
    setdate("");

  }
  // console.log(name);


  return (
    <>
      <div class="mai">
        <h1>Edit:</h1>
        <form action="" onSubmit={Issub}>
          <label>Employe Id: </label>
          <input type="number" name="ids" onChange={set_id} defaultValue={ids || ""} className="number" /><br /><br />
          <label>Employ Name: </label>
          <input type="text" name="names" onChange={(e) => setname(e.target.value)} defaultValue={names || ""} ref={ename} className="texts" /><br /><br />
          <label>Employ Age: </label>
          <input type="number" name="age" onChange={(e) => setage(e.target.value)} defaultValue={age || ""} className="number" /><br /><br />
          <label>Employ Department: </label>
          <input type="text" name="depart" onChange={(e) => setdpart(e.target.value)} defaultValue={depart || ""} className="texts" /><br /><br />
          <label>Employ Date Of Joining: </label>
          <input type="date" name="dates" onChange={(e) => setdate(e.target.value)} defaultValue={dates || ""} className="datas" /><br /><br />
          <PrimaryButton type="submit">Submet</PrimaryButton>

        </form>
        {/* <DefaultButton>Clear</DefaultButton> */}
      </div>
    </>
  );
}

export default memo(Edits);