interface IconProps {
  size?: number;
  color?: string;
}

export function TrashIcon({
  size = 25,
  color = "#4f4943",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 7.25C27.1018 7.25 29.6299 9.70602 29.7458 12.7794L29.75 13H37C37.6904 13 38.25 13.5596 38.25 14.25C38.25 14.8972 37.7581 15.4295 37.1278 15.4935L37 15.5H35.909L34.2058 38.0698C34.0385 40.2867 32.191 42 29.9679 42H18.0321C15.809 42 13.9615 40.2867 13.7942 38.0698L12.09 15.5H11C10.3528 15.5 9.82047 15.0081 9.75645 14.3778L9.75 14.25C9.75 13.6028 10.2419 13.0705 10.8722 13.0065L11 13H18.25C18.25 9.82436 20.8244 7.25 24 7.25Z"
        fill={color}
      />
    </svg>
  );
}

export function InfoIcon({
  size = 25,
  color = "#8A7764",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="1.5"
      />

      <path
        d="M12 10V17"
        stroke={color}
        strokeWidth="1.5"
      />

      <circle
        cx="12"
        cy="7"
        r="1"
        fill={color}
      />
    </svg>
  );
}

export function StarIcon({
  size = 18,
  color = "#e6b24c",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
    >
      <path d="M12 2.8L14.82 8.52L21.13 9.44L16.57 13.89L17.65 20.17L12 17.2L6.35 20.17L7.43 13.89L2.87 9.44L9.18 8.52L12 2.8Z" />
    </svg>
  );
}