import React from 'react';
import Wall from '../Wall';
import styled, {css} from 'styled-components';

import s from '../../constant/boxSize.js';

function Block({rotation, offset, translation}) {
    return (
        <Wrapper rotation={rotation} offset={offset} translation={translation}>
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
    box-sizing:border-box;
    transform-style: preserve-3d;
    transition: transform 5s;
    ${({translation, offset, rotation}) => css`
        transform: rotateY(${rotation}deg) translate3d(${s(translation.x)}px, 150px, ${s(translation.z)}px);
        transform-origin: ${s(offset.x)}px, 0, ${s(offset.z)}px;
    `}
`;

const Wall1 = styled(Wall)`
    transform: translateZ(-${s(0.5)}px) rotateY(0deg) ;
    transition: transform 5s;
`;

const Wall2 = styled(Wall)`
    transform: translateX(${s(0.5)}px) rotateY(90deg) ;
    transition: transform 5s;
`;

const Wall3 = styled(Wall)`
    transform: translateZ(${s(0.5)}px) rotateY(180deg) ;
    transition: transform 5s;
`;

const Wall4 = styled(Wall)`
    transform: translateX(-${s(0.5)}px) rotateY(270deg) ;
    transition: transform 5s;
`;
