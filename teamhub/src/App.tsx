// const members = ['Samikshya', 'Ravi', 'Priya','Babu'];

// export default function App() {
//   return (
//     <>
//       <h1>TeamHub</h1>
//       <ul>
//         {members.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

const names=['samikshya','babu','nippo'];
export default function App()
{

  return  (
    <>
    <h1>Samikshya</h1>
    <ul>
      {names.map((names)=>(
        <li key={names}>{names}</li>
      )     
      
      )}
    </ul>
    </>


  );
}
