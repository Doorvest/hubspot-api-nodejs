export * from '../models/AssociationSpec';
export * from '../models/AssociationSpecWithLabel';
export * from '../models/BatchInputPublicAssociationMultiArchive';
export * from '../models/BatchInputPublicAssociationMultiPost';
export * from '../models/BatchInputPublicDefaultAssociationMultiPost';
export * from '../models/BatchInputPublicFetchAssociationsBatchRequest';
export * from '../models/BatchResponseLabelsBetweenObjectPair';
export * from '../models/BatchResponseLabelsBetweenObjectPairWithErrors';
export * from '../models/BatchResponsePublicAssociationMultiWithLabel';
export * from '../models/BatchResponsePublicAssociationMultiWithLabelWithErrors';
export * from '../models/BatchResponsePublicDefaultAssociation';
export * from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
export * from '../models/ErrorDetail';
export * from '../models/ForwardPaging';
export * from '../models/LabelsBetweenObjectPair';
export * from '../models/LabelsBetweenObjectPair1';
export * from '../models/ModelError';
export * from '../models/MultiAssociatedObjectWithLabel';
export * from '../models/NextPage';
export * from '../models/Paging';
export * from '../models/PreviousPage';
export * from '../models/PublicAssociationMultiArchive';
export * from '../models/PublicAssociationMultiPost';
export * from '../models/PublicAssociationMultiWithLabel';
export * from '../models/PublicDefaultAssociation';
export * from '../models/PublicDefaultAssociationMultiPost';
export * from '../models/PublicFetchAssociationsBatchRequest';
export * from '../models/PublicObjectId';
export * from '../models/StandardError';

import { AssociationSpec    } from '../models/AssociationSpec';
import { AssociationSpecWithLabel     } from '../models/AssociationSpecWithLabel';
import { BatchInputPublicAssociationMultiArchive } from '../models/BatchInputPublicAssociationMultiArchive';
import { BatchInputPublicAssociationMultiPost } from '../models/BatchInputPublicAssociationMultiPost';
import { BatchInputPublicDefaultAssociationMultiPost } from '../models/BatchInputPublicDefaultAssociationMultiPost';
import { BatchInputPublicFetchAssociationsBatchRequest } from '../models/BatchInputPublicFetchAssociationsBatchRequest';
import { BatchResponseLabelsBetweenObjectPair        } from '../models/BatchResponseLabelsBetweenObjectPair';
import { BatchResponseLabelsBetweenObjectPairWithErrors          } from '../models/BatchResponseLabelsBetweenObjectPairWithErrors';
import { BatchResponsePublicAssociationMultiWithLabel        } from '../models/BatchResponsePublicAssociationMultiWithLabel';
import { BatchResponsePublicAssociationMultiWithLabelWithErrors          } from '../models/BatchResponsePublicAssociationMultiWithLabelWithErrors';
import { BatchResponsePublicDefaultAssociation          } from '../models/BatchResponsePublicDefaultAssociation';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';
import { LabelsBetweenObjectPair1 } from '../models/LabelsBetweenObjectPair1';
import { ModelError } from '../models/ModelError';
import { MultiAssociatedObjectWithLabel } from '../models/MultiAssociatedObjectWithLabel';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PreviousPage } from '../models/PreviousPage';
import { PublicAssociationMultiArchive } from '../models/PublicAssociationMultiArchive';
import { PublicAssociationMultiPost } from '../models/PublicAssociationMultiPost';
import { PublicAssociationMultiWithLabel } from '../models/PublicAssociationMultiWithLabel';
import { PublicDefaultAssociation } from '../models/PublicDefaultAssociation';
import { PublicDefaultAssociationMultiPost } from '../models/PublicDefaultAssociationMultiPost';
import { PublicFetchAssociationsBatchRequest } from '../models/PublicFetchAssociationsBatchRequest';
import { PublicObjectId } from '../models/PublicObjectId';
import { StandardError } from '../models/StandardError';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AssociationSpecAssociationCategoryEnum",
    "AssociationSpecWithLabelCategoryEnum",
    "BatchResponseLabelsBetweenObjectPairStatusEnum",
    "BatchResponseLabelsBetweenObjectPairWithErrorsStatusEnum",
    "BatchResponsePublicAssociationMultiWithLabelStatusEnum",
    "BatchResponsePublicAssociationMultiWithLabelWithErrorsStatusEnum",
    "BatchResponsePublicDefaultAssociationStatusEnum",
]);

let typeMap: {[index: string]: any} = {
    "AssociationSpec": AssociationSpec,
    "AssociationSpecWithLabel": AssociationSpecWithLabel,
    "BatchInputPublicAssociationMultiArchive": BatchInputPublicAssociationMultiArchive,
    "BatchInputPublicAssociationMultiPost": BatchInputPublicAssociationMultiPost,
    "BatchInputPublicDefaultAssociationMultiPost": BatchInputPublicDefaultAssociationMultiPost,
    "BatchInputPublicFetchAssociationsBatchRequest": BatchInputPublicFetchAssociationsBatchRequest,
    "BatchResponseLabelsBetweenObjectPair": BatchResponseLabelsBetweenObjectPair,
    "BatchResponseLabelsBetweenObjectPairWithErrors": BatchResponseLabelsBetweenObjectPairWithErrors,
    "BatchResponsePublicAssociationMultiWithLabel": BatchResponsePublicAssociationMultiWithLabel,
    "BatchResponsePublicAssociationMultiWithLabelWithErrors": BatchResponsePublicAssociationMultiWithLabelWithErrors,
    "BatchResponsePublicDefaultAssociation": BatchResponsePublicDefaultAssociation,
    "CollectionResponseMultiAssociatedObjectWithLabelForwardPaging": CollectionResponseMultiAssociatedObjectWithLabelForwardPaging,
    "ErrorDetail": ErrorDetail,
    "ForwardPaging": ForwardPaging,
    "LabelsBetweenObjectPair": LabelsBetweenObjectPair,
    "LabelsBetweenObjectPair1": LabelsBetweenObjectPair1,
    "ModelError": ModelError,
    "MultiAssociatedObjectWithLabel": MultiAssociatedObjectWithLabel,
    "NextPage": NextPage,
    "Paging": Paging,
    "PreviousPage": PreviousPage,
    "PublicAssociationMultiArchive": PublicAssociationMultiArchive,
    "PublicAssociationMultiPost": PublicAssociationMultiPost,
    "PublicAssociationMultiWithLabel": PublicAssociationMultiWithLabel,
    "PublicDefaultAssociation": PublicDefaultAssociation,
    "PublicDefaultAssociationMultiPost": PublicDefaultAssociationMultiPost,
    "PublicFetchAssociationsBatchRequest": PublicFetchAssociationsBatchRequest,
    "PublicObjectId": PublicObjectId,
    "StandardError": StandardError,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
