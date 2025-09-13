import React,{ useEffect, useState } from "react";


function useCurrencyInfo(currency) {
const [data, setData] = useState(null);

useEffect(() => {
const curr = currency.toLowerCase();
fetch(`https://latest.currency-api.pages.dev/v1/currencies/${curr}.json`)
    .then((res) => res.json())
    .then((res) => {
        //console.log(res[curr]);
        
        return setData(res[curr])
    })
    .catch((err) => {
    console.error("Error fetching currency data:", err);
    setData(null);
    });
}, [currency]);

return data;
}

export default useCurrencyInfo;