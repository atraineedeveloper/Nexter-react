import { imgUrl } from '../../utils/imgUrl';

interface IconProps {
  id: string;
  className?: string;
}

export default function Icon({ id, className }: IconProps) {
  return (
    <svg className={className}>
      <use href={`${imgUrl('img/sprite.svg')}#${id}`} />
    </svg>
  );
}
