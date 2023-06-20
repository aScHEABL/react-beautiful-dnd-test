import React, { useState } from 'react';
import { Grid, Text, Flex, Box,
   MantineProvider } from '@mantine/core';
import { DragDropContext, Droppable, Draggable, } from '@hello-pangea/dnd';
import { v4 as uuid } from 'uuid';

const init_items = [
  { id: uuid(), content: "Read work emails" },
  { id: uuid(), content: "Take out the trash" },
  { id: uuid(), content: "File taxes" },
  { id: uuid(), content: "Workout" },
  { id: uuid(), content: "Call Amy" }
]

const init_columns = {
  [uuid()]: {
    name: "Todo",
    items: init_items
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Completed",
    items: []
  }
}

function App() {
  const [columns, setColumns] = useState(init_columns);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      })
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      })
    }
  }

  return (
    <MantineProvider theme={{ 
      // fontFamily: 'Open Sans',
      colorScheme: 'dark',
      }} withGlobalStyles withNormalizeCSS>
        <Flex justify="center" align="center" wrap="wrap" gap={4}
        style={{
            height: "100vh"
        }}>
            <DragDropContext onDragEnd={(result: any) => onDragEnd(result)}>
              {Object.entries(columns).map(([id, column]) => {
                return (
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <Box
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        sx={(theme) => ({
                          background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        })}>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => {
                                  return (
                                    <div ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging ? "#263b4A" : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                    >
                                      {item.content}
                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </Box>
                      )
                    }}
                  </Droppable>
                )
              })}
            </DragDropContext>
        </Flex>
    </MantineProvider>
  );
}

export default App;
