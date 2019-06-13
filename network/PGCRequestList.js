
// File with all available requests that can be done to PGC as constants
// Written by Maciej Piatkowski, logic partially imported from his summer 2018 project

class PGCRequestRoute {
    constructor(type, address, paramList, addressParams) {
        this.type = type;
        this.address = address;
        this.paramList = paramList;
        this.addressParams = addressParams;
    }
}

export const PGCTypeConsts = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
    SKIP_KEY: "SKIP_KEY",
};

export const PGCRequestList = {
    // User requests
    USER_CREATE: new PGCRequestRoute(PGCTypeConsts.POST, ["/user"], [
        "idToken",
        "name",
        "origin",
    ], null),
    USER_GET: new PGCRequestRoute(PGCTypeConsts.GET, ["/user/"], [
        PGCTypeConsts.SKIP_KEY, // idToken
    ], null),
    USER_UPDATE: new PGCRequestRoute(PGCTypeConsts.PUT, ["/user"], [
        "idToken",
        "name",
        "origin",
        "area",
    ], null),
    USER_DELETE: new PGCRequestRoute(PGCTypeConsts.DELETE, ["/user/"], [
        PGCTypeConsts.SKIP_KEY, // idToken
    ], null),

    // Guide requests
    // Create not implemented
    GUIDE_GET: new PGCRequestRoute(PGCTypeConsts.GET, ["/guide/"], [
        PGCTypeConsts.SKIP_KEY, // Guide ID (or plant ID?)
    ], null),
    GUIDE_DELETE: new PGCRequestRoute(PGCTypeConsts.DELETE, ["/guide/"], [
        PGCTypeConsts.SKIP_KEY, // Guide ID (or plant ID?)
    ], null),

    // Project requests
    PROJECT_GET_SINGLE: new PGCRequestRoute(PGCTypeConsts.GET, ["/user/", "/project/"], null, [
        "idToken",
        "guideID"
    ]),
    PROJECT_GET_ALL: new PGCRequestRoute(PGCTypeConsts.GET, ["/user/", "/projects"], null, ["idToken"]),
    PROJECT_ADD: new PGCRequestRoute(PGCTypeConsts.POST, ["/project"], [
        "project",
        "idToken",
        "pId",
    ], null),
    PROJECT_DELETE: new PGCRequestRoute(PGCTypeConsts.DELETE, ["/project/"], [
        PGCTypeConsts.SKIP_KEY, // Project ID
    ], null),

    // Plant requests
    PLANT_GET_SINGLE: new PGCRequestRoute(PGCTypeConsts.GET, ["/plant/"], [
        PGCTypeConsts.SKIP_KEY, // Plant ID
    ], null),
    PLANT_GET_ALL: new PGCRequestRoute(PGCTypeConsts.GET, ["/plant"], null, null),
    PLANT_GET_BARCODE: new PGCRequestRoute(PGCTypeConsts.GET, ["/plant/barcode/"], [
        PGCTypeConsts.SKIP_KEY, // Barcode
    ], null),
};