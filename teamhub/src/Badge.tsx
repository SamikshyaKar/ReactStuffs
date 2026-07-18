
type BadgeProps = {
  label: string;
  color?: string;        // ? = optional prop
};

export default function Badge({ label, color = 'royalblue' }: BadgeProps) {
  return (
    <span
      style={{
        background: color,
        color: 'white',
        borderRadius: 12,
        padding: '2px 10px',
        fontSize: 12,
        marginLeft: 6,
      }}
    >
      {label}
    </span>
  );
}