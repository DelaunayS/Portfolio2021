import React from 'react';
import {Container} from 'react-bootstrap'
import useWindowDimensions from './useWindowDimensions';
import '../Board/board.scss'

import Line1 from './line1'
import Line2 from './line2';
import Line3 from './line3';
import Line4 from './line4'
import Line5 from './line5';
import Line6 from './line6';
import Line7 from './line7';
import Line8 from './line8';

const Board = () => {
    const { height, width } = useWindowDimensions()

    let dimensionBoard

    if (height>=width) {
        dimensionBoard=Math.round(width*0.8/8)*8        
    }else{
        dimensionBoard=Math.round(width*0.8/8)*8        
    }
    const styleBoard={
        height:{dimensionBoard},
        width:{dimensionBoard}
    }

    let taillePolice= `${Math.round(dimensionBoard/45)}px`   
    let taillePoliceIconeSeul= `${Math.round(dimensionBoard/15)}px`   
    
    const styleFont={
        fontSize: `${taillePolice}`
    }
    
    const styleFontIconeSeul={
        fontSize: `${taillePoliceIconeSeul}`
    }
    
    return (
        <Container id="board" style={styleBoard}>
            <Line1 dimensionBoard={dimensionBoard} styleFont={styleFont} styleFontIconeSeul={styleFontIconeSeul} />
            <Line2 dimensionBoard={dimensionBoard} styleFont={styleFont} styleFontIconeSeul={styleFontIconeSeul} />
            <Line3 dimensionBoard={dimensionBoard} styleFont={styleFont} styleFontIconeSeul={styleFontIconeSeul} />
            <Line4 dimensionBoard={dimensionBoard} styleFont={styleFont} styleFontIconeSeul={styleFontIconeSeul}/>
            <Line5 dimensionBoard={dimensionBoard} styleFont={styleFont} styleFontIconeSeul={styleFontIconeSeul}/>
            <Line6 dimensionBoard={dimensionBoard} styleFont={styleFont} styleFontIconeSeul={styleFontIconeSeul}/>
            <Line7/>
            <Line8/>
        </Container>
    );
}

export default Board;