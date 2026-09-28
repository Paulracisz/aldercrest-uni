type CrestProps = {
  className?: string
}

/** The Aldercrest shield: a ridge line rising to three alder leaves over an open book. */
export default function Crest({ className }: CrestProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Aldercrest University crest"
    >
      <path
        d="M32 4 L58 14 V30 C58 46 47 56 32 60 C17 56 6 46 6 30 V14 Z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M32 4 L58 14 V30 C58 46 47 56 32 60 C17 56 6 46 6 30 V14 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 40 C18 40 26 34 32 40 C38 34 46 40 46 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 14 V38 M32 18 L24 24 M32 22 L40 28 M32 26 L25 31"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
