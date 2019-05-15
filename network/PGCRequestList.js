
// File with all available requests that can be done to PGC as constants

class PGCRequestRoute {
    constructor(type, address, paramList) {
        this.type = type;
        this.address = address;
        this.paramList = paramList;
    }
}

export const PGCTypeConsts = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
};

export const PGCRequestList = {
    // User requests
    // UserCreate
    USER_CREATE: new PGCRequestRoute(PGCTypeConsts.POST, ["/user"], [
        "idToken",
        "name",
        "origin",
    ]),
    // UserUpdate (for name change)
    // UserProjectsRead
    // UserProjectRead

    // Project requests
    // ProjectCreate
    // ProjectUpdate
    // ProjectDelete
};