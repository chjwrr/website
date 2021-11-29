import styled from "styled-components";


export const Text = styled.span<{
  fontSize?:number;
  fontColor?:string;
  fontWeight?:string;
  fontFamily?:string;
}>`
  font-size:${({ fontSize }) => `${fontSize ? fontSize : 10}px`};
  color:${({ fontColor }) => fontColor ?? 'white'};
  font-weight:${({ fontWeight }) => fontWeight ?? 'normal'};
  @media (max-width: 768px) {
    font-size:${({ fontSize }) => `${fontSize ? fontSize / 2 : 10}px`};
  };  
`

export const TextNormal = styled.span<{
  fontSize?:number;
  fontColor?:string;
  fontWeight?:string;
  fontFamily?:string;
}>`
  font-size:${({ fontSize }) => `${fontSize ? fontSize : 20}px`};
  color:${({ fontColor }) => fontColor ?? 'white'};
  font-weight:${({ fontWeight }) => fontWeight ?? 'normal'};
  @media (max-width: 768px) {
  };  
`