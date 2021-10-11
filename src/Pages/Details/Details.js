import React, { useEffect, useState } from "react";
import StyledComponents from "../../Components/StyledComponents";

import NavChart from "./NavChart";

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
        return <div>
            <div>Loading...</div>
            <div>Loading...</div>
            <div>Loading...</div>
            <div>Loading...</div>
            <div>Loading...</div>
        </div>

    return <div>
        <div>{fundHouse}</div>
        <div>{schemeName}</div>
        <div>{schemeType}</div>
        <div>{schemeCategory}</div>
        <div>{schemeCode}</div>
    </div>
};

const NavData = props => {

    if (props.loading)
        return <div>
            <div>
                <div>StartDate</div>
                <div>Loading...</div>
            </div>
            <div>
                <div>EndDate</div>
                <div>Loading...</div>
            </div>

            <div>
                Net Asset Value (NAV) throughout last 10 years
            </div>

            Loading...
        </div>

    else {

        const data = props.data;

        const startDate = data[data.length - 1].date;
        const endDate = data[0].date;

        return <div>
            <div>
                <div>StartDate</div>
                <div>{startDate}</div>
            </div>
            <div>
                <div>EndDate</div>
                <div>{endDate}</div>
            </div>

            <div>
                Net Asset Value (NAV) throughout last 10 years
            </div>

            <NavChart data={data} />

        </div>

    }

}

function Details(props) {

    const [data, setData] = useState();
    const [showLoader, setShowLoader] = useState(true);

    const url = props?.location?.state?.mutualFundUrl;

    useEffect(() => {
        fetch(url).then(res => res.json())
            .then(res => {
                console.log('the res is', res);
                setData(res);
                setShowLoader(false);
            })
    }, [url]);

    return <StyledComponents.FullPage>
        Details Page
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

export default Details;