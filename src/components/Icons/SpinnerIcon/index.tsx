interface ValidIconProps {
  size?: string | number;
  className?: string;
  fill?: string;
}

const SpinnerIcon: React.FC<ValidIconProps> = ({
  size = 32,
  className = '',
  fill = '#ffffff',
}: ValidIconProps) => {
  return (
    <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 50 50" className={className}>
      <>
        <circle cx="25" cy="25" r="20" fill="transparent" strokeWidth="5"></circle>
      </>
    </svg>
  );
};

export default SpinnerIcon;
