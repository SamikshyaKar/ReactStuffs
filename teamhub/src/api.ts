import type { Member } from './types';

type ApiUser = {
  id: number;
  name: string;
  company: { bs: string };
};

export async function fetchMembers(): Promise<Member[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  const users: ApiUser[] = await res.json();

  return users.map((u) => ({
    id: u.id,
    name: u.name,
    role: u.company.bs,
    onLeave: u.id % 3 === 0,
    isLead: u.id === 1,
    projectCount: u.id % 4,
  }));
}
