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
* A condition based on customer input
*/
export class DependentFieldFilter {
    /**
    * 
    */
    'rangeStart': string;
    /**
    * 
    */
    'values': Array<string>;
    /**
    * 
    */
    'value': string;
    /**
    * 
    */
    'operator': DependentFieldFilterOperatorEnum;
    /**
    * 
    */
    'rangeEnd': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rangeStart",
            "baseName": "rangeStart",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "DependentFieldFilterOperatorEnum",
            "format": ""
        },
        {
            "name": "rangeEnd",
            "baseName": "rangeEnd",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DependentFieldFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DependentFieldFilterOperatorEnum {
    Eq = 'eq',
    Neq = 'neq',
    Contains = 'contains',
    DoesntContain = 'doesnt_contain',
    StrStartsWith = 'str_starts_with',
    StrEndsWith = 'str_ends_with',
    Lt = 'lt',
    Lte = 'lte',
    Gt = 'gt',
    Gte = 'gte',
    Between = 'between',
    NotBetween = 'not_between',
    WithinTimeReverse = 'within_time_reverse',
    WithinTime = 'within_time',
    SetAny = 'set_any',
    SetNotAny = 'set_not_any',
    SetAll = 'set_all',
    SetNotAll = 'set_not_all',
    SetEq = 'set_eq',
    SetNeq = 'set_neq',
    IsNotEmpty = 'is_not_empty'
}

