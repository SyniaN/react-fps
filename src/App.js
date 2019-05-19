import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Block from './lib/Block';

function App() {
    return (
        <WrapperWrapper>
            <Wrapper>
                <Block />
            </Wrapper>
        </WrapperWrapper>
    );
}

export default App;

const Wrapper = styled.div`
    width: 100%px;
    margin: auto;
    perspective: 600px;
    background-color: transparent;
`;

const WrapperWrapper = styled.div`
    height: 1000px;
    background-color: grey;
    padding-top: 500px;
`;
