export default function AssaiLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="15" r="12" fill="currentColor" className="text-primary-foreground" />
          <path d="M8 20 L25 20 L42 20 C42 20 45 20 45 25 C45 30 42 30 42 30 L8 30 C8 30 5 30 5 25 C5 20 8 20 8 20 Z" fill="currentColor" className="text-primary-foreground" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight text-primary-foreground leading-none">ASSAÍ</span>
        <span className="text-xs font-medium text-primary-foreground/90 uppercase tracking-wider">ATACADISTA</span>
      </div>
    </div>
  );
}
