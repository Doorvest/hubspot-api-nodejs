/**
 * Marketing Events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class MarketingEventAssociation {
    'externalAccountId'?: string;
    'marketingEventId': string;
    'externalEventId'?: string;
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "externalAccountId",
            "baseName": "externalAccountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "marketingEventId",
            "baseName": "marketingEventId",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalEventId",
            "baseName": "externalEventId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MarketingEventAssociation.attributeTypeMap;
    }

    public constructor() {
    }
}

