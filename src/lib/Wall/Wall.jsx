import styled from 'styled-components';
import s from '../../constant/boxSize';

const Wall = styled.div`
    position: absolute;
    height: ${s(1)}px;
    width: ${s(1)}px;
    background-color: rgba(255,255,255,0.7);
    border: 0.5px solid lightgrey;
    box-sizing: border-box;
`;

export default Wall;
