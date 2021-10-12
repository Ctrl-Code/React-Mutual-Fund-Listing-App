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

const MutualFundListingApp = styled.div`

    margin-bottom: 15px;
    text-align: center;
    padding: 0 10px;

    ::after{
        color: rgb(75, 100, 193);
        font-weight: 900;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 28px;
        text-decoration: underline;
        content: "MUTUAL FUND LISTING APP";
    }
`;

const PageHeading = styled.div`
    color: rgb(126 216 221);
    font-weight: 500;
    font-family: Verdana,Geneva,Tahoma,sans-serif;
    font-size: 22px;
    margin-bottom: 10px;
    text-align: center;
    padding: 0 20px;
`;

const MarginedDiv = styled.div`
    height: ${props => props.height};
`;

const SubHeading = styled.div`
    color: #d59373;
    font-family: Verdana,Geneva,Tahoma,sans-serif;
    font-size: 18px;
    text-align: center;
    padding: 0 10px;
`;

const TextFieldContainer = styled.div`
    width: 300px;
`;

const exportObject = {
    styled,
    FullPage,
    InputField,
    SubHeading,
    PageHeading,
    MutualFundListingApp,
    MarginedDiv,
    TextFieldContainer,
}

export default exportObject;