import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Item from '../components/alarm/ScrapItem';
import { postList } from '../common/data';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
    padding: 0px 24px;
`;

const Scraps = () => {
    return (
        <Container>
            <FlatList showsVerticalScrollIndicator={false}
                data={postList}
                renderItem={({ item }) => <Item key={item.id} post={item} />}
            />
        </Container>
    )
}

export default Scraps;