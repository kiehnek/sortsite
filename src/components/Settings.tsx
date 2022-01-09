import { Dispatch, SetStateAction } from 'react';
import Check from './Check';

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
      <Check
        checked={hideValues}
        onChange={() => setHideValues(!hideValues)}
        text="Hide Values"
      />
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
    <button
      onClick={() => onReset()}
      className="px-1 bg-nord1 active:bg-nord3 rounded"
    >
      Reset
    </button>
  </div>
);

export default Settings;
