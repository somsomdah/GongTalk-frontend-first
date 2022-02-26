import styled from 'styled-components/native';
import { SemiHeadline2 } from '../_common/Typography'
import { color } from '../../common/colors';
import { TouchableHighlight } from 'react-native';


const ItemBox = styled.View`
    padding: 12px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
`

const Item = ({ board, navigation, selectedBoardList, setSelectedBoardList }) => {

    const _onPress = () => {
        navigation.goBack()
        setSelectedBoardList([...selectedBoardList, board])
    }

    return (

        <TouchableHighlight
            activeOpacity={1}
            underlayColor={color.primaryLight}
            onPress={_onPress}>
            < ItemBox >
                <SemiHeadline2>{board.name}</SemiHeadline2>
            </ItemBox>
        </TouchableHighlight >

    )
}


export default Item;
