
export function checkFields<T>(data: T): boolean {
    console.log(typeof data)
    for (const key in data) {
        if (data[key] === undefined || data[key] === null) {
            return false
        }
    }
    return true
}