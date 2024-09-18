import styled from 'styled-components';

export const TabsContainer = styled.div`
  .nav-tabs {
    margin-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};

    .nav-link {
      color: ${({ theme }) => theme.COLORS.WHITE};
      &:hover {
        color: ${({ theme }) => theme.COLORS.YELLOW};
      }
      &.active {
        color: ${({ theme }) => theme.COLORS.YELLOW};
        border-color: ${({ theme }) => theme.COLORS.YELLOW};
      }
    }
  }
`;
