import styled from "styled-components";

const StyledModal = styled.div`
  /* ... */
  position: relative;
  top: 22vh;
  left: 0;
  max-width: 30rem;
  z-index: 100;
  margin: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  border-radius: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 50vw;
    min-width: 18rem;
    text-align: center;
  }
  & h2 {
    background: #d00004;
    padding: 1rem;
    margin: 0;
    color: white;
  }
  & .content {
    padding: 1rem;
    font-size: 1.3rem;
  }
  & .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    @media (max-width: ${({ theme }) => theme.screen.sm}) {
      justify-content: center;
    }
  }
  & button {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    margin: 1rem;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
export default StyledModal;
