
import Card from './Card';
import Badge from './Badge';
import Avatar from './Avatar';
import { Member } from './types';

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Card title={member.name}>
      <Avatar name={member.name} />
      <span>{member.role}</span>

      {member.isLead && <Badge label="Lead" />}
      {member.onLeave
        ? <Badge label="On leave" color="orange" />
        : <Badge label="Available" color="seagreen" />}

      {member.projectCount > 0 && <p>Projects: {member.projectCount}</p>}
    </Card>
  );
}