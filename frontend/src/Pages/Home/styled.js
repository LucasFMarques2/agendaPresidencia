import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Agenda = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row; 
  }
  
  #cards {
    width: 90%;
    margin-top: 2rem;
  
    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-left: 1.4rem;
      margin-top: 2rem;
    }

    @media (min-width: 950px) {
      margin-left: 2rem;
      width: 80%; 
    }
  }
`

export const Menu = styled.aside`
  padding: 1.5rem;
  margin-right: 0;
  @media (min-width: 768px) {
    width: 25%;
    margin-right: 3rem;
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme.COLORS.BLACK};
  width: 100%;
  max-width: 400px; 
  margin: 0 auto;

  h2 {
    margin-bottom: 1rem;
    text-align: center; 
  }

  textarea, input {
    padding: 0.8rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 6px;
    border: none;
    width: 100%;
    box-sizing: border-box; 
  }

  @media (min-width: 768px) {
    padding: 2rem;
    max-width: 100%; 
  }
`

export const HamburgerMenu = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.5rem;
  margin: 1rem;

  @media (min-width: 768px) {
    display: none; 
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.COLORS.BLACK};
  padding: 2rem;
  border-radius: 10px;
  width: 90%; 

  @media (min-width: 768px) {
    width: 500px;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    margin-bottom: 1rem;
  }
`

export const InfoBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

export const ColorLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-right: 1rem;

  span {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`
