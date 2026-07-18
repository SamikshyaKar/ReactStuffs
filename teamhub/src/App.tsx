import MemberCard from './MemberCard';
import type { Member } from './types';

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
