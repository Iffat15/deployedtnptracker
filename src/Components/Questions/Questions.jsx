// import React, { useState } from 'react';
// import './Questions.css';
// import Expcards from '../../Components/Experience_cards';

// const QuestionsPage = () => {
//   const questionanswer = {
//     "1. What is an array? ": [
//       "An array is a collection of items of the same data type stored at contiguous memory locations. An array is a group of similar elements or data items of the same type collected at contiguous memory locations. In simple words, we can say that in computer programming, arrays are generally used to organize the same type of data.",
//     ],
//     "2. What is a linked list?": [
//       "A linked list is a data structure that stores a sequence of elements. Each element in the list is called a node, and each node has a reference to the next node in the list. The first node in the list is called the head, and the last node in the list is called the tail."
//     ],
//     "3. How are stacks implemented?": [
//       "A stack can be implemented by means of Array, Structure, Pointer, and Linked List. Stack can either be a fixed size one or it may have a sense of dynamic resizing. Here, we are going to implement stack using arrays, which makes it a fixed size stack implementation."
//     ],
//     "4. What are common operations on a queue?": [
//       `Basic Operations for Queue in Data Structure:
//         Enqueue() - Insertion of elements to the queue.
//         Dequeue() - Removal of elements from the queue.
//         Peek() - Acquires the data element available at the front node of the queue without deleting it.
//         isFull() - Validates if the queue is full.
//         isNull() - Checks if the queue is empty.`
//     ],
//     "5. How are trees traversed?": [
//       "Tree traversal involves searching a tree data structure one node at a time, performing functions like checking the node for data or updating the node. There are two common classifications for tree traversal algorithms: Depth-first search (DFS) and breadth-first search (BFS)."
//     ],
//   };

//   const puzzles = {
//     "1. Pay an employee using a gold rod of 7 units ?": [
//       "An employee works for an employer for 7 days. The employer has a gold rod of 7 units. How does the employer pay to the employee, so that the number of employee’s rod units increases by one at the end of each day? The employer can make at most 2 cuts in the rod.",

//       "Solution:" +
//       `The employer can pay for seven days by making 2 cuts in a way that he has 3 rods of size 1, 2, and 4. 
//       1st Day: Employer gives 1 unit cut. 
//       2nd day: Takes back 1 unit cut from the employee given on the first day and gives a 2-unit cut. 
//       3rd Day: Gives 1 unit, and then the employer is left with 4 unit rod lengths. 
//       4th Day: Takes back cuts of 1 and 2 units. Gives a cut of 4 units. 
//       5th Day: Gives a cut of 1 unit to the employee. 
//       6th Day: Takes back a cut of 1 unit and gives a cut of 2 units. 
//       7th Day: Gives a cut of 1 unit to the employee.`
//     ],
//     "2. 3 Bulbs and 3 Switches": [
//       "There is a room with a door (closed) and three light bulbs inside the room. Outside the room, there are three switches, connected to the bulbs. You may manipulate the switches as you wish, but once you open the door you can’t change them. All bulbs are in working condition and you can open the door only once. Identify each switch with respect to its bulb.",

//       "Solution:" +
//       `Let the bulbs be X, Y, and Z 
//       Turn on switch X for 5 to 10 minutes. Turn it off and turn on switch Y. Open the door and touch the light bulb. 
//       1. the light is on from the bulb, it is Y 

//       Now we will check the other two off bulbs 
//       2. the bulb which is hot, is X 
//       3. the bulb which is cold, is Z  `
//     ],
//     "3. Camel and Banana Puzzle": [
//       "A person has 3000 bananas and a camel. The person wants to transport the maximum number of bananas to a destination which is 1000 KMs away, using only the camel as a mode of transportation. The camel cannot carry more than 1000 bananas at a time and eats a banana every km it travels. What is the maximum number of bananas that can be transferred to the destination using only camel (no other mode of transportation is allowed). ",

//       "Solution:" +
//       `Let’s see what we can infer from the question:

//       We have a total of 3000 bananas.
//       The destination is 1000KMs
//       Only 1 mode of transport.
//       Camel can carry a maximum of 1000 banana at a time.
//       Camel eats a banana every km it travels.`
//     ]
//   };

//   const [expandedQuestion, setExpandedQuestion] = useState(null);
//   const [expandedPuzzle, setExpandedPuzzle] = useState(null);

