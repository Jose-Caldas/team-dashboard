import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  padding: ${(props) => props.theme.spacings.xsmall};
  border-radius: ${(props) => props.theme.border.radius};
  height: 6rem;
  margin-bottom: ${(props) => props.theme.spacings.xsmall};

  p {
    font-size: ${(props) => props.theme.font.sizes.medium};
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 50rem) {
    flex-direction: column;
    padding: 0.5rem;
    p {
      width: 100%;
      font-size: ${(props) => props.theme.font.sizes.xsmall};
      margin-bottom: ${(props) => props.theme.spacings.xsmall};
      text-align: end;
    }
    Select {
      width: 100%;
    }
  }
`;

export const Select = styled.select`
  width: 20rem;
  height: 35px;
  background: white;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font.sizes.small};

  border: none;

  option {
    color: ${(props) => props.theme.colors.text};
    background: white;
    display: flex;
    white-space: pre;
    min-height: 2rem;
    padding: 0 0.2rem 0.1rem;
  }
`;

export const Members = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
  grid-gap: 16px;
  padding-inline-start: 0;
  margin-bottom: 15rem;
`;

export const Items = styled.div`
  border: 1px solid #e5e5e5;
  height: 310px;
  border-radius: ${(props) => props.theme.border.radius};
`;