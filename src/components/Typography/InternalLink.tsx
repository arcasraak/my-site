import clsx from 'clsx';
import Link from 'next/link';

import { useAnchorClassName } from './hooks/useAnchorClassName';

interface Props {
  href: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children?: React.ReactNode;
  isNotFancy?: boolean; // Disables the box-shadow highlight effect on hover/focus
}

export const InternalLink: React.FC<Props> = ({
  href,
  children,
  className,
  onClick,
  isNotFancy = false,
  ...rest
}) => {
  const baseClass = useAnchorClassName();

  return (
    <Link
      href={href}
      className={clsx('not-prose', { [baseClass]: !isNotFancy }, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
};
