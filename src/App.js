import {hot} from 'react-hot-loader/root';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Block from './lib/Block';
import Floor from './lib/Floor';
import s from './constant/boxSize';

function App() {
    const initialPositions = [
        {x: 1.44, z:0},
        {x: 2.56, z:0},
        {x:1.45, z:3},
        {x:2.56, z:3},
        {x: 1.44, z:-3},
        {x: 2.56, z:-3},
    ]
    const [po, setPosition] = useState({x:0, z:0});
    const [r, setRotation] = useState(0);
    useEffect(()=>console.log(po), [po]);

    return (
        <Background>
        <button onClick={()=>setPosition({x:0, z:2})}>move</button>
        <button onClick={()=>setRotation(180)}>rotate</button>
        <button onClick={()=>setRotation(0)}>rotate</button>


        <ViewPort>
            <div>
            {
                initialPositions.map(p1 => (
                    <Block rotation={r} translation={{x:p1.x+po.x, z:p1.z+po.z}} offset={{x:(s(2.5)-s(p1.x)), y: 0, z: (s(3.325)-s(p1.z))}}/>
                ))
            }
            </div>
        </ViewPort>
        </Background>
    );
}

export default hot(App);

const ViewPort = styled.div`
    height: 480px;
    width: ${s(5)}px;
    margin: auto;
    box-sizing:border-box;
    background-color: lightGrey;
    perspective: 1000px;
    overflow: hidden;
`;

const Background = styled.div`
    width:100vw;
    height: 100vh;
    padding-top: 5%;
    background-color: black;
    box-sizing:border-box;
`
