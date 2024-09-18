import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;
    height: 8rem;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    justify-content: space-between;

    padding: 0 8.0rem;

    @media(max-width: 950px){
        padding: 0 .8rem;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

  > img {
    width: 8.0rem;
    height: 5.6rem,;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem,;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem,;
      color: ${({ theme }) => theme.COLORS.GRAY};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    @media(max-width: 950px){
        span{
            font-size: 1.2rem;
        }
        strong{
            font-size: 1.5rem;
        }
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media(max-width: 950px){
    > svg { 
        font-size: 3rem;
        margin-right: 1rem;;
        color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`