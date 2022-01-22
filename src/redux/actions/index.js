export const handleEmail = (regData) => {
    return {
        type: 'EMAIL',
        payload: regData
    }
}

export const handlePhone = (regData) => {
    return {
        type: 'PHONE',
        payload: regData
    }
}

export const handleFname = (regData) => {
    return {
        type: 'FNAME',
        payload: regData
    }
}

export const handleAccId = (regData) => {
    return {
        type: 'ACCID',
        payload: regData
    }
}

export const handlePassword = (regData) => {
    return {
        type: 'PASSWORD',
        payload: regData
    }
}