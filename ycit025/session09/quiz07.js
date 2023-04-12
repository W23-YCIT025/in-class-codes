const JSONData = `
    {
        "key1": "value1"
    }
`;


console.log('typeof JSONData', typeof JSONData);

const javaScriptData = JSON.parse(JSONData);

console.log('typeof javaScriptData', typeof javaScriptData);
console.log('javaScriptData', javaScriptData);


