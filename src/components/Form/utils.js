export const getPrice = (lang, length, type) => {

    if (lang && length && type) {
        const multiplierType = (type === 'pdf' || type === 'else') ? 1.2 : 1
        const multiplierPrice = lang === 'eng' ? 0.12 : 0.05
        const minPrice = lang === 'eng' ? 120 : 50
        const calcPrice = Math.floor(length * multiplierPrice * multiplierType * 10) / 10

        return calcPrice < minPrice ? minPrice : calcPrice
    }else{
        return 0
    }
}
export const getDuration = (lang, length, type) => {
    if (lang && length && type) {
        const multiplierType = (type === 'pdf' || type === 'else') ? 1.2 : 1
        const multiplierDuration = lang === 'eng' ? 333 : 1333
        const calcDuration = Math.floor((length / multiplierDuration * 60 * multiplierType)+30)
        
        return calcDuration < 60 ? 60 : calcDuration
    }else{
        return 0
    }
}