function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 13.75l7.5-7.5M6.25 6.25h7.5v7.5"
        stroke="#022C22"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export { ArrowUpRight };
