/**
@CreatedBy   : Siva Sugan
@CreatedTime : 20/06/2023
@Description : This fie is the entry poin of the rest application
**/


/****** Initializing objects from the imported classes ******/
const express = require('express')
const cors = require('cors')
const invoiceService = require("./src/services/invoice.service")

const InvoiceGeneratorRest = express()
/****** Adding Configurations to express object ******/
InvoiceGeneratorRest.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
InvoiceGeneratorRest.use(express.json())



/****** Mapping the endpoints to the respective service modules ******/
InvoiceGeneratorRest.use('/api/rest/invoicegenerator/', invoiceService);

/****** Starting the Rest layer  ******/
InvoiceGeneratorRest.listen(3100)
console.log("Invoice Generator Rest Layer Successfully Running on port : 3100")






