import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import StyledComponents from "../../Components/StyledComponents";
import Actions from "../../Redux/Actions";

import NavChart from "./NavChart";

const MetaContainer = StyledComponents.styled.div`
    background-color: #bcdff3;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 10px;
    align-items: center;
    border: 2px solid orange;
`;

const MetaRow = StyledComponents.styled.div`
    display: flex;
    font-weight: 500;
    font-family: monospace;
    text-align: center;
    font-weight: ${props => props.fontWeight === "true" ? "900" : "200"
    };
    margin-bottom: ${props => props.marginBottom === "true" ? "5px" : "unset"
    };
`;

const FlexContainer = StyledComponents.styled.div`
    display: flex;
    justify-content: center;
`;

const ColumnedDiv = StyledComponents.styled.div`
    width: 50px;
`;

const Meta = props => {
    const {
        scheme_name: schemeName,
        scheme_type: schemeType,
        scheme_code: schemeCode,
        scheme_category: schemeCategory,
        fund_house: fundHouse,
    } = props.metaProp;

    const { loading } = props;

    if (loading)
        return <MetaContainer>
            <MetaRow marginBottom="true">Loading...</MetaRow>
            <MetaRow fontWeight="true"
                marginBottom="true">Loading...</MetaRow>
            <MetaRow marginBottom="true">Loading...</MetaRow>
            <MetaRow marginBottom="true"
                fontWeight="true">Loading...</MetaRow>
        </MetaContainer>

    return <MetaContainer>

        <MetaRow fontWeight="true">Fund House</MetaRow>
        <MetaRow marginBottom="true">{fundHouse}</MetaRow>

        <MetaRow fontWeight="true">Scheme Name</MetaRow>
        <MetaRow marginBottom="true">{schemeName}</MetaRow>

        <MetaRow fontWeight="true">Scheme Type</MetaRow>
        <MetaRow marginBottom="true">{schemeType}</MetaRow>

        <MetaRow fontWeight="true">Scheme Category</MetaRow>
        <MetaRow marginBottom="true">{schemeCategory}</MetaRow>

        <MetaRow fontWeight="true">Scheme Code</MetaRow>
        <MetaRow marginBottom="true">{schemeCode}</MetaRow>
    </MetaContainer>
};

const NavData = props => {

    if (props.loading)
        return <>

            <StyledComponents.MarginedDiv height="10px" />

            <MetaContainer>
                <FlexContainer>
                    <MetaRow fontWeight="true">StartDate</MetaRow>
                    <ColumnedDiv />
                    <MetaRow>Loading...</MetaRow>
                </FlexContainer>
                <FlexContainer>
                    <MetaRow fontWeight="true">EndDate</MetaRow>
                    <ColumnedDiv />
                    <MetaRow>Loading...</MetaRow>
                </FlexContainer>
            </MetaContainer>

            <StyledComponents.MarginedDiv height="50px" />

            <StyledComponents.SubHeading>
                Net Asset Value (NAV) throughout last 5 years
            </StyledComponents.SubHeading>

            <StyledComponents.MarginedDiv height="20px" />

            <MetaContainer>
                <MetaRow>Loading...</MetaRow>
            </MetaContainer>

            <StyledComponents.MarginedDiv height="10px" />

        </>
    else {

        const data = props.data;

        const startDate = data[data.length - 1].date;
        const endDate = data[0].date;

        return <>
            <StyledComponents.MarginedDiv height="10px" />
            <MetaContainer>
                <FlexContainer>
                    <MetaRow fontWeight="true">StartDate</MetaRow>
                    <ColumnedDiv />
                    <div>{startDate}</div>
                </FlexContainer>
                <FlexContainer>
                    <MetaRow fontWeight="true">EndDate</MetaRow>
                    <ColumnedDiv />
                    <div>{endDate}</div>
                </FlexContainer>
            </MetaContainer>

            <StyledComponents.MarginedDiv height="50px" />

            <StyledComponents.SubHeading>
                Net Asset Value (NAV) throughout last 5 years
            </StyledComponents.SubHeading>

            <StyledComponents.MarginedDiv height="10px" />

            <NavChart data={data} />
        </>
    }

}

function Details(props) {

    const { data, setApiData } = props;
    const [showLoader, setShowLoader] = useState(true);

    const url = props?.location?.state?.mutualFundUrl;

    useEffect(() => {
        fetch(url).then(res => res.json())
            .then(res => {
                console.log('the res is', res);
                setApiData(res);
                setShowLoader(false);
            })
    }, [url]);

    return <StyledComponents.FullPage>

        <StyledComponents.MutualFundListingApp />

        <StyledComponents.PageHeading>
            Details Page
        </StyledComponents.PageHeading>

        <Meta
            metaProp={data?.meta ?? {}}
            loading={showLoader}
        />
        <NavData
            data={data?.data ?? []}
            loading={showLoader}
        />
    </StyledComponents.FullPage>
}

const DetailsConnected = connect(state => {
    return {
        data: state.details.data,
    }
}, dispatch => {
    return {
        setApiData: (data) => dispatch(Actions.details.setApiData(data)),
    }
})(Details);

export default DetailsConnected;