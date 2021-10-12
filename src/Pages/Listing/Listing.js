import React, { useState } from "react";
import StyledComponents from "../../Components/StyledComponents";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RowWrapper = StyledComponents.styled.div`
    background-color: #bcdff3;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
    border: 2px solid orange;
    margin-bottom: 20px;
    width: 300px;
    cursor: pointer;
    transition: transform 222ms;

    :hover{
        transform: scale(1.08);
    }
`;

const FundName = StyledComponents.styled.div`
    font-family: "sans-serif";
    font-weight: 900;
`;

const SchemeName = StyledComponents.styled.div`
    font-family: "sans-serif";
`;

const StyledSearchAndEditUserContainer = StyledComponents.styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

const StyledUsername = StyledComponents.styled.div`
    overflow: hidden;
    width: 72px;
    font-family: monospace, "sans-serif";
    font-size: 15px;
    text-decoration: unset;
    transition: text-decoration 250ms;
    transition: font-size 250ms;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    :hover{
        text-decoration: underline;
    }
`;

const EditUser = connect(
    state => ({
        name: state.signup.name,
        email: state.signup.email,
    }), null
)
    (({ name, email }) => {

        const [showEditPage, setShowEditPage] = useState(false);

        const displayText = name.length > 0 ?
            name :
            email.slice(0, email.indexOf('@'));

        if (showEditPage) {
            localStorage.setItem('edit', "true");
            return <Redirect push to="/edit" />
        }

        return <StyledUsername onClick={() => setShowEditPage(true)}>
            {displayText}
        </StyledUsername>
    })

const MutualFunds = [
    {
        url: "https://api.mfapi.in/mf/100263",
        name: "Kotak Mahindra Mutual Fund",
        scheme: "Kotak Gilt-Savings-Annual Dividend",
    },
    {
        url: "https://api.mfapi.in/mf/100952",
        name: "ICICI Prudential Mutual Fund",
        scheme: "ICICI Prudential MIP - Growth",
    },
    {
        url: "https://api.mfapi.in/mf/108410",
        name: "Reliance Mutual Fund",
        scheme: "R * Shares Banking ETF -Dividend Payout Option",
    },
    {
        url: "https://api.mfapi.in/mf/101206",
        name: "SBI Mutual Fund",
        scheme: "SBI OVERNIGHT FUND - REGULAR PLAN - GROWTH",
    },
    {
        url: "https://api.mfapi.in/mf/102508",
        name: "SBI Mutual Fund",
        scheme: "SBI Magnum Income Fund - F R P - Long Term - Inst. (D)",
    }
];

const Listing = () => {

    const [activeMutualFundIndex, setActiveMutualFundIndex] = useState(-1);
    const [redirect, setRedirection] = useState(false);

    const onClick = (index) => {
        setActiveMutualFundIndex(index);
        setRedirection(true);
    }

    if (redirect)
        return <Redirect push to={{
            pathname: "/details",
            state: {
                mutualFundUrl: MutualFunds[activeMutualFundIndex].url,
            }
        }} />

    else
        return (
            <StyledComponents.FullPage>

                <StyledComponents.MutualFundListingApp />

                <StyledSearchAndEditUserContainer>
                    <StyledComponents.PageHeading>
                        List
                    </StyledComponents.PageHeading>
                    <EditUser />
                </StyledSearchAndEditUserContainer>

                <div>
                    {
                        MutualFunds.map((option, index) => (
                            <RowWrapper key={option.url}
                                onClick={() => onClick(index)}>
                                <FundName>
                                    {option.name}
                                </FundName>
                                <SchemeName>
                                    {option.scheme}
                                </SchemeName>
                            </RowWrapper>
                        ))
                    }
                </div>

            </StyledComponents.FullPage >
        );
}

export default Listing;