const jfsdk = require('@balena/jellyfish-client-sdk')
const https = require('https');
const fs = require('fs');
const { rejects } = require('assert');
const { stringify } = require('querystring');


// Create a new SDK instance, providing the API url and prefix
const sdk = jfsdk.getSdk({
    apiUrl: 'https://api.ly.fish',
    apiPrefix: 'api/v2/',
});

// Authorise the SDK using an auth token
sdk.setAuthToken(process.env.JF_AUTH_TOKEN);

// Retrieve a card by id
const executeJFQuery = async (query) => {
    return await sdk.query(query);
};

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
                        required: ['payload'],
                        properties: {
                            payload: {
                                type: 'object',
                                required: ['file'],
                                properties: {
                                    file: {
                                        type: 'object',
                                        required: ['name', 'slug'],
                                        properties: {
                                            name: {
                                                type: 'string',
                                                fullTextSearch: {
                                                    term: '_diagnostics_',
                                                },
                                            }
                                        }
                                    }
                                },
                            },
                        },
                    }
                },
            }
        ],
        properties: {
            type: {
                "type": "string",
                "const": "whisper@1.0.0"
            }
        },
    };

    data = await sdk.query(supportThreadQuery, { limit: 2 });

    const receiveDiagnosticsDir = "diagnostics"
    if (!fs.existsSync(receiveDiagnosticsDir)) {
        fs.mkdirSync(receiveDiagnosticsDir);
    }
    await data.forEach(async element => {


        // get the support thread for the diagnostics file
        const sthread = await sdk.query({
            type: 'object',
            properties: {
                id: {
                    "type": "string",
                    "const": element.data.target
                },
                type: {
                    "type": "string",
                    "const": "support-thread@1.0.0"
                }
            }
        }, { limit: 1 })


        sthread.forEach(async element => {
            // get all patterns for a support thread
            const patternForSThread = await sdk.query({
                "description": "Fetch all contracts linked to pattern-troubleshooting-custom-dt-support-fd7a39e",
                "type": "object",
                "required": [
                    "id",
                    "type"
                ],
                properties: {
                    type: {
                        "type": "string",
                        "const": "pattern@1.0.0"
                    }
                },
                "$$links": {
                    "is attached to": {
                        "type": "object",
                        "required": [
                            "type"
                        ],
                        "additionalProperties": false,
                        "properties": {
                            "type": {
                                "const": "support-thread@1.0.0"
                            },
                            "id": {
                                "const": element.id
                            }
                        }
                    }
                }
            })
            console.log(patternForSThread)
        })
        // console.log(sthread);
        const file = await sdk.getFile(element.id, element.data.payload.file.slug)
        await fs.writeFileSync(receiveDiagnosticsDir + "/" + element.data.payload.file.slug, file)
    })
}

exec();