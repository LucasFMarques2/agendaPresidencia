import styled from 'styled-components'
import backgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  position: relative;

  @media (max-width: 950px) {
    justify-content: center;
    align-items: center;
  }
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > img {
    width: 20rem;
  }

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }
  svg{
    color: ${({theme}) => theme.COLORS.GRAY}
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 90%;
    padding: 2rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 12px;
    position: absolute;
    z-index: 2;

    > img {
      width: 10rem;
    }

    > h1 {
      font-size: 32px;
    }

    > h2 {
      font-size: 18px;
      margin: 24px 0;
    }

    > p {
      font-size: 12px;
    }

    > a {
      margin-top: 64px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  filter: brightness(0.5);

  // Estilo para modo mobile
  @media (max-width: 950px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`
