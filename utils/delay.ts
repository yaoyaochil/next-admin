/**
 * 延迟
 * @param ms
 */
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}