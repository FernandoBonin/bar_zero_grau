import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  subtle?: boolean;
}

export default function OrnamentalDivider({
  className = '',
  subtle = false,
}: OrnamentalDividerProps) {
  return (
    <div
      className={`w-full flex items-center justify-center gap-3 py-4 ${
        subtle ? 'opacity-40' : 'opacity-70'
      } ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 max-w-[120px] h-[1px] bg-outline-variant/60" />
      <div className="flex items-center gap-1.5 text-primary">
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
        <span className="text-[10px] text-primary/70">❖</span>
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
      </div>
      <div className="flex-1 max-w-[120px] h-[1px] bg-outline-variant/60" />
    </div>
  );
}
