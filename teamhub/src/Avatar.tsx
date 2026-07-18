type AvatarProps = {
  name: string;
  size?: number;
};

export default function Avatar({ name, size = 40 }: AvatarProps) {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#334',
        color: 'white',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size / 2.5,
        marginRight: 8,
      }}
    >
      {initials}
    </div>
  );
}