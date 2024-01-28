// TODO: Do something with this later, yo. We'll keep everything in root until I decide on the actual stack for this.
// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const CounterThing = () =>{

//     const TimeIsComplicated = () => {
//       if(count === 1) {
//         return "time";
//       }
//       else{
//         return "times";
//       }
//     }

//     const TimeIsReallyComplicated = () => {
//       switch(true){
//         case (count <= 9):
//           return "";
//         case (count <= 20):
//           return(
//               <>
//                 <p>There is no reward for clicking this button more, aside from changing text.</p>
//               </>
//             );
//         case (count <= 30):
//           return(
//             <>
//               <p>I'll only be updating the text one more time.</p>
//             </>
//           );
//         case (count <= 100):
//           return(
//             <>
//               <p>Have a good day.</p>
//             </>
//           );
//         default:
//           return "";
//       }
//     }

//     return (
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           Made silly mistakes {count} <TimeIsComplicated/> while creating this site. <TimeIsReallyComplicated/>
//         </button>
//       </div>
//     )
//   }

//   return (
//     <>
//       <p className="main-title">
//         Coming in 2023. Honest.
//       </p>
//       <CounterThing />
//       <p className="ugly-gray-text">
//         Click clack.
//       </p>
//     </>
//   )
// }

// export default App
