import styled from "styled-components";
export const DateWrapper = styled.div`
  color: ${(props) => props.theme.colors.textGreyColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;

export const Hint = styled.ul`
  /* display: flex; */
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.textGreyColor};
`;
