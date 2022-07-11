import styled from "styled-components";

const StyledModal = styled.div`
  /* ... */
  & .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  }

  & .modal {
    position: fixed;
    top: 30vh;
    left: 35%;
    width: 25%;
    z-index: 100;
    margin: auto;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.lightPrimary};
    border-radius: 0.5rem;
  }

  & .header {
    background: #d00004;
    padding: 1rem;
  }

  & .header h2 {
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
  }
  & button {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Permanent Marker", cursive;
  }
`;

export default StyledModal;
