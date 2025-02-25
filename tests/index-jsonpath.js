const { generateWorkflowFile } = require('../index.js')
generateWorkflowFile('./tests/swagger.json', 'workflow.yml', {
    check: {
        schema: false
    },
    generator: {
        pathParams: true,
        requestBody: true,
        optionalParams: true,
        useExampleValues: true,
        useDefaultValues: false,
        inlineSchema: false
    }
})
