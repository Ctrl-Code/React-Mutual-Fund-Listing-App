import React, { useState } from "react";
import StyledComponents from "../../Components/StyledComponents";

import { Redirect } from "react-router-dom";

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
]

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

                <StyledComponents.PageHeading>
                    Search Bar
                </StyledComponents.PageHeading>
                <div>
                    {
                        MutualFunds.map((option, index) => (
                            <div key={option.url}
                                onClick={() => onClick(index)}
                            >
                                <div>
                                    {index + 1}
                                    <div>
                                        {option.name}
                                    </div>
                                    <div>
                                        {option.scheme}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </StyledComponents.FullPage>
        );
}

export default Listing;