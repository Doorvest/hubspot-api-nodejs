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

import { FieldGroup } from '../models/FieldGroup';
import { FormDisplayOptions } from '../models/FormDisplayOptions';
import { HubSpotFormConfiguration } from '../models/HubSpotFormConfiguration';
import { HubSpotFormDefinitionAllOfLegalConsentOptions } from '../models/HubSpotFormDefinitionAllOfLegalConsentOptions';

export class CollectionResponseFormDefinitionBaseForwardPagingResultsInner {
    'formType': CollectionResponseFormDefinitionBaseForwardPagingResultsInnerFormTypeEnum;
    'id': string;
    'name': string;
    'createdAt': Date;
    'updatedAt': Date;
    'archived': boolean;
    'archivedAt'?: Date;
    'fieldGroups': Array<FieldGroup>;
    'configuration': HubSpotFormConfiguration;
    'displayOptions': FormDisplayOptions;
    'legalConsentOptions': HubSpotFormDefinitionAllOfLegalConsentOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "formType",
            "baseName": "formType",
            "type": "CollectionResponseFormDefinitionBaseForwardPagingResultsInnerFormTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fieldGroups",
            "baseName": "fieldGroups",
            "type": "Array<FieldGroup>",
            "format": ""
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "HubSpotFormConfiguration",
            "format": ""
        },
        {
            "name": "displayOptions",
            "baseName": "displayOptions",
            "type": "FormDisplayOptions",
            "format": ""
        },
        {
            "name": "legalConsentOptions",
            "baseName": "legalConsentOptions",
            "type": "HubSpotFormDefinitionAllOfLegalConsentOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseFormDefinitionBaseForwardPagingResultsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CollectionResponseFormDefinitionBaseForwardPagingResultsInnerFormTypeEnum {
    Hubspot = 'hubspot'
}

