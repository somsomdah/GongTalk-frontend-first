import { NavigationContainer } from "@react-navigation/native";
import styled, { ThemeProvider } from "styled-components/native";
import OuterStackNavigation from "./navigations/OuterStack";
import { color } from './themes/colors';
import { image } from './themes/images';
import { font } from './themes/fonts';
import { StatusBar } from 'react-native';

const App = () => {
    return (
        <ThemeProvider theme={{ color: color, image: image, font: font }}>
            <Container>
                <StatusBar backgroundColor={color.white} barStyle='dark-content' />
                <NavigationContainer>
                    <OuterStackNavigation />
                </NavigationContainer>
            </Container>
        </ThemeProvider>
    );
};

const Container = styled.View`
    background-color: ${color.white};
    flex: 1;
`;

export default App;