export function buildRouthPath(path) {

    const routeParamsRegex = /:([a-zA-Z]+)/g
    const pathWIthParams = path.replaceAll(routeParamsRegex, "([a-z0-9\-_]+)")
    const pathRegex = new RegExp(`^${pathWIthParams}`)


    return pathRegex

}