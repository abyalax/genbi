import { NextApiResponse } from "next/types"

const responseAPI = (res: NextApiResponse, status: boolean, statusCode: number, message: string, data?: any) => {
    return res.status(statusCode).json({
        status,
        statusCode,
        message,
        data
    })
}

const responseData = (res: NextApiResponse, data: any) => {
    return responseAPI(res, true, 200, 'success', data)
}

const responseSuccess = (res: NextApiResponse) => {
    return responseAPI(res, true, 200, 'success')
}

const responseFailed = (res:NextApiResponse) => {
    return responseAPI(res, false, 400, 'failed')
}

const responseNotFound = (res:NextApiResponse) => {
    return responseAPI(res, false, 404, 'not found')
}

const responseDenied = (res:NextApiResponse) => {
    return responseAPI(res, false, 403, 'denied')
}

const responseMethodNotAllowed = (res:NextApiResponse) => {
    return responseAPI(res, false, 405, 'method not allowed')
}

const responseUnauthorized = (res:NextApiResponse) => {
    return responseAPI(res, false, 401, 'unauthorized')
}

const responseUnauthenticated = (res:NextApiResponse) => {
    return responseAPI(res, false, 401, 'unauthenticated')
}

const responseInternalServerError = (res:NextApiResponse) => {
    return responseAPI(res, false, 500, 'internal server error')
}

export {
    responseData, responseSuccess, responseNotFound, responseFailed,
    responseDenied, responseMethodNotAllowed, responseUnauthorized,
    responseUnauthenticated, responseInternalServerError,
    responseAPI
}
