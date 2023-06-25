#InvoiceGeneratorRestLayer Setup

1.Clone the InvoiceGeneratorRestLayer from this repository
2.Navigate to the root folder of the project in your terminal or command prompt
    cd InvoiceGeneratorRestLayer
3.Install the required dependencies by running the following command:
    npm install
4.Configure the corresponding database connection string in the .env file. Open the .env file located in the root folder of the project and update the DatabaseString variable with your desired database connection string.
    DATABASE_URL=your_database_connection_string
5.Run the command : npx prisma generate -- This generate prisma schema file
6.Start the application by running the following command:
    npm run local

This command will start the application and make it available at the specified local server address.

