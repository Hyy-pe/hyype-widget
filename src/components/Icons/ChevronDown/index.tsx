interface ChevronDownProps {
  size: string | number;
  className?: string;
  fill?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({
  size = 10,
  className = '',
  fill = '#000000',
}: ChevronDownProps) => {
  return (
    <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 10 6" className={className}>
      <>
        <path
          fill={fill}
          d="M8.821 0L5 3.71 1.179 0 0 1.145 5 6 10 1.145z"
          transform="translate(-1348 -38) translate(-9) translate(1207 23) translate(150 15)"
        />
      </>
    </svg>
  );
};

export default ChevronDown;
