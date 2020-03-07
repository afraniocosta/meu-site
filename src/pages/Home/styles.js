import styled from 'styled-components';

export const Title = styled.h2`
    font-size: ${props => `${props.fontSize}px`}; 
    font-weight: bold;
    text-transform: uppercase;

    span {
        color: gray;
    }

`;