const jfsdk = require('@balena/jellyfish-client-sdk')
const https = require('https');
const fs = require('fs');
const { rejects } = require('assert');


// Create a new SDK instance, providing the API url and prefix
const sdk = jfsdk.getSdk({
    apiUrl: 'https://api.ly.fish',
    apiPrefix: 'api/v2/',
});

// Authorise the SDK using an auth token
sdk.setAuthToken(process.env.JF_AUTH_TOKEN);


exec = async () => {
    const supportThreadQuery = {
        type: 'object',
        additionalProperties: true,
        required: ['data', 'type'],
        anyOf: [
            {
                type: 'object',
                required: ['data'],
                properties: {
                    data: {
                        type: 'object',
                        required: ['weight'],
                        properties: {
                            weight: {
                                type: 'number',
                                "minimum": 5,
                                "maximum": 8,
                            },
                        },
                    }
                },
            }
        ],
        properties: {
            type: {
                "type": "string",
                "const": "pattern@1.0.0"
            }
        },
    };

    data = await sdk.query(supportThreadQuery, {limit:20});

    console.log(data)

}

exec();