import {hot} from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';
import Block from './lib/Block';
import Floor from './lib/Floor';
import s from './constant/boxSize';

function App() {
    return (
        <Background>
        <ViewPort>
            <Floor/>
            <Block rotation={0} translation={{x: 0, z:0}} offset={{x: 0, z:0}}/>
            <Block rotation={0} translation={{x: 3, z:0}} offset={{x: 0, z:0}}/>
        </ViewPort>
        </Background>
    );
}

export default hot(App);

const ViewPort = styled.div`
    height: 480px;
    width: ${s(4)}px;
    margin: auto;
    box-sizing:border-box;
    background-color: lightGrey;
    perspective: 500px;
    overflow: hidden;
`;

const Background = styled.div`
    width:100vw;
    height: 100vh;
    padding-top: 200px;
    background-color: black;
    box-sizing:border-box;
`
