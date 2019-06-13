import { PGCRequestList, PGCTypeConsts } from "./";

const PGC_URL = "https://guarded-island-59755.herokuapp.com"; // Heroku deployment
//const PGC_URL = "http://localhost:5555"; // For local testing

// Written by Maciej Piatkowski, partially imported from his summer 2018 project

// Appends parameters to the address field
function paramToAddress(type, params, address) {
    let fullAddress = address;
    
    // Go through all params
    for (let i = 0; i < params.length; i += 1) {
        // If the key is not a SKIP_KEY, add key and value to extra
        if (type.paramList[i] !== PGCTypeConsts.SKIP_KEY) {
            fullAddress += `?${type.paramList[i]}=${params[i]}`;
        } else {
            // If key is SKIP_KEY, add just value directly to address
            fullAddress += params[i];
        }
    }

    // Return new address to caller
    return fullAddress;
}

function paramToJsonString(type, params) {
    // Process params into proper string for request body
    let preparedParams = null;
    if (params.length > 0) {
        // Initialize string with opening curly brace
        preparedParams = "{";

        // For all parameters
        for (let i = 0; i < params.length; i += 1) {
            // If not first item, add a comma
            if (i > 0) {
                preparedParams += ",";
            }

            // Add type of parameter, and parameter value
            if (Array.isArray(params[i]) || (type.address[0] == "/project" && type.paramList[i] == "project")) {
                preparedParams += `"${type.paramList[i]}":${JSON.stringify(params[i])}`;
            } else {
                preparedParams += `"${type.paramList[i]}":"${params[i]}"`;
            }
        }

        // At the end, close the curly brace
        preparedParams += "}";
    }
    return preparedParams;
}

// Common code for POST requests
function pgcPost(type, params, address) {
    let preparedParams = paramToJsonString(type, params);
    
    console.log(address);
    // Send request
    return fetch(address, {
        method: PGCTypeConsts.POST,
        headers: {
            "Content-Type": "application/json",
        },
        body: preparedParams,
    })
        .then(response => response);
}

// Common code for PUT requests
function pgcPut(type, params, address) {
    let preparedParams = paramToJsonString(type, params);
    
    // Send request
    return fetch(address, {
        method: PGCTypeConsts.PUT,
        headers: {
            "Content-Type": "application/json",
        },
        body: preparedParams,
    })
        .then(response => response);
}

// Calling PGC with a DELETE request
function pgcDelete(type, params, address) {
    // Prepare the address, as the DELETE request inserts its params into address
    const finalAddress = paramToAddress(type, params, address);
    // Connect to server, fetch data, return to caller of PGCRequest the response
    return fetch(finalAddress, {
        method: PGCTypeConsts.DELETE,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response);
}

// Calling PGC with a GET request
function pgcGet(type, params, address) {
    // Prepare the address, as the GET request inserts its params into address
    const finalAddress = paramToAddress(type, params, address);
    console.log(finalAddress);
    // Connect to server, fetch data, return to caller of PGCRequest the response
    return fetch(finalAddress, {
        method: PGCTypeConsts.GET,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json());
}

/**
 * Entry-point for connecting to the PGC.
 * @param {PGCRequestList.{}} type path used
 * @param {[JSON array]} params ARRAY with values to be added as parameters. 
 * @param {[JSON array]} inAddressParams ARRAY with values to be added as parameters inside the address structure. 
 * Order in params should match the PGCRequestList object used in type
 */
const PGCRequest = (type, params, inAddressParams = null) => {
    let address = PGC_URL;
    if (type.address.length > 1) {
        for (let i = 0; i < type.address.length; i++) {
            address += type.address[i];
            if (inAddressParams[i] != undefined) {
                address += inAddressParams[i];
            }
        }
    } else {
        address += type.address;
    }

    if (type.type === PGCTypeConsts.GET) {
        return pgcGet(type, params, address);
    }
    if (type.type === PGCTypeConsts.POST) {
        return pgcPost(type, params, address);
    }
    if (type.type === PGCTypeConsts.DELETE) {
        return pgcDelete(type, params, address);
    }
    if (type.type === PGCTypeConsts.PUT) {
        return pgcPut(type, params, address);
    }

    return null;
};

export default PGCRequest;