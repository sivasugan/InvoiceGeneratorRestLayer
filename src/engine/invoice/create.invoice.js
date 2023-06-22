/**
@CreatedBy   : Siva Sugan
@CreatedTime : 20/06/2023
@Description : This fie handles create invoice operations
**/

/****** Importing all the required modules ******/
const { Prisma, PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()


module.exports = class createInvoice {

    async createInvoice(request) {
        let output
            try {
                const {
                    InvoiceId,
                    CustomerId,
                    InvoiceNumber,
                    InvoiceDate ,
                    DueDate ,
                    TotalAmount,
                    Status,
                    CreatedDate,
                    ModifiedDate
                } = request
                let createInvoiceResponse = await prisma.invoice.create({
                    data: {
                        InvoiceId,
                        CustomerId,
                        InvoiceNumber,
                        InvoiceDate,
                        DueDate,
                        TotalAmount,
                        Status,
                        CreatedDate,
                        ModifiedDate
                    },
                }).catch((error) => {
                    if (error instanceof Prisma.PrismaClientValidationError) {
                        output = { output: null, status: 422, message: JSON.stringify(error.message) }
                    } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
                        output = { output: null, status: 422, message: JSON.stringify(error.message) }
                    } else {
                        output = { output: null, status: 500, message: JSON.stringify(error.message) }
                    }
                })
                if (createInvoiceResponse) {
                    output = { output: createInvoiceResponse, status: 200, message: 'Invoice Successfully Created' }
                    console.log('Invoice Successfully Created')
                }
            }
                
        catch (error) {
            output = { output: null, status: 500, message: JSON.stringify(error.message) }
        }
        return output
    }
}

