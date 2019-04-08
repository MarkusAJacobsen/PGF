
const PGC_URL = "http://localhost:5555";

export function sendLoginDataToPGC(userid, authMethod) {
    let fullAddress = PGC_URL + "/user";

    const data = {
        idToken: userid,
        name: "PLACEHOLDER",
        origin: authMethod
    }

    console.log(JSON.stringify(data));

    return fetch(PGC_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })        .then(response => response.json())
    .then(responseJson => responseJson);
}

