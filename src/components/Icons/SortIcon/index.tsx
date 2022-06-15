interface SortIconProps {
  size?: string | number;
  className?: string;
  fill?: string;
}

const SortIcon: React.FC<SortIconProps> = ({
  size = 16,
  fill = '#666666',
  className = '',
}: SortIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2 8.66667H10V7.33333H2V8.66667ZM2 4V5.33333H14V4H2ZM2 12H6V10.6667H2V12Z"
        fill={fill}
      />
    </svg>
  );
};

export default SortIcon;
