import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import HelpButton from './components/HelpButton';
import HelpText from './components/HelpModal';
import Item from './components/Item';
import Settings from './components/Settings';
import { generateMemory, Memory } from './utils';

const App: React.FC = () => {
  const [memory, setMemory] = useState<Memory>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [comparison, setComparison] = useState('?');
  const [numMoves, setNumMoves] = useState(0);
  const [numCompares, setNumCompares] = useState(0);
  const [hideValues, setHideValues] = useState(false);
  const [length, setLength] = useState(10);
  const [showHelp, setShowHelp] = useState(false);

  const onItemClick = (address: string) => {
    if (memory[address] == null) return;

    if (selected.includes(address) && selected.length == 1) {
      setSelected([]);
    } else if (selected.length >= 2) {
      setSelected([address]);
    } else {
      setSelected([...selected, address]);
    }
  };

  useEffect(() => {
    setMemory(generateMemory(length));
  }, [length]);

  useEffect(() => {
    if (selected.length != 2) return;
    const first = memory[selected[0]]!;
    const second = memory[selected[1]]!;
    if (first > second) {
      setComparison('>');
    } else if (first < second) {
      setComparison('<');
    } else {
      setComparison('==');
    }
    setNumCompares((c) => c + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      <HelpButton onClick={() => setShowHelp(!showHelp)} />
      <div className="flex flex-col items-center">
        <h1 className="mt-4 mb-12 text-3xl">sortsite</h1>
        <div className="flex gap-12 justify-between mb-6">
          <div className="whitespace-nowrap">
            <p>Moves: {numMoves}</p>
            <p>Comparisons: {numCompares}</p>
          </div>
          <Settings
            hideValues={hideValues}
            setHideValues={setHideValues}
            length={length}
            setLength={setLength}
          />
        </div>
        {showHelp && <HelpText />}
        <p className="mt-6 mb-3 text-xl text-center">
          {selected.length == 2 ? (
            <>
              {selected[0]} <span className="font-bold">{comparison}</span>{' '}
              {selected[1]}
            </>
          ) : (
            <span className="select-none">&nbsp;</span>
          )}
        </p>
        <DragDropContext
          onDragEnd={({ source, destination }) => {
            if (!destination) return;
            if (memory[destination.droppableId] != undefined) return;

            if (
              selected.includes(source.droppableId) ||
              selected.includes(destination.droppableId)
            ) {
              setSelected([]);
            }
            const val = memory[source.droppableId];
            setNumMoves(numMoves + 1);
            setMemory({
              ...memory,
              [source.droppableId]: null,
              [destination.droppableId]: val
            });
          }}
        >
          <div className="flex flex-wrap gap-2 justify-center items-start mb-5">
            <Item
              value={memory['tmp']}
              address="tmp"
              index={-1}
              onClick={onItemClick}
              selected={selected.includes('tmp')}
              hideValues={hideValues}
            />
            {Object.entries(memory)
              .slice(0, -1)
              .map(([address, value], idx) => {
                return (
                  <Item
                    value={value}
                    address={address}
                    key={idx}
                    index={idx}
                    onClick={onItemClick}
                    selected={selected.includes(address)}
                    hideValues={hideValues}
                  />
                );
              })}
          </div>
        </DragDropContext>
      </div>
    </>
  );
};

export default App;
