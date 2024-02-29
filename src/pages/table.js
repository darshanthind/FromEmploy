import { useState } from 'react';
import './Tabe.css';
import { Table } from '@fluentui/react-components';
function TTable() {
    let names=JSON.parse(localStorage.getItem(("datas")));
    let c=true;
    console.log(names);
    return (
        <>
           <div className='main_ta'>
           
            <>

            <h1>Table:</h1>
            <Table>
                <thead>
                <tr>
                    <th>Employe Id</th>
                    <th>Employe Name</th>
                    <th>Employ Age</th>
                    <th>Employ Department</th>
                    <th>Employ Date of Joining</th>
                </tr>
                </thead>
                <tbody>

                {names!==null && names!==undefined ? names.map((keysc,i) =>
                   <tr>
                    <td>{i+1}</td>
                    <td>{keysc.names}</td>
                    <td>{keysc.age}</td>
                    <td>{keysc.depart}</td>
                    <td>{keysc.dates}</td>
                   </tr>
                ):''}
               </tbody>
             </Table>
             </>
        </div>
        </>
      );
}

export default TTable;