//   // Function to scroll to a specific section
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//     return (
//       <div>
//         <div className='nav'></div>
//         <div className="head">
//           <h1>Placement Prep</h1>
//           <p>Welcome to our comprehensive guide for company placements, where you'll find a wealth of resources, strategies, and practice questions to help you ace your interviews and land your dream job.</p>
//           {/* Buttons to scroll to sections */}
//           <div className="section-buttons">
//             <button onClick={() => scrollToSection("overview")}>Overview</button>
//             <button onClick={() => scrollToSection("questions")}>Coding Questions</button>
//             <button onClick={() => scrollToSection("puzzles")}>Puzzles</button>
//             <button onClick={() => scrollToSection("testimonial")}>Interview Experience</button>
//           </div>
//         </div>
//         <div className="section-overview">
//           <div class="container">
//             <div class="item">
//               <div class="number">15</div>
//               <div class="label">Coding Questions</div>
//             </div>
//             <div class="item">
//               <div class="number">10</div>
//               <div class="label">Puzzles</div>
//             </div>
//             <div class="item">
//               <div class="number">8</div>
//               <div class="label">Contributors</div>
//             </div>
//             <div class="item">
//               <div class="number">50+</div>
//               <div class="label">Problems</div>
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className="section-questions">
//           <h2>Coding Questions</h2>
//           <div className="questions-container">
//             <div className="topics-container">
//               {Object.keys(questionanswer).map(topic => (
//                 <div key={topic} className="topic">
//                   <div className="topic-header" onClick={() => setExpandedQuestion(expandedQuestion === topic ? null : topic)}>
//                     {topic}
//                     <i className={`fas fa-chevron-${expandedQuestion === topic ? 'up' : 'down'} chevron ${expandedQuestion === topic ? 'rotated' : ''}`}></i>
//                   </div>
//                   {expandedQuestion === topic && (
//                     <div className="questions-list">
//                       {questionanswer[topic].map((question, index) => (
//                         <div key={index} className="question">{question}</div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className="section-puzzles">
//           <h2>Puzzles</h2>
//           <div className="puzzle-container">
//             <div className="puzzles-container">
//               {Object.keys(puzzles).map(puzzle => (
//                 <div key={puzzle} className="puzzle">
//                   <div className="puzzle-header" onClick={() => setExpandedPuzzle(expandedPuzzle === puzzle ? null : puzzle)}>
//                     {puzzle}
//                     <i className={`fas fa-chevron-${expandedPuzzle === puzzle ? 'up' : 'down'} chevron ${expandedPuzzle === puzzle ? 'rotated' : ''}`}></i>
//                   </div>
//                   {expandedPuzzle === puzzle && (
//                     <div className="puzzle-answer">{puzzles[puzzle].map((answer, index) => <div key={index} className="solution">{answer}</div>)}</div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className="section-experiences">
//           <h2>Interview Experiences</h2>
//           <div className="experience-container">
//             <Expcards/>
//             <Expcards/>
//             <Expcards/>
//             <Expcards/>
//             <Expcards/>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default QuestionsPage;
import React, { useState } from 'react';
import './Questions.css';
import Expcards from '../../Components/Experience_cards';
import Studnav from '../Navbar/Studnav';

