import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  input, textarea {
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
  }

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  textarea {
    resize: none;
  }
`;
