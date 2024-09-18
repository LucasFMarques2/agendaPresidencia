import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .agenda-card {
    margin: 1rem;
    flex: 1 1 300px;
    max-width: 300px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;
