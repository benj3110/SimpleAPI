import Ajv from 'ajv';

export const validateTime = (data: {epoch: number}) => {
    const schema = {
    type: 'object',
    properties: {
        epoch: {
            description: "The current server time, in epoch seconds, at time of processing the request.",
            type: 'number'
        }
    },
    required: ['epoch'],
    additionalProperties: false
    };

    const ajv = new Ajv();
    const validate = ajv.compile(schema);


    const valid = validate(data);

    if (valid) {
        return true
    } else {
        return false
    }

}