# Cosmos DB Language Service

Azure Cosmos DB Language Service for the Monaco editor

`npm install @azure/cosmos-language-service`

### Supported Cosmos DB languages
+ [Cosmos DB SQL](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-sql-query-reference#bk_from_clause)

### Supported Features
+ Autocomplete
+ Error marks

### Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the Microsoft Open Source Code of Conduct. For more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional questions or comments.

#### Set up
1. Install antlr4 and set up environment based on the [doc](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)
2. If you are using `vscode`, hightly recommend the [antlr4 vscode plugin](https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4)
3. Install `node`(>=v8.9.0) and `npm`(>=v5.8.0)
4. Clone the source code.(Source code repo link is https://github.com/Azure/cosmos-sql-language-service)
5. Install the dependencies:
```bash
npm install
``` 

#### Build and Run
1. Compile Antlr Grammar
```bash
cd $(grammar_folder)
doskey antlr4=java org.antlr.v4.Tool $*
doskey grun =java org.antlr.v4.gui.TestRig $*
antlr4 -no-listener -no-visitor -Dlanguage=JavaScript *.g4 -o ../generated
```
You can keep the lexer.js file and the parser.js file and delete others.

2. Build the package
```bash
cd $(language_service_folder)
webpack
cd $(root_folder)
npm run dev
```
