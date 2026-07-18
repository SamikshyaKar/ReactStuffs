import { useState } from 'react';
import MemberCard from './MemberCard';
import type { Member } from './types';

const initialMembers: Member[] = [
  { id: 1, name: 'Samikshya', role: 'Architect', onLeave: false, isLead: true,  projectCount: 3 },
  { id: 2, name: 'Ravi',      role: 'Developer', onLeave: true,  isLead: false, projectCount: 0 },
  { id: 3, name: 'Priya',     role: 'QA',        onLeave: false, isLead: false, projectCount: 2 },
];

export default function App() {
  const [team, setTeam] = useState(initialMembers);
  const [query, setQuery] = useState('');

  function toggleLeave(id: number) {
    setTeam(team.map((m) =>
      m.id === id ? { ...m, onLeave: !m.onLeave } : m
    ));
  }

  const visibleMembers = team.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>TeamHub</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search members..."
        style={{ padding: 6, marginBottom: 12, width: 240 }}
      />

      {visibleMembers.map((member) => (
        <MemberCard key={member.id} member={member} onToggleLeave={toggleLeave} />
      ))}

      {visibleMembers.length === 0 && <p>No members match "{query}"</p>}
    </>
  );
}