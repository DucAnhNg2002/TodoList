const getTime = () => {
    const date = new Date()
    const time = date.getUTCDate() + "/" + (date.getUTCMonth()+1) + "/" + date.getUTCFullYear() + " " + date.getHours() + ":" + date.getMinutes()
    return time
}
export default getTime