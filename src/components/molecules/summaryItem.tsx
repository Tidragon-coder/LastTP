type SummaryItemProps = {
  label: string;
  targetId: string;
};

export default function SummaryItem({ label, targetId }: SummaryItemProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      onClick={handleClick}
      className="cursor-pointer text-sm hover:text-primary-400 transition-colors"
    >
      {label}
    </li>
  );
}
