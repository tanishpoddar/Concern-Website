import { cn } from "@/lib/utils";

const colors = [
  'text-[#347515]',
  'text-[#3c8616]',
  'text-[#479d1b]',
  'text-[#52b31c]',
  'text-[#5bca20]',
  'text-[#67df26]',
  'text-[#71ef31]',
];

export const ConcernLogo = ({ className }: { className?: string }) => (
  <div className={cn('flex font-bold', className)}>
    {'CONCERN'.split('').map((char, index) => (
      <span key={index} className={colors[index]}>
        {char}
      </span>
    ))}
  </div>
);

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);


export default Logo;
