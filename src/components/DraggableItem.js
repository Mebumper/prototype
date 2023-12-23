import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableItem = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
          }}
          className='text-xs px-5 py-2 w-[344px] h-[48px] top-0 left-0 bg-white rounded-[12px] shadow-[0px_4px_8px_#00000020] text-stone-600 font["inter"] font-bold'>
          {item.content}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
