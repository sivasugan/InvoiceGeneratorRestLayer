/**
@CreatedBy   : Siva Sugan
@CreatedTime : 20/06/2023
@Description : This fie handles all API's related to invoice module
**/

/****** Importing the required modules ******/
const express = require('express');  
const CreateInvoice = require('../engine/invoice/create.invoice')
const ReadInvoice = require('../engine/invoice/read.invoice')
const UpdateInvoce = require('../engine/invoice/update.invoice')
const InvoiceService = express.Router();

/****** Initializing required objects here ******/
const createInvoice = new CreateInvoice()
const readInvoice = new ReadInvoice()
const updateInvoice = new UpdateInvoce()

InvoiceService.post("/createinvoice", async (request, response) => {
    try{
        const createInvoiceRespose = await createInvoice.createInvoice(request.body)
        response.json(createInvoiceRespose)
    }catch(error){
        response.json('Error creating invoice',error.message)
    }
})

InvoiceService.post("/readinvoice", async (request, response) => {
    try{
        const readInvoiceRespose = await readInvoice.readInvoice(request.body)
        response.json(readInvoiceRespose)
    }catch(error){
        response.json(error.message)
    }
})

InvoiceService.patch("/updateinvoice", async (request, response) => {
    try{
        const updateInvoiceRespose = await updateInvoice.updateMultipleInvoices(request.body)
        response.json(updateInvoiceRespose)
    }catch(error){
        response.json(error.message)
    }
})

module.exports = InvoiceService