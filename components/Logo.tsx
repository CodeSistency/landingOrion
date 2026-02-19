import { Link } from '@/i18n/navigation';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <Link
      href="/"
      className={`font-sans font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity ${sizeClasses[size]} ${className}`}
    >
      orion<span className="text-muted-foreground/60 font-medium">.dev</span>
    </Link>
  );
}
