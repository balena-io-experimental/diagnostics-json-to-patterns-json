const jfsdk = require('@balena/jellyfish-client-sdk')

// Create a new SDK instance, providing the API url and prefix
const sdk = jfsdk.getSdk({
    apiUrl: 'https://api.ly.fish',
    apiPrefix: 'api/v2/',
});

// Authorise the SDK using an auth token
sdk.setAuthToken(process.env.JF_AUTH_TOKEN);

// const types = ["support-thread", "milestone", "improvement", "faq", "blog-post"]
const types = ["pattern"];

getPages = async () => {
    Promise.all(
        types.map(async jfType => {
            const supportThreadQuery = {
                type: 'object',
                additionalProperties: true,
                required: ['data', 'type'],
                properties: {
                    type: {
                        "type": "string",
                        "const": jfType + "@1.0.0"
                    }
                },
            };
            console.log(`get type ${jfType}`)
            let length = 0;
            const cursor = sdk.getCursor(supportThreadQuery, { limit: 1000 })
            while (true) {
                const result = await cursor.query();

                await cursor.nextPage();
                console.log(result);

                length += result.length

                if (!cursor.hasNextPage()) {
                    console.log('no next page');
                    cursor.close()
                    break;
                }
            }
            
            console.log(length);
        }))
}
getPages();