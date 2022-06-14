interface TickIconProps {
  size?: string | number;
  className?: string;
  fill1?: string;
  fill2?: string;
}

const TickIcon: React.FC<TickIconProps> = ({
  size = 48,
  fill1 = '#FC714F',
  fill2 = '#FAFAFA',
  className = '',
}: TickIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 49 49"
      fill="none"
      className={className}
    >
      <path
        d="M24.5 0C10.9902 0 0 10.9902 0 24.5C0 38.0098 10.9902 49 24.5 49C38.0098 49 49 38.0098 49 24.5C49 10.9902 38.0098 0 24.5 0Z"
        fill={fill1}
      />
      <path
        d="M36.9173 19.3081L23.6464 32.5787C23.2482 32.9768 22.7256 33.1772 22.203 33.1772C21.6803 33.1772 21.1577 32.9768 20.7596 32.5787L14.1243 25.9434C13.3258 25.1452 13.3258 23.8548 14.1243 23.0566C14.9224 22.2581 16.2126 22.2581 17.0111 23.0566L22.203 28.2485L34.0305 16.4213C34.8287 15.6228 36.1188 15.6228 36.9173 16.4213C37.7155 17.2195 37.7155 18.5096 36.9173 19.3081Z"
        fill={fill2}
      />
    </svg>
  );
};

export default TickIcon;
