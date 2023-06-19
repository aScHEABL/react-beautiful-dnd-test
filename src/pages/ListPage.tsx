import React from 'react';
import { Grid, Text, Flex } from '@mantine/core';
import { DndListHandle } from '../components/DragAndDropList';

const elements = [
    {
        position: 37,
        mass: 50,
        symbol: "BR",
        name: "bronze"
    },
    {
        position: 23,
        mass: 50,
        symbol: "FA",
        name: "Vanadium"
    },
    {
        position: 10,
        mass: 20,
        symbol: "NE",
        name: "Neon"
    },
    {
        position: 34,
        mass: 78,
        symbol: "SE",
        name: "Selenium"
    }

  ]

export default function List() {
    return (
        <Flex justify="center" align="center" wrap="wrap"
        style={{
            height: "100vh"
        }}>
            <DndListHandle data={elements} />
        </Flex>
    )
}