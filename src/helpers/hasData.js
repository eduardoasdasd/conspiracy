export default function hasData(value) {
    if(typeof value === "object" && Object.keys(value).length > 0) return true;
    return false
}