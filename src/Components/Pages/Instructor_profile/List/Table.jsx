// import React from "react";

// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

// import "./Table.css";

// export const Table = ({ rows, deleteRow, editRow }) => {
//   return (
//     <div className="table-wrapper">
//       <table className="table">
//         <thead>
//           <tr>
//            <th>ROLL Number</th>
//             <th className="expand">Student Name</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, idx) => {
//             const statusText =
//               row.status.charAt(0).toUpperCase() + row.status.slice(1);

//             return (
//               <tr key={idx}>
//                 <td>{row.page}</td>
//                 <td className="expand">{row.description}</td>
//                 <td>
//                   <span className={`label label-${row.status}`}>
//                     {statusText}
//                   </span>
//                 </td>
//                 <td className="fit">
//                   <span className="actions">
//                     <BsFillTrashFill
//                       className="delete-btn"
//                       onClick={() => deleteRow(idx)}
//                     />
//                     <BsFillPencilFill
//                       className="edit-btn"
//                       onClick={() => editRow(idx)}
//                     />
//                   </span>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
    
//   );
// };
import React, { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import axios from "axios";

export const Table = ({ deleteRow, editRow }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        } else {
          const response = await axios.get(
            "https://placement-internship-tracker-backend-mu.vercel.app/api/instructors/?instructoremailId=sajakhete@pict.edu"
          );
          setUserData(response.data);
          localStorage.setItem("userData", JSON.stringify(response.data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th  >PRNno</th>
            <th  className="expand">First Name</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.instructor &&
            userData.instructor.map((instructor) => (
              instructor.students.map((student) => (
                <tr key={student._id}>
                  <td>{student.prnNo}</td>
                  <td className="expand">{student.name} {console.log(student.name )}</td>
                  {/* <td className="fit">
                    <span className="actions">
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(student)}
                      />
                    </span>
                  </td> */}
                </tr>
              ))
            ))}
        </tbody>
      </table>
    </div>
  );
};