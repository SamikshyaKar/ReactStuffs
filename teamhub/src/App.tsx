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

// const names=['samikshya','babu','nippo'];
// export default function App()
// {

//   return  (
//     <>
//     <h1>Samikshya</h1>
//     <ul>
//       {names.map((names)=>(
//         <li key={names}>{names}</li>
//       )     
      
//       )}
//     </ul>
//     </>


//   );
// }

import MemberCard from "./MemberCard";

type Member = {
  id: number;
  name: string;
  role: string;
  onLeave: boolean;
  isLead: boolean;
  projectCount: number;
};

const members: Member[] = [
  { id: 1, name: 'Samikshya', role: 'Architect', onLeave: false, isLead: true,  projectCount: 3 },
  { id: 2, name: 'Ravi',      role: 'Developer', onLeave: true,  isLead: false, projectCount: 0 },
  { id: 3, name: 'Priya',     role: 'QA',        onLeave: false, isLead: false, projectCount: 2 },
];


export default function App() {
  return (
    <>
      <h1>TeamHub</h1>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </>
  );
}
