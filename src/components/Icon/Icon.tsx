interface IconProps {
  id: string;
  className?: string;
}

export default function Icon({ id, className }: IconProps) {
  return (
    <svg className={className}>
      <use href={`/img/sprite.svg#${id}`} />
    </svg>
  );
}
