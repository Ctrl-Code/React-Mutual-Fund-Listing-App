import styled from "styled-components";

const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    padding: 5vh 0;
    align-items: center;
`;

const InputField = styled.input`
    outline: none;
    border: 1px solid #c1bdbdde;
    border-radius: 5px;
    height: 50px;
    padding: 0 10px;
`;

const exportObject = {
    styled,
    FullPage,
    InputField,
}

export default exportObject;