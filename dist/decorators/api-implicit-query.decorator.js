"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const lodash_1 = require("lodash");
const initialMetadata = {
    name: '',
    required: true
};
exports.ApiImplicitQuery = (metadata) => {
    const param = {
        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,
        in: 'query',
        description: metadata.description,
        required: metadata.required,
        type: metadata.type,
        enum: undefined,
        items: undefined,
        collectionFormat: undefined
    };
    if (metadata.enum) {
        param.type = String;
        param.enum = metadata.enum;
    }
    if (metadata.isArray) {
        param.type = Array;
        if (metadata.enum) {
            param.items = {
                type: 'String',
                enum: metadata.enum
            };
            param.collectionFormat = 'multi';
            param.enum = undefined;
        }
        else {
            param.items = {
                type: metadata.type
            };
            param.collectionFormat = lodash_1.isNil(metadata.collectionFormat)
                ? 'csv'
                : metadata.collectionFormat;
        }
    }
    return helpers_1.createParamDecorator(param, initialMetadata);
};
