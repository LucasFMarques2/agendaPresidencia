import styled from 'styled-components'

export const Container = styled.button`
    border: none;
    border-radius: 6px;
    margin: 1rem;
    
    .card{
        border: 2px solid;
        background-color: #212529;
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 26rem;
        text-align: start;
        transition: .3s;
        #header{
            display: flex;
            align-items: center;
            background-color: #272B2F;
            border-bottom:1px solid ${({ theme }) => theme.COLORS.GRAY};
            
            >svg{
                    margin-right: .5rem;
            }
        }
        #title{
            font-size: 1.6rem;
            margin-bottom: .8rem;
        }
        p{
            font-size: 1.4rem;
        }

        footer{
            display: flex;
            flex-direction: column;
            
            font-size: 1.3rem;
            border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY};
           >div{
                margin-left: 1rem;
                padding: .3rem 0;
           }
        }
    }
    .card:hover {
        transform: scale(1.01);
    }

    

`