const QuestionsPage = () => {
  const questionanswer = {
    "1. What is an array? ": [
      "An array is a collection of items of the same data type stored at contiguous memory locations. An array is a group of similar elements or data items of the same type collected at contiguous memory locations. In simple words, we can say that in computer programming, arrays are generally used to organize the same type of data.",
    ],
    "2. What is a linked list?": [
      "A linked list is a data structure that stores a sequence of elements. Each element in the list is called a node, and each node has a reference to the next node in the list. The first node in the list is called the head, and the last node in the list is called the tail."
    ],
    "3. How are stacks implemented?": [
      "A stack can be implemented by means of Array, Structure, Pointer, and Linked List. Stack can either be a fixed size one or it may have a sense of dynamic resizing. Here, we are going to implement stack using arrays, which makes it a fixed size stack implementation."
    ],
    "4. What are common operations on a queue?": [
      `Basic Operations for Queue in Data Structure:
        Enqueue() - Insertion of elements to the queue.
        Dequeue() - Removal of elements from the queue.
        Peek() - Acquires the data element available at the front node of the queue without deleting it.
        isFull() - Validates if the queue is full.
        isNull() - Checks if the queue is empty.`
    ],
    "5. How are trees traversed?": [
      "Tree traversal involves searching a tree data structure one node at a time, performing functions like checking the node for data or updating the node. There are two common classifications for tree traversal algorithms: Depth-first search (DFS) and breadth-first search (BFS)."
    ],
  };

  const puzzles = {
    "1. Pay an employee using a gold rod of 7 units ?": [
      "An employee works for an employer for 7 days. The employer has a gold rod of 7 units. How does the employer pay to the employee, so that the number of employee’s rod units increases by one at the end of each day? The employer can make at most 2 cuts in the rod.",

      "Solution:" +
      `The employer can pay for seven days by making 2 cuts in a way that he has 3 rods of size 1, 2, and 4. 
      1st Day: Employer gives 1 unit cut. 
      2nd day: Takes back 1 unit cut from the employee given on the first day and gives a 2-unit cut. 
      3rd Day: Gives 1 unit, and then the employer is left with 4 unit rod lengths. 
      4th Day: Takes back cuts of 1 and 2 units. Gives a cut of 4 units. 
      5th Day: Gives a cut of 1 unit to the employee. 
      6th Day: Takes back a cut of 1 unit and gives a cut of 2 units. 
      7th Day: Gives a cut of 1 unit to the employee.`
    ],
    "2. 3 Bulbs and 3 Switches": [
      "There is a room with a door (closed) and three light bulbs inside the room. Outside the room, there are three switches, connected to the bulbs. You may manipulate the switches as you wish, but once you open the door you can’t change them. All bulbs are in working condition and you can open the door only once. Identify each switch with respect to its bulb.",

      "Solution:" +
      `Let the bulbs be X, Y, and Z 
      Turn on switch X for 5 to 10 minutes. Turn it off and turn on switch Y. Open the door and touch the light bulb. 
      1. the light is on from the bulb, it is Y 
      
      Now we will check the other two off bulbs 
      2. the bulb which is hot, is X 
      3. the bulb which is cold, is Z  `
    ],
    "3. Camel and Banana Puzzle": [
      "A person has 3000 bananas and a camel. The person wants to transport the maximum number of bananas to a destination which is 1000 KMs away, using only the camel as a mode of transportation. The camel cannot carry more than 1000 bananas at a time and eats a banana every km it travels. What is the maximum number of bananas that can be transferred to the destination using only camel (no other mode of transportation is allowed). ",

      "Solution:" +
      `Let’s see what we can infer from the question:

      We have a total of 3000 bananas.
      The destination is 1000KMs
      Only 1 mode of transport.
      Camel can carry a maximum of 1000 banana at a time.
      Camel eats a banana every km it travels.`
    ]
  };

  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [expandedPuzzle, setExpandedPuzzle] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Adjust this value as needed
      const topOffset = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };


  return (
    <div>
      <div className='nav'><Studnav/></div>
      <div className="questhead">
        <h1>Placement / Internship Prep</h1>
        <p>Welcome to our comprehensive guide for company placements, where you'll find a wealth of resources, strategies, and practice questions to help you ace your interviews and land your dream opportunity.</p>
        {/* Buttons to scroll to sections */}
        <div className="section_buttons">
          <button className='sb' onClick={() => scrollToSection("overview")}>Overview</button>
          <button className='sb' onClick={() => scrollToSection("questions")}>Coding Questions</button>
          <button className='sb' onClick={() => scrollToSection("puzzles")}>Puzzles</button>
          <button className='sb' onClick={() => scrollToSection("testimonial")}>Interview Experience</button>
        </div>
      </div>
      <div className="section-overview" id="overview">
        <div class="over-container">
          <div class="item">
            <div class="number">15</div>
            <div class="label">Coding Questions</div>
          </div>
          <div class="item">
            <div class="number">10</div>
            <div class="label">Puzzles</div>
          </div>
          <div class="item">
            <div class="number">8</div>
            <div class="label">Contributors</div>
          </div>
          <div class="item">
            <div class="number">50+</div>
            <div class="label">Problems</div>
          </div>
        </div>
      </div>
      
      <div className="section-questions" id="questions">
        <hr />
        <h2>Coding Questions</h2>
        <div className="questions-container">
          <div className="topics-container">
            {Object.keys(questionanswer).map(topic => (
              <div key={topic} className="topic">
                <div className="topic-header" onClick={() => setExpandedQuestion(expandedQuestion === topic ? null : topic)}>
                  {topic}
                  <i className={`fas fa-chevron-${expandedQuestion === topic ? 'up' : 'down'} chevron ${expandedQuestion === topic ? 'rotated' : ''}`}></i>
                </div>
                {expandedQuestion === topic && (
                  <div className="questions-list">
                    {questionanswer[topic].map((question, index) => (
                      <div key={index} className="question">{question}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="section-puzzles" id="puzzles">
        <h2>Puzzles</h2>
        <div className="puzzle-container">
          <div className="puzzles-container">
            {Object.keys(puzzles).map(puzzle => (
              <div key={puzzle} className="puzzle">
                <div className="puzzle-header" onClick={() => setExpandedPuzzle(expandedPuzzle === puzzle ? null : puzzle)}>
                  {puzzle}
                  <i className={`fas fa-chevron-${expandedPuzzle === puzzle ? 'up' : 'down'} chevron ${expandedPuzzle === puzzle ? 'rotated' : ''}`}></i>
                </div>
                {expandedPuzzle === puzzle && (
                  <div className="puzzle-answer">{puzzles[puzzle].map((answer, index) => <div key={index} className="solution">{answer}</div>)}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="section-experiences" id="testimonial">
        <h2>Interview Experiences</h2>
        <div className="experience-container">
          <Expcards />
          <Expcards />
          <Expcards />
          <Expcards />
          <Expcards />
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
