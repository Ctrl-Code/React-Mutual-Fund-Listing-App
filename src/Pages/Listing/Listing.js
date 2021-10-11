import React, { useState } from "react";
import StyledComponents from "../../Components/StyledComponents";

import { Redirect } from "react-router-dom";

const MutualFunds = [
    {
        url: "https://api.mfapi.in/mf/100875",
        name: "HDFC Mutual Fund",
        scheme: "HDFC Liquid Fund - IDCW Daily",
    },
    {
        url: "https://api.mfapi.in/mf/100952",
        name: "ICICI Prudential Mutual Fund",
        scheme: "ICICI Prudential MIP - Growth",
    },
    {
        url: "https://api.mfapi.in/mf/100589",
        name: "Canara Robeco Mutual Fund",
        scheme: "Canara Robeco Expo-Income Plan",
    },
    {
        url: "https://api.mfapi.in/mf/101206",
        name: "SBI Mutual Fund",
        scheme: "SBI OVERNIGHT FUND - REGULAR PLAN - GROWTH",
    },
    {
        url: "https://api.mfapi.in/mf/129956",
        name: "Aditya Birla Sun Life Mutual Fund",
        scheme: "Aditya Birla Sun Life Fixed Term Plan-Series LO (1142 days) - Direct Plan-Normal Dividend",
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
                <div>
                    Search Bar
                </div>
                <div>
                    {
                        MutualFunds.map((option, index) => (
                            <div key={option.url}
                                onClick={() => onClick(index)}
                            >
                                {option.name}
                            </div>
                        ))
                    }
                </div>
            </StyledComponents.FullPage>
        );
}

export default Listing;