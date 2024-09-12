/**
 * Forms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Describes how a numeric value should be validated.
*/
export class NumberFieldValidation {
    /**
    * 
    */
    'minAllowedDigits': number;
    /**
    * 
    */
    'maxAllowedDigits': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "minAllowedDigits",
            "baseName": "minAllowedDigits",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maxAllowedDigits",
            "baseName": "maxAllowedDigits",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return NumberFieldValidation.attributeTypeMap;
    }

    public constructor() {
    }
}

