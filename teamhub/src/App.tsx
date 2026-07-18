import { useState, useEffect } from 'react';
import MemberCard from './MemberCard';
import type { Member } from './types';
import { fetchMembers } from './api';

export default function App() {
  const [team, setTeam] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchMembers()
      .then((members) => setTeam(members))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function toggleLeave(id: number) {
    setTeam(team.map((m) =>
      m.id === id ? { ...m, onLeave: !m.onLeave } : m
    ));
  }

  const visibleMembers = team.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading team...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

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
