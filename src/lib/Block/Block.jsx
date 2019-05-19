import React from 'react';
import Wall from '../Wall';
import styled from 'styled-components';

function Block() {
    return (
        <Wrapper>
            <Wall1 />
            <Wall2 />
            <Wall3 />
            <Wall4 />
        </Wrapper>
    );
}

export default Block;

const Wrapper = styled.div`
    position: relative;
    transform-style: preserve-3d;
`;

const Wall1 = styled(Wall)`
    transform: rotateY(0deg) translateZ(250px);
`;

const Wall2 = styled(Wall)`
    transform: rotateY(90deg) translateZ(250px);
`;

const Wall3 = styled(Wall)`
    transform: rotateY(180deg) translateZ(250px);
`;

const Wall4 = styled(Wall)`
    transform: rotateY(270deg) translateZ(250px);
`;
