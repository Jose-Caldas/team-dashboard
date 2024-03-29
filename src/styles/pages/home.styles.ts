import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.menuBg};
`;

export const Wrapper = styled.div`
  max-width: ${(props) => props.theme.grid.container};
  background: #fff;

  margin: 0 auto;

  h1 {
    width: 100%;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font.sizes.huge};
  }
`;

export const Menu = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  max-width: ${(props) => props.theme.grid.container};
  padding: ${(props) => props.theme.spacings.small};

  margin: 0 auto;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const MenuMobile = styled.div`
  position: absolute;
  top: 3rem;
  right: 0.5rem;
`;

export const Logo = styled.img`
  width: 14.8rem;
  height: 4rem;
  margin-left: 0;
`;

export const LogoWhite = styled.img``;

export const Input = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: 14rem;
  border: 0.1rem solid #b0b0b0;
  width: 46rem;
  height: 4.8rem;
  border-radius: 3.2rem;
  padding: 0 ${(props) => props.theme.spacings.xsmall};

  ${media.between("medium", "large")`
    margin-left: 5rem;
    max-width: 30rem;

  `}

  ${media.lessThan("medium")`
    margin-left: 0;
    margin-top: 2rem;
    width: 100%;
  `}

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 3.2rem;
    margin-left: 1.4rem;
    outline: none;
    font-size: ${(props) => props.theme.font.sizes.medium};
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const Main = styled.main`
  display: flex;
  max-width: ${(props) => props.theme.grid.container};
  grid-gap: ${(props) => props.theme.spacings.xsmall};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacings.small};

  ${media.lessThan("large")`
 
  flex-direction: column;
  justify-content: center;
 
 `}
`;

export const Social = styled.div`
  color: #fff;
  a {
    margin-right: ${(props) => props.theme.spacings.xsmall};

    :last-child {
      margin-right: 0;
    }
    svg {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Title = styled.h1`
  width: 100%;
  display: flex;
  margin: 4rem auto;
  max-width: ${(props) => props.theme.grid.container};
  padding: 0 ${(props) => props.theme.spacings.small};
  font-size: 3.2rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.font.bold};

  ${media.lessThan("medium")`
    justify-content: center;
    margin: 2rem auto;
    text-align: center;
    font-size: 2.8rem;

  `}
`;

export const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.footerBg};
  color: white;
  padding-top: ${(props) => props.theme.spacings.medium};
  padding-bottom: ${(props) => props.theme.spacings.xlarge};

  h2 {
    margin-bottom: 2.4rem;
    margin-top: 2.4rem;
    font-size: ${(props) => props.theme.font.sizes.medium};
  }
  h3 {
    margin-bottom: 2rem;
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`;
