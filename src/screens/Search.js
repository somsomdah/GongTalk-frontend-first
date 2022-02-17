import styled from 'styled-components/native';
import { color } from '../themes/colors';
import InputBox from '../components/search/InputBox'
import KeywordBox from '../components/search/KeywordBox';

const Container = styled.View`
    background-color: ${color.white};
    padding: 26px 24px;
    flex: 1;
    align-items: stretch;
`;

const Search = () => {

    recentSearchKeywords = [
        { id: 1, content: '개발' },
        { id: 2, content: '부트캠프' }
    ];
    recommendedSearchKeywords = [
        { id: 1, content: '인턴' },
        { id: 2, content: '채용' },
        { id: 3, content: '취업' },
        { id: 4, content: '봉사' },
        { id: 5, content: '공모전' },
        { id: 6, content: '대외활동' },
        { id: 7, content: '장학' },
        { id: 8, content: '해외' },
    ];
    return (
        <Container>
            <InputBox />
            <KeywordBox title='최근 검색어' keywordList={recentSearchKeywords} />
            <KeywordBox title='추천 검색어' keywordList={recommendedSearchKeywords} />
        </Container>);
}

export default Search;