type Member = {
  id: number;
  name: string;
  role: string;
  onLeave: boolean;
  isLead: boolean;
  projectCount: number;
};

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginBottom: 8 }}>
      <h3>
        {member.name} {member.isLead && '⭐'}
      </h3>
      <p>{member.role}</p>

      {member.onLeave ? (
        <p style={{ color: 'orange' }}>On leave</p>
      ) : (
        <p style={{ color: 'green' }}>Available</p>
      )}

      <p>Projects: {member.projectCount}</p>
    </div>
  );
}