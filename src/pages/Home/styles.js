import styled from 'styled-components';
import { buttonStyleNormal } from './mixins'

export const Container = styled.div ``
export const Section = styled.div ``

const x = {
    'one': 'blue',
    'two': 'green',
    'three': 'red'
}

export const Title = styled.h2`
    font-size: ${props => `${props.fontSize}px`};
    font-weight: bold;
    text-transform: uppercase;
    background-color: ${props => x[props.numbers]};

    span {
        color: white;
    }

`;

export const Paragrafo = styled.p`
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => `${props.fontColor}`}
`;

export const Btn = styled.button`
    height: 32px;
    padding: 0 24px;
    font-size: 0.875rem;
    text-align: center;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${buttonStyleNormal('red', 'blue', 'green')}

`




// export const Title = styled.h2`
//     font-size: ${props => `${props.fontSize}px`};
//     background-color: ${props => props.theme.defaultTheme.gray};
//     background-color: ${props => props.bg};
// `;