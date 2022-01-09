interface Props {
  text: string;
  checked: boolean;
  onChange: () => void;
}

const Check: React.FC<Props> = ({ text, checked, onChange }) => (
  <label htmlFor={text} className="flex mb-1 cursor-pointer">
    <div className="inline-block relative mr-2 w-6 h-6 bg-nord1 active:bg-nord3 rounded">
      {checked && (
        <div className="absolute w-4 h-4 bg-nord3 rounded-sm translate-x-1/4 translate-y-1/4"></div>
      )}
    </div>

    <input
      className="hidden"
      type="checkbox"
      id={text}
      checked={checked}
      onChange={onChange}
    />
    <span className="select-text">{text}</span>
  </label>
);

export default Check;
