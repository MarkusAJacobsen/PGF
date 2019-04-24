
const PGC_URL = "http://guarded-island-59755.herokuapp.com";

export function sendLoginDataToPGC(userid, authMethod) {
    let fullAddress = PGC_URL + "/user";

    const data = {
        idToken: userid,
        name: "PLACEHOLDER",
        origin: authMethod
    }

    return fetch(fullAddress, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })        .then(response => response.text())
    .then(responseJson => responseJson);
}

