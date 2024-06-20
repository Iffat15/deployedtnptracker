// import React, { useState, useEffect } from 'react';
// import './Links.css';
// import axios from 'axios';

// const Links = () => {
//   const [userLinks, setUserLinks] = useState(null);

//   useEffect(() => {
//     axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/student/?prnNo=72278496B')
//       .then(response => {
//         setUserLinks(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="container2">
//       {userLinks && ( 
//         <>
//           <h4 className='h'>LinkedIn: <p className='p'>{userLinks.LinkedIN}</p></h4>
//           <hr />
//           <h4 className='h'>GitHub: <p className='p'>{userLinks.Github}</p></h4>
//           <hr />
//           <h4 className='h'>LeetCode: <p className='p'>https://leetcode.com/abcdugk9840/</p></h4>
//           <hr />
//           <h4 className='h'>CodeForces: <p className='p'>https://codeforces.com/profile/abcdtfh</p></h4>
//           <hr />
//           <h4 className='h'>CodeChef: <p className='p'>https://www.codechef.com/users/abcduit_79</p></h4>
        
//         </>
//       )}
//     </div>
//   );
// }

// export default Links;
import React, { useState, useEffect } from 'react';
import './Links.css';
import axios from 'axios';

const Links = () => {
  const [userLinks, setUserLinks] = useState(() => {
    // Retrieve userLinks from localStorage
    const storedUserLinks = localStorage.getItem('userLinks');
    return storedUserLinks ? JSON.parse(storedUserLinks) : null;
  });

  useEffect(() => {
    // Fetch userLinks if not available in localStorage
    if (!userLinks) {
      axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/student/?prnNo=72278496B')
        .then(response => {
          const userLinksData = response.data;
          // Store userLinks in localStorage
          localStorage.setItem('userLinks', JSON.stringify(userLinksData));
          setUserLinks(userLinksData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userLinks]);

  return (
    <div className="container2">
      {userLinks && ( 
        <>
          <h4 className='h'>LinkedIn: <p className='p'>{userLinks.LinkedIN}</p></h4>
          <hr />
          <h4 className='h'>GitHub: <p className='p'>{userLinks.Github}</p></h4>
          <hr />
          <h4 className='h'>LeetCode: <p className='p'>https://leetcode.com/abcdugk9840/</p></h4>
          <hr />
          <h4 className='h'>CodeForces: <p className='p'>https://codeforces.com/profile/abcdtfh</p></h4>
          <hr />
          <h4 className='h'>CodeChef: <p className='p'>https://www.codechef.com/users/abcduit_79</p></h4>
        </>
      )}
    </div>
  );
}

export default Links;
