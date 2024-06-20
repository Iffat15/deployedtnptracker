// import { useState, useEffect } from 'react';
// import Group from './Group1';
// import { months } from '../tools';

// function renderMonthOptions() {
//     return months.getMonths().map( (m, i) => {
//         return <option
//             key={i}
//             value={i}
//         >
//             {m.shortName}
//         </option>
//     });
// }

// function bound(value, floor, ceil) {
//     return Math.min(ceil, Math.max(value, floor));
// }

// export default function EditableUserProfile1({
//     stored,
//     editCompleteCallback
// }) {

//     console.log("Edit User Profile");

//     const [fname, setFName] = useState(stored.fname);
//     const [lname, setLName] = useState(stored.lname);
//     const [linkdin, setLinkdin] = useState(stored.linkdin);
//     const [github, setGitHub] = useState(stored.github);
//     const [graduation, setGraduation] = useState(stored.graduation);
//     const [phoneno, setPhoneNo] = useState(stored.phoneno);
//     const [month, setMonth] = useState(stored.month);
//     const [day, setDay] = useState(stored.day);
   

//     const maxDay = months.getMaxDays(month);

//     function handleCancelClicked() {
//         editCompleteCallback(null);
//     }

//     function handleSaveClicked() {
//         console.log("Saved");
//         editCompleteCallback({fname,lname,linkdin,github,graduation,phoneno, month, day});
//     }

//     useEffect(() => {
//         setDay(bound(day, 1, maxDay));
//     }, [month]);


//     return <>
//         <Group >            
//             <h3>First Name:</h3>
//             <input
//                 type='text'
//                 value={fname}
//                 onChange={e => setFName(e.target.value)}
//             />
//             <h3>Last Name:</h3>
//             <input
//                 type='text'
//                 value={lname}
//                 onChange={e => setLName(e.target.value)}
//             />             
//         </Group>
//         <Group>            
//             <h3>Linkdin:</h3>
//             <input
//                 type='text'
//                 value={linkdin}
//                 onChange={e => setLinkdin(e.target.value)}
//             /> 
//              <h3>GitHub:</h3>
//             <input
//                 type='text'
//                 value={github}
//                 onChange={e => setGitHub(e.target.value)}
//             />            
//         </Group>
//         <Group>            
//             <h3>Graduation:</h3>
//             <input
//                 type='text'
//                 value={graduation}
//                 onChange={e => setGraduation(e.target.value)}
//             />  
//              <h3>Phone Number:</h3>
//             <input
//                 type='number'
//                 value={phoneno}
//                 onChange={e => setPhoneNo(e.target.value)}
//             />           
//         </Group>
//         <Group>            
//             <h3>Birthday:</h3>            
            
//             <select
//                 value={month}
//                 onChange={e => setMonth(bound(e.target.value, 0, 11))}
//             >
//                 {renderMonthOptions()}
//             </select>
//             <input
//                 type='number'
//                 value={day}
//                 onChange={e => setDay(bound(e.target.value, 1, maxDay))}
//                 style={{width: "50px"}}
//             />
//         </Group>
//         <Group>
//             <button className='btn2'  onClick={handleSaveClicked}>Save</button>
//             <button className='btn2'  onClick={handleCancelClicked}>Cancel</button>
//         </Group>
//     </>
// }
import { useState, useEffect } from 'react';
import Group from './Group1';
import { months } from '../tools';

function renderMonthOptions() {
    return months.getMonths().map( (m, i) => {
        return <option
            key={i}
            value={i}
        >
            {m.shortName}
        </option>
    });
}

function bound(value, floor, ceil) {
    return Math.min(ceil, Math.max(value, floor));
}

export default function EditableUserProfile1({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");

    const [fname, setFName] = useState(stored.fname);
    const [lname, setLName] = useState(stored.lname);
    const [linkdin, setLinkdin] = useState(stored.linkdin);
    const [github, setGitHub] = useState(stored.github);
    const [graduation, setGraduation] = useState(stored.graduation);
    const [phoneno, setPhoneNo] = useState(stored.phoneno);
    const [month, setMonth] = useState(stored.month);
    const [day, setDay] = useState(stored.day);
   

    const maxDay = months.getMaxDays(month);

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({fname,lname,linkdin,github,graduation,phoneno, month, day});
    }

    useEffect(() => {
        setDay(bound(day, 1, maxDay));
    }, [month]);


    return <>
        <Group >            
            <h3> Name:</h3>
            <input
                type='text'
                value={fname}
                onChange={e => setFName(e.target.value)}
            />
            {/* <h3>Last Name:</h3>
            <input
                type='text'
                value={lname}
                onChange={e => setLName(e.target.value)}
            />              */}
        </Group>
        {/* <Group>            
            <h3>Linkdin:</h3>
            <input
                type='text'
                value={linkdin}
                onChange={e => setLinkdin(e.target.value)}
            /> 
             <h3>GitHub:</h3>
            <input
                type='text'
                value={github}
                onChange={e => setGitHub(e.target.value)}
            />            
        </Group> */}
        <Group>            
            <h3>Department:</h3>
            <input
                type='text'
                value={graduation}
                onChange={e => setGraduation(e.target.value)}
            />  
             <h3>Phone Number:</h3>
            <input
                type='number'
                value={phoneno}
                onChange={e => setPhoneNo(e.target.value)}
            />           
        </Group>
        {/* <Group>            
            <h3>Birthday:</h3>            
            
            <select
                value={month}
                onChange={e => setMonth(bound(e.target.value, 0, 11))}
            >
                {renderMonthOptions()}
            </select>
            <input
                type='number'
                value={day}
                onChange={e => setDay(bound(e.target.value, 1, maxDay))}
                style={{width: "50px"}}
            />
        </Group> */}
        <Group>
            <button className='btn2'  onClick={handleSaveClicked}>Save</button>
            <button className='btn2'  onClick={handleCancelClicked}>Cancel</button>
        </Group>
    </>
}