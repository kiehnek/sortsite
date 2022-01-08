import { Draggable, Droppable } from 'react-beautiful-dnd';
import { classNames } from '../utils';

interface Props {
  address: string;
  index: number;
  value: number | null;
  hideValues: boolean;
  selected?: boolean;
  onClick: (address: string) => void;
}

const Item: React.FC<Props> = ({
  address,
  index,
  value,
  selected,
  hideValues,
  onClick
}) => (
  <>
    <Droppable droppableId={address} isDropDisabled={value != undefined}>
      {(provided, snapshot) => (
        <div
          className={classNames(
            'inline-flex flex-col items-center py-3 px-1 w-20 text-center rounded cursor-pointer',
            ' hover:border-nord3',
            snapshot.isDraggingOver ? 'bg-nord1' : 'bg-nord0',
            selected ? 'border-nord3 border-2' : 'border border-nord2'
          )}
          onClick={() => {
            onClick(address);
          }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div
            className={classNames(
              'w-full h-10 border-b border-nord2',
              selected && 'border-nord3 border-b-2'
            )}
          >
            <Draggable draggableId={address} index={index}>
              {(provided) => (
                <p
                  onClick={() => onClick(address)}
                  className="text-2xl font-bold"
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                >
                  {value != null && hideValues ? '?' : value}
                </p>
              )}
            </Draggable>
          </div>
          <p className="pt-2">{address}</p>
        </div>
      )}
    </Droppable>
  </>
);

export default Item;
