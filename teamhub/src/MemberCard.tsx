import type { Member } from './types';
import Card from './Card';
import Badge from './Badge';
import Avatar from './Avatar';

type MemberCardProps = {
  member: Member;
  onToggleLeave: (id: number) => void;
};

export default function MemberCard({ member, onToggleLeave }: MemberCardProps) {
  return (
    <Card title={member.name}>
      <Avatar name={member.name} />
      <span>{member.role}</span>

      {member.isLead && <Badge label="Lead" />}

      {member.onLeave
        ? <Badge label="On leave" color="orange" />
        : <Badge label="Available" color="seagreen" />}

      {member.projectCount > 0 && <p>Projects: {member.projectCount}</p>}

      <div style={{ marginTop: 8 }}>
        <button onClick={() => onToggleLeave(member.id)}>
          {member.onLeave ? 'Mark available' : 'Mark on leave'}
        </button>
      </div>
    </Card>
  );
}