/**
@CreatedBy   : Siva Sugan
@CreatedTime : 20/06/2023
@Description : This fie handles update invoice operations
**/

/****** Importing all the required modules ******/ 
const {Prisma, PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()


module.exports =  class updateInvoice{


    async updateMultipleInvoices(request){
        try{
            let updateMultipleInvoicesResponse = await prisma.invoice.updateMany({
                where: request.filter,
                data: request.fields  
            }).catch((error) =>{
                if(error instanceof Prisma.PrismaClientValidationError){
                    throw { output:null, status:422, message:JSON.stringify(error.message)}
                }
                else{
                    throw { output:null, status:500, message:JSON.stringify(error.message)}
                }
            })
            if(updateMultipleInvoicesResponse.count === 0){
                throw {output: null, status:404, message:"Data not found"}
            }else if(updateMultipleInvoicesResponse.count > 0){
                return {output:updateMultipleInvoicesResponse, status:200, message:"Successfully updated the data"}
            }
        }catch(error){
            throw error
        }
    }
}