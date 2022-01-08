import { Dispatch, SetStateAction } from 'react';

interface Props {
  hideValues: boolean;
  setHideValues: Dispatch<SetStateAction<boolean>>;
  length: number;
  setLength: Dispatch<SetStateAction<number>>;
  onReset: () => void;
}

const Settings: React.FC<Props> = ({
  hideValues,
  setHideValues,
  length,
  setLength,
  onReset
}) => (
  <div>
    <div className="mb-1">
      <input
        type="number"
        pattern="[0-9]*"
        id="length"
        min="2"
        max="99"
        defaultValue={length}
        onChange={({ target: t }) => {
          !isNaN(t.valueAsNumber) &&
            setLength(Math.max(Math.min(t.valueAsNumber, 99), 2));
          t.value = t.value.replaceAll(/[^0-9]/g, '');
          if (t.value.length > 2) t.value = '99';
        }}
        className="px-0.5 mr-2 w-6 bg-nord1 rounded outline-none"
      />
      <label htmlFor="length">Length</label>
    </div>
    <label htmlFor={`hideval`} className="flex mb-1 cursor-pointer">
      <div className="inline-block relative mr-2 w-6 h-6 bg-nord1 active:bg-nord3 rounded">
        {hideValues && (
          <div className="absolute w-4 h-4 bg-nord3 rounded-sm translate-x-1/4 translate-y-1/4"></div>
        )}
      </div>

      <input
        className="hidden"
        type="checkbox"
        id={`hideval`}
        checked={hideValues}
        onChange={() => setHideValues(!hideValues)}
      />
      <span className="select-text">Hide Values</span>
    </label>
    <button onClick={() => onReset()} className="px-1 bg-nord1 rounded">
      Reset
    </button>
  </div>
);

export default Settings;
