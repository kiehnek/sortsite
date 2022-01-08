interface Props {
  onClick: () => void;
}
const HelpButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 w-8 h-8 text-xl active:bg-nord1 rounded-full border-2 border-nord2 hover:border-nord3"
  >
    ?
  </button>
);

export default HelpButton;
