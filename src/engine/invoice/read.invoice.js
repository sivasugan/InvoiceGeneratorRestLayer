/**
@CreatedBy   : Siva Sugan
@CreatedTime : 20/06/2023
@Description : This fie handles read invoice operations
**/

const { Prisma, PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


module.exports = class readInvoice {

    /**
    @CreatedBy    : Siva Sugan
    @CreatedTime  :
    @ModifiedBy   : Siva Sugan
    @ModifiedTime :
    @Description  : 
    **/


    async readInvoice(request) {
        let output
        try {
            if (request.limit === 0) {
                throw { output: null, status: 400, message: "The limit must be greater than zero" }
            } else {
                let queryObject = {
                    where   : request.filter,
                    take    : request.limit,
                    skip    : request.page,
                    orderBy : request.sort
                }
                let readInvoiceByFilterResponse = null;
                readInvoiceByFilterResponse = await prisma.invoice.findMany(queryObject).catch((error) => {
                    if (error instanceof Prisma.PrismaClientValidationError) {
                        throw { output: null, status: 422, message: JSON.stringify(error.message) }
                    } else {
                        throw { output: null, status: 500, message: JSON.stringify(error.message) }
                    }
                })
                if (readInvoiceByFilterResponse.length === 0) {
                    return { output: [], status: 404, message: "Data not found" }
                }
                else if (readInvoiceByFilterResponse != null && readInvoiceByFilterResponse != "undefined") {
                    output = { output: readInvoiceByFilterResponse, status: 200, message: "Data successfully fetched" }
                    return output
                }
            }
        } catch (error) {
            throw error
        }

    }

}
