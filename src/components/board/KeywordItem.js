import { Pressable } from "react-native";
import styled from "styled-components/native";
import { color } from '../../common/colors'
import { SemiHeadline3, SemiHeadline4, SemiHeadline5 } from "../_common/Typography";
import { useState } from "react";
import AlarmTypeModal from "./AlarmTypeModal";
import { View } from "react-native";


const Container = styled.View` 
    background-color: ${color.white};
    padding: 16px;
    flex-direction: column;
    align-items: stretch;
    border: 0.5px solid ${color.gray3};
    border-radius: 12px;
    margin-bottom: 12px;
`;

const UpperContainer = styled.View`
    padding-bottom: 12px;
    border-bottom-color: ${color.gray3};
    border-bottom-width: 0.5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LowerContainer = styled.View`
    padding-top: 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;



const Item = ({ subscribe, navigation, setModalVisible  }) => {

    const isBoardAlarm = subscribe.type === 'BOARD';
    const isCmnKwdAlarm = subscribe.type === 'CKEYWORD';

    return (
        <Container>
            <UpperContainer>
                <SemiHeadline3>
                    {subscribe.board ? `${subscribe.board.school.name} ${subscribe.board.name}` : '전체 키워드'}
                </SemiHeadline3>
                {isCmnKwdAlarm ?
                    <View />
                    :
                    <Pressable onPress={() => setModalVisible(true)} hitSlop={10}>
                        <SemiHeadline4>
                            {isBoardAlarm ? '전체' : '키워드'}
                        </SemiHeadline4>
                    </Pressable>
                }
            </UpperContainer>
            <LowerContainer>
                <SemiHeadline4 style={{ color: color.primary }}>
                    {Object.values(subscribe.keywords).map(keyword => `${keyword.content}, `)}
                </SemiHeadline4>
                <Pressable onPress={() => { isBoardAlarm ? null : navigation.navigate('addKeyword') }} hitSlop={10}>
                    <SemiHeadline4 style={{ color: isBoardAlarm ? color.gray4 : color.black }}>
                        {'설정'}
                    </SemiHeadline4>
                </Pressable>
            </LowerContainer>

        </Container>
    );
}


export default Item