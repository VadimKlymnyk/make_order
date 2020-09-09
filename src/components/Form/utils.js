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

export const calculation =(date, duration, array = []) => {
    const startWork = date.clone().hour(10).minute(0).second(0)
    const endWork =  date.clone().hour(19).minute(0).second(0)

    if(date.days() === 6 || date.days() === 0 || date.hour() > 18){
        calculation(startWork.add(1, 'days'), duration, array)

    }else {
        const start = date.hour() < 10 ? startWork.clone() : date.clone()
        const response = start.clone().add(duration, 'minutes')

        if(response.format() <= endWork.format()){
            array.push(response)
        }else{
            const diffDuration = duration -  endWork.diff(start, 'minutes')
            calculation(startWork.add(1, 'days'), diffDuration, array)
        }
    }
    return array[0]
}