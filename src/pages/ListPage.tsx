import React, { useContext } from 'react';
import { Grid, Text, Flex } from '@mantine/core';
import { DndListHandle } from '../components/DragAndDropList';
import { AppContext } from '../AppContext';


export default function List() {
    const { state, dispatch } = useContext(AppContext);
    return (
        <Flex justify="center" align="center" wrap="wrap"
        style={{
            height: "100vh"
        }}>
            <DndListHandle data={state.tasks} />
        </Flex>
    )
}