import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginBottom: 8 }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}