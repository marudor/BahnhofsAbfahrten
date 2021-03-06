/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BahnhofControllerV1 } from './controller/Bahnhof/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BusinessHubV1Controller } from './controller/BusinessHub/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasExperimentalController } from './controller/Hafas/experimental';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasSubscribeController } from './controller/Hafas/subscribe';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasControllerV2 } from './controller/Hafas/v2';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasController } from './controller/Hafas/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasControllerV3 } from './controller/Hafas/v3';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { IrisControllerv1 } from './controller/Iris/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { IrisControllerv2 } from './controller/Iris/v2';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReihungMonitoringController } from './controller/Reihung/monitor';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReihungControllerV1 } from './controller/Reihung/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReihungControllerV2 } from './controller/Reihung/v2';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SBBExperimentalController } from './controller/SBB/experimental';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StationController } from './controller/Station/v1';
import * as KoaRouter from '@koa/router';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "LageplanResponse": {
        "dataType": "refObject",
        "properties": {
            "lageplan": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OccupancyPeriod": {
        "dataType": "refObject",
        "properties": {
            "start": {"dataType":"string","required":true},
            "end": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OccupancyLevelDescription": {
        "dataType": "refObject",
        "properties": {
            "language": {"dataType":"string","required":true},
            "text": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OccupancyLevel": {
        "dataType": "refObject",
        "properties": {
            "value": {"dataType":"double","required":true},
            "description": {"dataType":"array","array":{"ref":"OccupancyLevelDescription"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OccupancyTimeSlot": {
        "dataType": "refObject",
        "properties": {
            "period": {"ref":"OccupancyPeriod","required":true},
            "currentCount": {"dataType":"double","required":true},
            "averageCount": {"dataType":"double","required":true},
            "currentPercentage": {"dataType":"double","required":true},
            "level": {"ref":"OccupancyLevel","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OccupancyItem": {
        "dataType": "refObject",
        "properties": {
            "period": {"ref":"OccupancyPeriod","required":true},
            "currentCountMax": {"dataType":"double","required":true},
            "averageCountMax": {"dataType":"double","required":true},
            "occupancyTimeSlot": {"dataType":"array","array":{"ref":"OccupancyTimeSlot"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OccupancyResponse": {
        "dataType": "refObject",
        "properties": {
            "items": {"dataType":"array","array":{"ref":"OccupancyItem"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LimitationEnum": {
        "dataType": "refEnum",
        "enums": ["true","false","unknown","not applicable"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "QuayAccessibilityLimitation": {
        "dataType": "refObject",
        "properties": {
            "audibleSignalsAvailable": {"ref":"LimitationEnum","required":true},
            "automaticDoor": {"ref":"LimitationEnum","required":true},
            "boardingAid": {"ref":"LimitationEnum","required":true},
            "passengerInformationDisplay": {"ref":"LimitationEnum","required":true},
            "platformHeight": {"ref":"LimitationEnum","required":true},
            "platformSign": {"ref":"LimitationEnum","required":true},
            "stairsMarking": {"ref":"LimitationEnum","required":true},
            "stepFreeAccess": {"ref":"LimitationEnum","required":true},
            "tactileGuidingStrips": {"ref":"LimitationEnum","required":true},
            "tactileHandrailLabel": {"ref":"LimitationEnum","required":true},
            "tactilePlatformAccess": {"ref":"LimitationEnum","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "QuayAccessibilityAssessment": {
        "dataType": "refObject",
        "properties": {
            "accessibilityLimitation": {"ref":"QuayAccessibilityLimitation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Quay": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "accessibilityAssessment": {"ref":"QuayAccessibilityAssessment","required":true},
            "quayType": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Facilities": {
        "dataType": "refObject",
        "properties": {
            "description": {"dataType":"string","required":true},
            "equipmentnumber": {"dataType":"double","required":true},
            "geocoordX": {"dataType":"double","required":true},
            "geocoordY": {"dataType":"double","required":true},
            "state": {"dataType":"string","required":true},
            "stateExplanation": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FastaResponse": {
        "dataType": "refObject",
        "properties": {
            "facilieites": {"dataType":"array","array":{"ref":"Facilities"},"required":true},
            "name": {"dataType":"string","required":true},
            "stationnumber": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OpL": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "icoX": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonProductInfo": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "line": {"dataType":"string"},
            "number": {"dataType":"string"},
            "type": {"dataType":"string"},
            "operator": {"ref":"OpL"},
            "admin": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedProduct": {
        "dataType": "refAlias",
        "type": {"ref":"CommonProductInfo","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PubChL": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "fDate": {"dataType":"string","required":true},
            "fTime": {"dataType":"string","required":true},
            "tDate": {"dataType":"string","required":true},
            "tTime": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedHimMessage_Date_": {
        "dataType": "refObject",
        "properties": {
            "hid": {"dataType":"string","required":true},
            "act": {"dataType":"boolean","required":true},
            "head": {"dataType":"string","required":true},
            "lead": {"dataType":"string","required":true},
            "text": {"dataType":"string","required":true},
            "icoX": {"dataType":"double","required":true},
            "prio": {"dataType":"double","required":true},
            "fLocX": {"dataType":"double","required":true},
            "tLocX": {"dataType":"double","required":true},
            "prod": {"dataType":"double","required":true},
            "affProdRefL": {"dataType":"array","array":{"dataType":"double"},"required":true},
            "IModDate": {"dataType":"string","required":true},
            "IModTime": {"dataType":"string","required":true},
            "sDate": {"dataType":"string","required":true},
            "sTime": {"dataType":"string","required":true},
            "eDate": {"dataType":"string","required":true},
            "eTime": {"dataType":"string","required":true},
            "comp": {"dataType":"string","required":true},
            "cat": {"dataType":"double","required":true},
            "pubChL": {"dataType":"array","array":{"ref":"PubChL"},"required":true},
            "edgeRefL": {"dataType":"array","array":{"dataType":"double"},"required":true},
            "affectedProducts": {"dataType":"array","array":{"dataType":"refAlias","ref":"ParsedProduct"},"required":true},
            "startTime": {"dataType":"datetime","required":true},
            "endTime": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedHimSearchResponse": {
        "dataType": "refObject",
        "properties": {
            "messages": {"dataType":"array","array":{"ref":"ParsedHimMessage_Date_"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AllowedHafasProfile": {
        "dataType": "refEnum",
        "enums": ["db","oebb","bvg","hvv","rmv","sncb","avv","nahsh","insa","anachb","vao","sbb","dbnetz","pkp","dbregio","smartrbl","vbn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Crd": {
        "dataType": "refObject",
        "properties": {
            "x": {"dataType":"double","required":true},
            "y": {"dataType":"double","required":true},
            "z": {"dataType":"double"},
            "layerX": {"dataType":"double"},
            "crdSysX": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OptionalLocL": {
        "dataType": "refObject",
        "properties": {
            "lid": {"dataType":"string"},
            "type": {"dataType":"string"},
            "name": {"dataType":"string"},
            "icoX": {"dataType":"double"},
            "extId": {"dataType":"string"},
            "state": {"dataType":"string"},
            "crd": {"ref":"Crd"},
            "pCls": {"dataType":"double"},
            "pRefL": {"dataType":"array","array":{"dataType":"double"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimFilterMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["BIT"]},{"dataType":"enum","enums":["EXC"]},{"dataType":"enum","enums":["INC"]},{"dataType":"enum","enums":["UNDEF"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimFilterType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ADMIN"]},{"dataType":"enum","enums":["CAT"]},{"dataType":"enum","enums":["CH"]},{"dataType":"enum","enums":["COMP"]},{"dataType":"enum","enums":["DEPT"]},{"dataType":"enum","enums":["EID"]},{"dataType":"enum","enums":["HIMCAT"]},{"dataType":"enum","enums":["HIMID"]},{"dataType":"enum","enums":["LINE"]},{"dataType":"enum","enums":["OPR"]},{"dataType":"enum","enums":["PID"]},{"dataType":"enum","enums":["PROD"]},{"dataType":"enum","enums":["REG"]},{"dataType":"enum","enums":["TRAIN"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimFilter": {
        "dataType": "refObject",
        "properties": {
            "mode": {"ref":"HimFilterMode","required":true},
            "type": {"ref":"HimFilterType","required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimSearchRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "comp": {"dataType":"string"},
            "dailyB": {"dataType":"string"},
            "dailyE": {"dataType":"string"},
            "dateB": {"dataType":"string"},
            "dateE": {"dataType":"string"},
            "dept": {"dataType":"string"},
            "dirLoc": {"ref":"OptionalLocL"},
            "himFltrL": {"dataType":"array","array":{"ref":"HimFilter"}},
            "maxNum": {"dataType":"double"},
            "onlyHimId": {"dataType":"boolean"},
            "onlyToday": {"dataType":"boolean"},
            "stLoc": {"ref":"OptionalLocL"},
            "timeB": {"dataType":"string"},
            "timeE": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RemL": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "icoX": {"dataType":"double","required":true},
            "txtN": {"dataType":"string","required":true},
            "txtS": {"dataType":"string"},
            "prio": {"dataType":"double"},
            "sIdx": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StopInfo_Date_": {
        "dataType": "refObject",
        "properties": {
            "scheduledPlatform": {"dataType":"string"},
            "platform": {"dataType":"string"},
            "scheduledTime": {"dataType":"datetime","required":true},
            "time": {"dataType":"datetime","required":true},
            "delay": {"dataType":"integer"},
            "reihung": {"dataType":"boolean"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "cancelled": {"dataType":"boolean"},
            "wingIds": {"dataType":"array","array":{"dataType":"string"}},
            "hidden": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Station": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
            "DS100": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MessagePrio": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["1"]},{"dataType":"enum","enums":["2"]},{"dataType":"enum","enums":["3"]},{"dataType":"enum","enums":["4"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IrisMessage_Date_": {
        "dataType": "refObject",
        "properties": {
            "text": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime"},
            "superseded": {"dataType":"boolean"},
            "priority": {"ref":"MessagePrio"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimIrisMessage_Date_": {
        "dataType": "refObject",
        "properties": {
            "text": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime"},
            "superseded": {"dataType":"boolean"},
            "priority": {"ref":"MessagePrio"},
            "head": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Message_Date_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"IrisMessage_Date_"},{"ref":"HimIrisMessage_Date_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Messages_Date_": {
        "dataType": "refObject",
        "properties": {
            "qos": {"dataType":"array","array":{"ref":"IrisMessage_Date_"},"required":true},
            "delay": {"dataType":"array","array":{"ref":"IrisMessage_Date_"},"required":true},
            "him": {"dataType":"array","array":{"ref":"HimIrisMessage_Date_"},"required":true},
        },
        "additionalProperties": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message_Date_"}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubstituteRef": {
        "dataType": "refObject",
        "properties": {
            "trainNumber": {"dataType":"string","required":true},
            "trainType": {"dataType":"string","required":true},
            "train": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Stop": {
        "dataType": "refObject",
        "properties": {
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "showVia": {"dataType":"boolean"},
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrainInfo": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "line": {"dataType":"string"},
            "number": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "operator": {"ref":"OpL"},
            "admin": {"dataType":"string"},
            "longDistance": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Abfahrt_Date_": {
        "dataType": "refObject",
        "properties": {
            "initialDeparture": {"dataType":"datetime","required":true},
            "arrival": {"ref":"StopInfo_Date_"},
            "auslastung": {"dataType":"boolean","required":true},
            "currentStation": {"ref":"Station","required":true},
            "departure": {"ref":"StopInfo_Date_"},
            "destination": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "mediumId": {"dataType":"string","required":true},
            "messages": {"ref":"Messages_Date_","required":true},
            "platform": {"dataType":"string","required":true},
            "productClass": {"dataType":"string","required":true},
            "rawId": {"dataType":"string","required":true},
            "ref": {"ref":"SubstituteRef"},
            "reihung": {"dataType":"boolean","required":true},
            "route": {"dataType":"array","array":{"ref":"Stop"},"required":true},
            "scheduledDestination": {"dataType":"string","required":true},
            "scheduledPlatform": {"dataType":"string","required":true},
            "substitute": {"dataType":"boolean"},
            "train": {"ref":"TrainInfo","required":true},
            "hiddenReihung": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Wings_Date_": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": {"ref":"Abfahrt_Date_"},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AbfahrtenResult": {
        "dataType": "refObject",
        "properties": {
            "departures": {"dataType":"array","array":{"ref":"Abfahrt_Date_"},"required":true},
            "lookbehind": {"dataType":"array","array":{"ref":"Abfahrt_Date_"},"required":true},
            "wings": {"ref":"Wings_Date_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyFilterMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["BIT"]},{"dataType":"enum","enums":["EXC"]},{"dataType":"enum","enums":["INC"]},{"dataType":"enum","enums":["UNDEF"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyFilterType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ADM"]},{"dataType":"enum","enums":["ATTRF"]},{"dataType":"enum","enums":["ATTRJ"]},{"dataType":"enum","enums":["ATTRL"]},{"dataType":"enum","enums":["BC"]},{"dataType":"enum","enums":["CAT"]},{"dataType":"enum","enums":["COUCH"]},{"dataType":"enum","enums":["CTX_RECON"]},{"dataType":"enum","enums":["GROUP"]},{"dataType":"enum","enums":["INFOTEXTS"]},{"dataType":"enum","enums":["JID"]},{"dataType":"enum","enums":["LID"]},{"dataType":"enum","enums":["LINE"]},{"dataType":"enum","enums":["LINEID"]},{"dataType":"enum","enums":["META"]},{"dataType":"enum","enums":["NAME"]},{"dataType":"enum","enums":["NUM"]},{"dataType":"enum","enums":["OP"]},{"dataType":"enum","enums":["PID"]},{"dataType":"enum","enums":["PROD"]},{"dataType":"enum","enums":["ROUTE"]},{"dataType":"enum","enums":["SLEEP"]},{"dataType":"enum","enums":["STATIONS"]},{"dataType":"enum","enums":["UIC"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyFilter": {
        "dataType": "refObject",
        "properties": {
            "mode": {"ref":"JourneyFilterMode","required":true},
            "type": {"ref":"JourneyFilterType","required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GeoRect": {
        "dataType": "refObject",
        "properties": {
            "llCrd": {"ref":"Crd","required":true},
            "urCrd": {"ref":"Crd","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GeoRing": {
        "dataType": "refObject",
        "properties": {
            "cCrd": {"ref":"Crd","required":true},
            "maxDist": {"dataType":"double","required":true},
            "minDist": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyTreeRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "getChilds": {"dataType":"double"},
            "getHIM": {"dataType":"boolean"},
            "getParent": {"dataType":"boolean"},
            "getStatus": {"dataType":"boolean"},
            "himFltrL": {"dataType":"array","array":{"ref":"HimFilter"}},
            "jnyFltrL": {"dataType":"array","array":{"ref":"JourneyFilter"}},
            "pid": {"dataType":"string"},
            "rect": {"ref":"GeoRect"},
            "ring": {"ref":"GeoRing"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyGraphRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "date": {"dataType":"string"},
            "getPasslist": {"dataType":"boolean"},
            "getProductStartEndInfo": {"dataType":"boolean"},
            "jnyFltrL": {"dataType":"array","array":{"ref":"JourneyFilter"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HafasDirection": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["B"]},{"dataType":"enum","enums":["F"]},{"dataType":"enum","enums":["FB"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyCourseRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "arrLoc": {"ref":"OptionalLocL"},
            "date": {"dataType":"string","required":true},
            "depLoc": {"ref":"OptionalLocL"},
            "dir": {"ref":"HafasDirection"},
            "getEdgeAni": {"dataType":"boolean"},
            "getEdgeCourse": {"dataType":"boolean"},
            "getIST": {"dataType":"boolean"},
            "getMainAni": {"dataType":"boolean"},
            "getMainCourse": {"dataType":"boolean"},
            "getPassLoc": {"dataType":"boolean"},
            "getPolyline": {"dataType":"boolean"},
            "jid": {"dataType":"string","required":true},
            "jnyFltrL": {"dataType":"array","array":{"ref":"JourneyFilter"}},
            "perSize": {"dataType":"double"},
            "perStep": {"dataType":"double"},
            "time": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedSubscrCreateResponse": {
        "dataType": "refObject",
        "properties": {
            "subscriptionId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_SubscrChannel.channelId_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"channelId":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrServiceDays": {
        "dataType": "refObject",
        "properties": {
            "endDate": {"dataType":"string","required":true},
            "beginDate": {"dataType":"string","required":true},
            "selectedWeekdays": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrInterval": {
        "dataType": "refObject",
        "properties": {
            "jnyFltrL": {"dataType":"array","array":{"ref":"JourneyFilter"}},
            "period": {"dataType":"double","required":true},
            "time": {"dataType":"string","required":true},
            "depLoc": {"ref":"OptionalLocL","required":true},
            "arrLoc": {"ref":"OptionalLocL","required":true},
            "monitorFlags": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "serviceDays": {"ref":"SubscrServiceDays","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrCreateOptions": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
            "channels": {"dataType":"array","array":{"dataType":"refAlias","ref":"Pick_SubscrChannel.channelId_"},"required":true},
            "intvlSubscr": {"ref":"SubscrInterval","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrDeleteResponse": {
        "dataType": "refObject",
        "properties": {
            "result": {"dataType":"nestedObjectLiteral","nestedProperties":{"resultCode":{"dataType":"string","required":true}},"required":true},
            "userId": {"dataType":"string","required":true},
            "subscrId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrDeleteOptions": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
            "subscrId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedSubscrUserResponse": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrChannelNoSoundOption": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["NO_SOUND"],"required":true},
            "value": {"dataType":"enum","enums":["1"],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrChannelCustomerTypeOption": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["CUSTOMER_TYPE"],"required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrChannelOption": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"SubscrChannelNoSoundOption"},{"ref":"SubscrChannelCustomerTypeOption"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrChannel": {
        "dataType": "refObject",
        "properties": {
            "channelId": {"dataType":"string","required":true},
            "address": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "options": {"dataType":"array","array":{"dataType":"refAlias","ref":"SubscrChannelOption"},"required":true},
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrUserCreateOptions": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
            "channels": {"dataType":"array","array":{"ref":"SubscrChannel"},"required":true},
            "language": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrSearchResponse": {
        "dataType": "refObject",
        "properties": {
            "result": {"dataType":"nestedObjectLiteral","nestedProperties":{"resultCode":{"dataType":"string","required":true}},"required":true},
            "userId": {"dataType":"string","required":true},
            "intvlSubscrL": {"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"arrLoc":{"ref":"OptionalLocL","required":true},"depLoc":{"ref":"OptionalLocL","required":true},"time":{"dataType":"string","required":true},"period":{"dataType":"double","required":true},"channels":{"dataType":"array","array":{"ref":"SubscrChannel"},"required":true},"status":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ACTIVE"]},{"dataType":"enum","enums":["EXPIRED"]}],"required":true}}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrUserDeleteResponse": {
        "dataType": "refObject",
        "properties": {
            "result": {"dataType":"nestedObjectLiteral","nestedProperties":{"resultCode":{"dataType":"string","required":true}},"required":true},
            "userId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrUserDeleteOptions": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrRTEvent": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrHIMEvent": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrEventHistory": {
        "dataType": "refObject",
        "properties": {
            "rtEvents": {"dataType":"array","array":{"ref":"SubscrRTEvent"},"required":true},
            "himEvents": {"dataType":"array","array":{"ref":"SubscrHIMEvent"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscrDetailsResponse": {
        "dataType": "refObject",
        "properties": {
            "result": {"dataType":"nestedObjectLiteral","nestedProperties":{"resultCode":{"dataType":"string","required":true}},"required":true},
            "userId": {"dataType":"string","required":true},
            "subscrId": {"dataType":"double","required":true},
            "status": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ACTIVE"]},{"dataType":"enum","enums":["EXPIRED"]}],"required":true},
            "channels": {"dataType":"array","array":{"ref":"SubscrChannel"},"required":true},
            "intvlSubscr": {"ref":"SubscrInterval","required":true},
            "eventHisotry": {"ref":"SubscrEventHistory","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonStopInfo_number_": {
        "dataType": "refObject",
        "properties": {
            "scheduledPlatform": {"dataType":"string"},
            "platform": {"dataType":"string"},
            "scheduledTime": {"dataType":"double","required":true},
            "time": {"dataType":"double","required":true},
            "delay": {"dataType":"integer"},
            "reihung": {"dataType":"boolean"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "cancelled": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonStopInfo_Date_": {
        "dataType": "refObject",
        "properties": {
            "scheduledPlatform": {"dataType":"string"},
            "platform": {"dataType":"string"},
            "scheduledTime": {"dataType":"datetime","required":true},
            "time": {"dataType":"datetime","required":true},
            "delay": {"dataType":"integer"},
            "reihung": {"dataType":"boolean"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "cancelled": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProdCtx": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "num": {"dataType":"string"},
            "matchId": {"dataType":"string"},
            "catOut": {"dataType":"string"},
            "catOutS": {"dataType":"string"},
            "catOutL": {"dataType":"string"},
            "catIn": {"dataType":"string"},
            "catCode": {"dataType":"string"},
            "admin": {"dataType":"string"},
            "lineId": {"dataType":"string"},
            "line": {"dataType":"string"},
            "cls": {"dataType":"double","required":true},
            "icoX": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProdL": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "number": {"dataType":"string"},
            "icoX": {"dataType":"double","required":true},
            "cls": {"dataType":"double","required":true},
            "oprX": {"dataType":"double"},
            "prodCtx": {"ref":"ProdCtx"},
            "addName": {"dataType":"string"},
            "nameS": {"dataType":"string"},
            "matchId": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrnCmpSX": {
        "dataType": "refObject",
        "properties": {
            "tcocX": {"dataType":"array","array":{"dataType":"double"}},
            "tcM": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TxtC": {
        "dataType": "refObject",
        "properties": {
            "r": {"dataType":"double","required":true},
            "g": {"dataType":"double","required":true},
            "b": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MsgL": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"string","required":true},
            "remX": {"dataType":"double","required":true},
            "txtC": {"ref":"TxtC","required":true},
            "prio": {"dataType":"double","required":true},
            "fIdx": {"dataType":"double","required":true},
            "tIdx": {"dataType":"double","required":true},
            "tagL": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonDeparture": {
        "dataType": "refObject",
        "properties": {
            "locX": {"dataType":"double","required":true},
            "idx": {"dataType":"double"},
            "dCncl": {"dataType":"boolean"},
            "dProdX": {"dataType":"double"},
            "dInS": {"dataType":"boolean","required":true},
            "dInR": {"dataType":"boolean","required":true},
            "dTimeS": {"dataType":"string","required":true},
            "dTimeR": {"dataType":"string"},
            "dPlatfS": {"dataType":"string"},
            "dPlatfR": {"dataType":"string"},
            "dProgType": {"dataType":"string"},
            "type": {"dataType":"string"},
            "dTZOffset": {"dataType":"double"},
            "dTrnCmpSX": {"ref":"TrnCmpSX"},
            "msgL": {"dataType":"array","array":{"ref":"MsgL"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonArrival": {
        "dataType": "refObject",
        "properties": {
            "locX": {"dataType":"double","required":true},
            "idx": {"dataType":"double"},
            "aCncl": {"dataType":"boolean"},
            "aProdX": {"dataType":"double"},
            "aOutR": {"dataType":"boolean","required":true},
            "aTimeS": {"dataType":"string","required":true},
            "aTimeR": {"dataType":"string"},
            "aPlatfS": {"dataType":"string"},
            "aPlatfR": {"dataType":"string"},
            "aProgType": {"dataType":"string"},
            "type": {"dataType":"string"},
            "aTZOffset": {"dataType":"double"},
            "aTrnCmpSX": {"ref":"TrnCmpSX"},
            "msgL": {"dataType":"array","array":{"ref":"MsgL"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonStop": {
        "dataType": "refObject",
        "properties": {
            "locX": {"dataType":"double","required":true},
            "idx": {"dataType":"double"},
            "aCncl": {"dataType":"boolean"},
            "aProdX": {"dataType":"double"},
            "aOutR": {"dataType":"boolean","required":true},
            "aTimeS": {"dataType":"string","required":true},
            "aTimeR": {"dataType":"string"},
            "aPlatfS": {"dataType":"string"},
            "aPlatfR": {"dataType":"string"},
            "aProgType": {"dataType":"string"},
            "type": {"dataType":"string"},
            "aTZOffset": {"dataType":"double"},
            "aTrnCmpSX": {"ref":"TrnCmpSX"},
            "msgL": {"dataType":"array","array":{"ref":"MsgL"}},
            "dCncl": {"dataType":"boolean"},
            "dProdX": {"dataType":"double"},
            "dInS": {"dataType":"boolean","required":true},
            "dInR": {"dataType":"boolean","required":true},
            "dTimeS": {"dataType":"string","required":true},
            "dTimeR": {"dataType":"string"},
            "dPlatfS": {"dataType":"string"},
            "dPlatfR": {"dataType":"string"},
            "dProgType": {"dataType":"string"},
            "dTZOffset": {"dataType":"double"},
            "dTrnCmpSX": {"ref":"TrnCmpSX"},
            "isAdd": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JnyL": {
        "dataType": "refObject",
        "properties": {
            "jid": {"dataType":"string","required":true},
            "prodX": {"dataType":"double","required":true},
            "dirTxt": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "isRchbl": {"dataType":"boolean","required":true},
            "isCncl": {"dataType":"boolean"},
            "isPartCncl": {"dataType":"boolean"},
            "subscr": {"dataType":"string","required":true},
            "stopL": {"dataType":"array","array":{"ref":"CommonStop"},"required":true},
            "msgL": {"dataType":"array","array":{"ref":"MsgL"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Freq": {
        "dataType": "refObject",
        "properties": {
            "minC": {"dataType":"double","required":true},
            "maxC": {"dataType":"double","required":true},
            "numC": {"dataType":"double","required":true},
            "jnyL": {"dataType":"array","array":{"ref":"JnyL"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Jny": {
        "dataType": "refObject",
        "properties": {
            "jid": {"dataType":"string","required":true},
            "prodX": {"dataType":"double","required":true},
            "dirTxt": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "isRchbl": {"dataType":"boolean","required":true},
            "isCncl": {"dataType":"boolean"},
            "isPartCncl": {"dataType":"boolean"},
            "subscr": {"dataType":"string","required":true},
            "stopL": {"dataType":"array","array":{"ref":"CommonStop"}},
            "msgL": {"dataType":"array","array":{"ref":"MsgL"}},
            "chgDurR": {"dataType":"double"},
            "ctxRecon": {"dataType":"string","required":true},
            "dTrnCmpSXmsgL": {"dataType":"array","array":{"ref":"MsgL"},"required":true},
            "dTrnCmpSX": {"ref":"TrnCmpSX"},
            "freq": {"ref":"Freq","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecLJNY": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["JNY"],"required":true},
            "icoX": {"dataType":"double","required":true},
            "dep": {"ref":"CommonDeparture","required":true},
            "arr": {"ref":"CommonArrival","required":true},
            "jny": {"ref":"Jny","required":true},
            "parJnyL": {"dataType":"array","array":{"ref":"Jny"}},
            "resState": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["N"]},{"dataType":"enum","enums":["B"]},{"dataType":"enum","enums":["S"]}],"required":true},
            "resRecommendation": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Gis": {
        "dataType": "refObject",
        "properties": {
            "dist": {"dataType":"double","required":true},
            "durS": {"dataType":"string","required":true},
            "dirGeo": {"dataType":"double","required":true},
            "ctx": {"dataType":"string","required":true},
            "gisPrvr": {"dataType":"string","required":true},
            "getDescr": {"dataType":"boolean","required":true},
            "getPoly": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecLWALK": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["WALK"]},{"dataType":"enum","enums":["TRSF"]}],"required":true},
            "icoX": {"dataType":"double","required":true},
            "dep": {"ref":"CommonDeparture","required":true},
            "arr": {"ref":"CommonArrival","required":true},
            "gis": {"ref":"Gis","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecLKISS": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["KISS"],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecL": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"SecLJNY"},{"ref":"SecLWALK"},{"ref":"SecLKISS"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuslastungsValue": {
        "dataType": "refEnum",
        "enums": [1,2,3,4],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24Auslastung": {
        "dataType": "refObject",
        "properties": {
            "first": {"ref":"AuslastungsValue"},
            "second": {"ref":"AuslastungsValue"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Message": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"IrisMessage_Date_"},{"ref":"HimIrisMessage_Date_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24Stop_Date_": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_Date_"},
            "departure": {"ref":"CommonStopInfo_Date_"},
            "station": {"ref":"Station","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24TarifFare": {
        "dataType": "refObject",
        "properties": {
            "price": {"dataType":"integer","required":true,"validators":{"isInt":{"errorMsg":"in Cent"}}},
            "moreExpensiveAvailable": {"dataType":"boolean","required":true},
            "bookable": {"dataType":"boolean","required":true},
            "upsell": {"dataType":"boolean","required":true},
            "targetContext": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24TarifFareSet": {
        "dataType": "refObject",
        "properties": {
            "fares": {"dataType":"array","array":{"ref":"Route%24TarifFare"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PossibleShort": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["3R"]},{"dataType":"enum","enums":["3"]},{"dataType":"enum","enums":["4"]},{"dataType":"enum","enums":["2"]},{"dataType":"enum","enums":["1"]},{"dataType":"enum","enums":["T"]},{"dataType":"enum","enums":["3V"]},{"dataType":"enum","enums":["M"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PlannedSequence": {
        "dataType": "refObject",
        "properties": {
            "rawType": {"dataType":"string","required":true},
            "shortType": {"ref":"PossibleShort"},
            "type": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24Journey_Date_": {
        "dataType": "refObject",
        "properties": {
            "cancelled": {"dataType":"boolean"},
            "changeDuration": {"dataType":"double"},
            "duration": {"dataType":"double"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "product": {"ref":"ProdL"},
            "raw": {"ref":"SecL"},
            "segmentDestination": {"ref":"Station","required":true},
            "segmentStart": {"ref":"Station","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_Date_"},"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "tarifSet": {"dataType":"array","array":{"ref":"Route%24TarifFareSet"}},
            "plannedSequence": {"ref":"PlannedSequence"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24JourneySegmentTrain": {
        "dataType": "refObject",
        "properties": {
            "cancelled": {"dataType":"boolean"},
            "changeDuration": {"dataType":"double"},
            "duration": {"dataType":"double"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "product": {"ref":"ProdL"},
            "raw": {"ref":"SecL"},
            "segmentDestination": {"ref":"Station","required":true},
            "segmentStart": {"ref":"Station","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_Date_"},"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "tarifSet": {"dataType":"array","array":{"ref":"Route%24TarifFareSet"}},
            "plannedSequence": {"ref":"PlannedSequence"},
            "type": {"dataType":"enum","enums":["JNY"],"required":true},
            "arrival": {"ref":"CommonStopInfo_Date_","required":true},
            "departure": {"ref":"CommonStopInfo_Date_","required":true},
            "wings": {"dataType":"array","array":{"ref":"Route%24Journey_Date_"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WalkStopInfo_Date_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"delay":{"dataType":"double"},"time":{"dataType":"datetime","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Coordinates": {
        "dataType": "refObject",
        "properties": {
            "lat": {"dataType":"double","required":true},
            "lng": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HafasStation": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
            "products": {"dataType":"array","array":{"dataType":"refAlias","ref":"ParsedProduct"}},
            "coordinates": {"ref":"Coordinates","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24JourneySegmentWalk": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["WALK"],"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "arrival": {"ref":"WalkStopInfo_Date_","required":true},
            "departure": {"ref":"WalkStopInfo_Date_","required":true},
            "duration": {"dataType":"integer","required":true},
            "segmentStart": {"ref":"HafasStation","required":true},
            "segmentDestination": {"ref":"HafasStation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24JourneySegment": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"Route%24JourneySegmentTrain"},{"ref":"Route%24JourneySegmentWalk"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SDays": {
        "dataType": "refObject",
        "properties": {
            "sDaysR": {"dataType":"string","required":true},
            "sDaysI": {"dataType":"string","required":true},
            "sDaysB": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TarifFare": {
        "dataType": "refObject",
        "properties": {
            "prc": {"dataType":"double","required":true},
            "isFromPrice": {"dataType":"boolean","required":true},
            "isBookable": {"dataType":"boolean","required":true},
            "isUpsell": {"dataType":"boolean","required":true},
            "targetCtx": {"dataType":"string","required":true},
            "buttonText": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TarifFareSet": {
        "dataType": "refObject",
        "properties": {
            "fareL": {"dataType":"array","array":{"ref":"TarifFare"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HafasTarifResponse": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["OK"]},{"dataType":"string"}],"required":true},
            "fareSetL": {"dataType":"array","array":{"ref":"TarifFareSet"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SotCtxt": {
        "dataType": "refObject",
        "properties": {
            "cnLocX": {"dataType":"double","required":true},
            "calcDate": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "locMode": {"dataType":"string","required":true},
            "pLocX": {"dataType":"double","required":true},
            "reqMode": {"dataType":"string","required":true},
            "sectX": {"dataType":"double","required":true},
            "calcTime": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OutConL": {
        "dataType": "refObject",
        "properties": {
            "isNotRdbl": {"dataType":"boolean"},
            "cid": {"dataType":"string","required":true},
            "date": {"dataType":"string","required":true},
            "dur": {"dataType":"string","required":true},
            "chg": {"dataType":"double","required":true},
            "sDays": {"ref":"SDays","required":true},
            "dep": {"ref":"CommonDeparture","required":true},
            "arr": {"ref":"CommonArrival","required":true},
            "secL": {"dataType":"array","array":{"dataType":"refAlias","ref":"SecL"},"required":true},
            "ctxRecon": {"dataType":"string","required":true},
            "trfRes": {"ref":"HafasTarifResponse"},
            "conSubscr": {"dataType":"string","required":true},
            "resState": {"dataType":"string","required":true},
            "resRecommendation": {"dataType":"string","required":true},
            "recState": {"dataType":"string","required":true},
            "sotRating": {"dataType":"double","required":true},
            "isSotCon": {"dataType":"boolean","required":true},
            "showARSLink": {"dataType":"boolean","required":true},
            "sotCtxt": {"ref":"SotCtxt","required":true},
            "cksum": {"dataType":"string","required":true},
            "cksumDti": {"dataType":"string","required":true},
            "msgL": {"dataType":"array","array":{"ref":"MsgL"},"required":true},
            "dTrnCmpSX": {"ref":"TrnCmpSX","required":true},
            "freq": {"ref":"Freq","required":true},
            "isAlt": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SingleRoute_number_": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_number_","required":true},
            "departure": {"ref":"CommonStopInfo_number_","required":true},
            "isRideable": {"dataType":"boolean","required":true},
            "checksum": {"dataType":"string","required":true},
            "cid": {"dataType":"string","required":true},
            "date": {"dataType":"double","required":true},
            "duration": {"dataType":"integer","required":true,"validators":{"isInt":{"errorMsg":"in ms"}}},
            "changes": {"dataType":"integer","required":true},
            "segments": {"dataType":"array","array":{"dataType":"refAlias","ref":"Route%24JourneySegment"},"required":true},
            "segmentTypes": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "tarifSet": {"dataType":"array","array":{"ref":"Route%24TarifFareSet"}},
            "raw": {"ref":"OutConL"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RoutingResult_number_": {
        "dataType": "refObject",
        "properties": {
            "routes": {"dataType":"array","array":{"ref":"SingleRoute_number_"},"required":true},
            "context": {"dataType":"nestedObjectLiteral","nestedProperties":{"later":{"dataType":"string","required":true},"earlier":{"dataType":"string","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchVia": {
        "dataType": "refObject",
        "properties": {
            "evaId": {"dataType":"string","required":true},
            "minChangeTime": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JnyCl": {
        "dataType": "refEnum",
        "enums": [1,2],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TravelerType": {
        "dataType": "refEnum",
        "enums": ["E","K","B"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoyalityCard": {
        "dataType": "refEnum",
        "enums": ["BC25First","BC25Second","BC50First","BC50Second","SHCard","ATVorteilscard","CHGeneral","CHHalfWithRailplus","CHHalfWithoutRailplus","NLWithRailplus","NLWithoutRailplus","BC100First","BC100Second"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchTraveler": {
        "dataType": "refObject",
        "properties": {
            "type": {"ref":"TravelerType","required":true},
            "loyalityCard": {"ref":"LoyalityCard"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchTarifRequest": {
        "dataType": "refObject",
        "properties": {
            "class": {"ref":"JnyCl","required":true},
            "traveler": {"dataType":"array","array":{"ref":"TripSearchTraveler"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchOptionsV2": {
        "dataType": "refObject",
        "properties": {
            "economic": {"dataType":"boolean"},
            "getIV": {"dataType":"boolean"},
            "getPasslist": {"dataType":"boolean"},
            "getPolyline": {"dataType":"boolean"},
            "numF": {"dataType":"double"},
            "ctxScr": {"dataType":"string"},
            "ushrp": {"dataType":"boolean"},
            "start": {"dataType":"string","required":true},
            "destination": {"dataType":"string","required":true},
            "time": {"dataType":"double"},
            "transferTime": {"dataType":"double"},
            "maxChanges": {"dataType":"double"},
            "searchForDeparture": {"dataType":"boolean"},
            "onlyRegional": {"dataType":"boolean"},
            "tarif": {"ref":"TripSearchTarifRequest"},
            "via": {"dataType":"array","array":{"ref":"TripSearchVia"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24ValidDepartureStop_Date_": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_Date_"},
            "departure": {"ref":"CommonStopInfo_Date_","required":true},
            "station": {"ref":"Station","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24ValidArrivalStop_Date_": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_Date_","required":true},
            "departure": {"ref":"CommonStopInfo_Date_"},
            "station": {"ref":"Station","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedJourneyDetails": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "jid": {"dataType":"string","required":true},
            "firstStop": {"ref":"Route%24ValidDepartureStop_Date_","required":true},
            "lastStop": {"ref":"Route%24ValidArrivalStop_Date_","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_Date_"},"required":true},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ArrivalStationBoardEntry": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "cancelled": {"dataType":"boolean"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_Date_"}},
            "currentStation": {"ref":"HafasStation","required":true},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "arrival": {"ref":"CommonStopInfo_Date_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DepartureStationBoardEntry": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "cancelled": {"dataType":"boolean"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_Date_"}},
            "currentStation": {"ref":"HafasStation","required":true},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "departure": {"ref":"CommonStopInfo_Date_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedJourneyMatchResponse": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_Date_"},"required":true},
            "jid": {"dataType":"string","required":true},
            "firstStop": {"ref":"Route%24Stop_Date_","required":true},
            "lastStop": {"ref":"Route%24Stop_Date_","required":true},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyMatchOptions": {
        "dataType": "refObject",
        "properties": {
            "trainName": {"dataType":"string","required":true},
            "initialDepartureDate": {"dataType":"datetime"},
            "jnyFltrL": {"dataType":"array","array":{"ref":"JourneyFilter"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedSearchOnTripResponse": {
        "dataType": "refObject",
        "properties": {
            "cancelled": {"dataType":"boolean"},
            "changeDuration": {"dataType":"double"},
            "duration": {"dataType":"double"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "product": {"ref":"ProdL"},
            "raw": {"ref":"SecL"},
            "segmentDestination": {"ref":"Station","required":true},
            "segmentStart": {"ref":"Station","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_Date_"},"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "tarifSet": {"dataType":"array","array":{"ref":"Route%24TarifFareSet"}},
            "plannedSequence": {"ref":"PlannedSequence"},
            "type": {"dataType":"enum","enums":["JNY"],"required":true},
            "arrival": {"ref":"CommonStopInfo_Date_","required":true},
            "departure": {"ref":"CommonStopInfo_Date_","required":true},
            "wings": {"dataType":"array","array":{"ref":"Route%24Journey_Date_"}},
            "currentStop": {"ref":"Route%24Stop_Date_"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SingleRoute": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_Date_","required":true},
            "departure": {"ref":"CommonStopInfo_Date_","required":true},
            "isRideable": {"dataType":"boolean","required":true},
            "checksum": {"dataType":"string","required":true},
            "cid": {"dataType":"string","required":true},
            "date": {"dataType":"datetime","required":true},
            "duration": {"dataType":"integer","required":true,"validators":{"isInt":{"errorMsg":"in ms"}}},
            "changes": {"dataType":"integer","required":true},
            "segments": {"dataType":"array","array":{"dataType":"refAlias","ref":"Route%24JourneySegment"},"required":true},
            "segmentTypes": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "tarifSet": {"dataType":"array","array":{"ref":"Route%24TarifFareSet"}},
            "raw": {"ref":"OutConL"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AllowedSotMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["JI"]},{"dataType":"enum","enums":["RC"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SearchOnTripBody": {
        "dataType": "refObject",
        "properties": {
            "sotMode": {"ref":"AllowedSotMode","required":true},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24ValidDepartureStop_number_": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_number_"},
            "departure": {"ref":"CommonStopInfo_number_","required":true},
            "station": {"ref":"Station","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24ValidArrivalStop_number_": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_number_","required":true},
            "departure": {"ref":"CommonStopInfo_number_"},
            "station": {"ref":"Station","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24Stop_number_": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_number_"},
            "departure": {"ref":"CommonStopInfo_number_"},
            "station": {"ref":"Station","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedJourneyDetails_number_": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "jid": {"dataType":"string","required":true},
            "firstStop": {"ref":"Route%24ValidDepartureStop_number_","required":true},
            "lastStop": {"ref":"Route%24ValidArrivalStop_number_","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_number_"},"required":true},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24Journey_number_": {
        "dataType": "refObject",
        "properties": {
            "cancelled": {"dataType":"boolean"},
            "changeDuration": {"dataType":"double"},
            "duration": {"dataType":"double"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "product": {"ref":"ProdL"},
            "raw": {"ref":"SecL"},
            "segmentDestination": {"ref":"Station","required":true},
            "segmentStart": {"ref":"Station","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_number_"},"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "tarifSet": {"dataType":"array","array":{"ref":"Route%24TarifFareSet"}},
            "plannedSequence": {"ref":"PlannedSequence"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedSearchOnTripResponse_number_": {
        "dataType": "refObject",
        "properties": {
            "cancelled": {"dataType":"boolean"},
            "changeDuration": {"dataType":"double"},
            "duration": {"dataType":"double"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "product": {"ref":"ProdL"},
            "raw": {"ref":"SecL"},
            "segmentDestination": {"ref":"Station","required":true},
            "segmentStart": {"ref":"Station","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_number_"},"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "tarifSet": {"dataType":"array","array":{"ref":"Route%24TarifFareSet"}},
            "plannedSequence": {"ref":"PlannedSequence"},
            "type": {"dataType":"enum","enums":["JNY"],"required":true},
            "arrival": {"ref":"CommonStopInfo_number_","required":true},
            "departure": {"ref":"CommonStopInfo_number_","required":true},
            "wings": {"dataType":"array","array":{"ref":"Route%24Journey_number_"}},
            "currentStop": {"ref":"Route%24Stop_number_"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ArrivalStationBoardEntry_number_": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "cancelled": {"dataType":"boolean"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_number_"}},
            "currentStation": {"ref":"HafasStation","required":true},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "arrival": {"ref":"CommonStopInfo_number_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DepartureStationBoardEntry_number_": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "cancelled": {"dataType":"boolean"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_number_"}},
            "currentStation": {"ref":"HafasStation","required":true},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "departure": {"ref":"CommonStopInfo_number_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedJourneyMatchResponse_number_": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_number_"},"required":true},
            "jid": {"dataType":"string","required":true},
            "firstStop": {"ref":"Route%24Stop_number_","required":true},
            "lastStop": {"ref":"Route%24Stop_number_","required":true},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyMatchOptions_number_": {
        "dataType": "refObject",
        "properties": {
            "trainName": {"dataType":"string","required":true},
            "initialDepartureDate": {"dataType":"double"},
            "jnyFltrL": {"dataType":"array","array":{"ref":"JourneyFilter"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SingleParsedJourneyGeoPos_Date_": {
        "dataType": "refObject",
        "properties": {
            "jid": {"dataType":"string","required":true},
            "date": {"dataType":"datetime","required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "position": {"ref":"Coordinates","required":true},
            "stops": {"dataType":"array","array":{"ref":"Route%24Stop_Date_"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedJourneyGeoPosResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"array","array":{"ref":"SingleParsedJourneyGeoPos_Date_"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InOutMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["B"]},{"dataType":"enum","enums":["I"]},{"dataType":"enum","enums":["N"]},{"dataType":"enum","enums":["O"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyTrainPosMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["CALC"]},{"dataType":"enum","enums":["CALC_FOR_REPORT"]},{"dataType":"enum","enums":["CALC_ONLY"]},{"dataType":"enum","enums":["CALC_REPORT"]},{"dataType":"enum","enums":["REPORT_ONLY"]},{"dataType":"enum","enums":["REPORT_ONLY_WITH_STOPS"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyGeoPosRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "ageOfReport": {"dataType":"boolean"},
            "date": {"dataType":"string"},
            "time": {"dataType":"string"},
            "getSimpleTrainComposition": {"dataType":"boolean"},
            "getUnmatched": {"dataType":"boolean"},
            "inOut": {"ref":"InOutMode"},
            "jnyFltrL": {"dataType":"array","array":{"ref":"JourneyFilter"}},
            "locL": {"dataType":"array","array":{"ref":"OptionalLocL"}},
            "maxJny": {"dataType":"boolean"},
            "onlyRT": {"dataType":"boolean"},
            "perSize": {"dataType":"double"},
            "perStep": {"dataType":"double"},
            "rect": {"ref":"GeoRect"},
            "ring": {"ref":"GeoRing"},
            "rtMsgStatus": {"dataType":"boolean"},
            "trainPosMode": {"ref":"JourneyTrainPosMode"},
            "zoom": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyGeoPosOptions": {
        "dataType": "refAlias",
        "type": {"ref":"JourneyGeoPosRequestOptions","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SingleRoute_Date_": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo_Date_","required":true},
            "departure": {"ref":"CommonStopInfo_Date_","required":true},
            "isRideable": {"dataType":"boolean","required":true},
            "checksum": {"dataType":"string","required":true},
            "cid": {"dataType":"string","required":true},
            "date": {"dataType":"datetime","required":true},
            "duration": {"dataType":"integer","required":true,"validators":{"isInt":{"errorMsg":"in ms"}}},
            "changes": {"dataType":"integer","required":true},
            "segments": {"dataType":"array","array":{"dataType":"refAlias","ref":"Route%24JourneySegment"},"required":true},
            "segmentTypes": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "tarifSet": {"dataType":"array","array":{"ref":"Route%24TarifFareSet"}},
            "raw": {"ref":"OutConL"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RoutingResult_Date_": {
        "dataType": "refObject",
        "properties": {
            "routes": {"dataType":"array","array":{"ref":"SingleRoute_Date_"},"required":true},
            "context": {"dataType":"nestedObjectLiteral","nestedProperties":{"later":{"dataType":"string","required":true},"earlier":{"dataType":"string","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchOptionsV3": {
        "dataType": "refObject",
        "properties": {
            "economic": {"dataType":"boolean"},
            "getIV": {"dataType":"boolean"},
            "getPasslist": {"dataType":"boolean"},
            "getPolyline": {"dataType":"boolean"},
            "numF": {"dataType":"double"},
            "ctxScr": {"dataType":"string"},
            "ushrp": {"dataType":"boolean"},
            "start": {"dataType":"string","required":true},
            "destination": {"dataType":"string","required":true},
            "time": {"dataType":"datetime"},
            "transferTime": {"dataType":"double"},
            "maxChanges": {"dataType":"double"},
            "searchForDeparture": {"dataType":"boolean"},
            "onlyRegional": {"dataType":"boolean"},
            "tarif": {"ref":"TripSearchTarifRequest"},
            "via": {"dataType":"array","array":{"ref":"TripSearchVia"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WingInfo_number_": {
        "dataType": "refObject",
        "properties": {
            "station": {"dataType":"nestedObjectLiteral","nestedProperties":{"title":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"required":true},
            "pt": {"dataType":"double","required":true},
            "fl": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WingDefinition_number_": {
        "dataType": "refObject",
        "properties": {
            "start": {"ref":"WingInfo_number_"},
            "end": {"ref":"WingInfo_number_"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StopInfo_number_": {
        "dataType": "refObject",
        "properties": {
            "scheduledPlatform": {"dataType":"string"},
            "platform": {"dataType":"string"},
            "scheduledTime": {"dataType":"double","required":true},
            "time": {"dataType":"double","required":true},
            "delay": {"dataType":"integer"},
            "reihung": {"dataType":"boolean"},
            "messages": {"dataType":"array","array":{"ref":"RemL"}},
            "cancelled": {"dataType":"boolean"},
            "wingIds": {"dataType":"array","array":{"dataType":"string"}},
            "hidden": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IrisMessage_number_": {
        "dataType": "refObject",
        "properties": {
            "text": {"dataType":"string","required":true},
            "timestamp": {"dataType":"double"},
            "superseded": {"dataType":"boolean"},
            "priority": {"ref":"MessagePrio"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimIrisMessage_number_": {
        "dataType": "refObject",
        "properties": {
            "text": {"dataType":"string","required":true},
            "timestamp": {"dataType":"double"},
            "superseded": {"dataType":"boolean"},
            "priority": {"ref":"MessagePrio"},
            "head": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Message_number_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"IrisMessage_number_"},{"ref":"HimIrisMessage_number_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Messages_number_": {
        "dataType": "refObject",
        "properties": {
            "qos": {"dataType":"array","array":{"ref":"IrisMessage_number_"},"required":true},
            "delay": {"dataType":"array","array":{"ref":"IrisMessage_number_"},"required":true},
            "him": {"dataType":"array","array":{"ref":"HimIrisMessage_number_"},"required":true},
        },
        "additionalProperties": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message_number_"}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Abfahrt_number_": {
        "dataType": "refObject",
        "properties": {
            "initialDeparture": {"dataType":"double","required":true},
            "arrival": {"ref":"StopInfo_number_"},
            "auslastung": {"dataType":"boolean","required":true},
            "currentStation": {"ref":"Station","required":true},
            "departure": {"ref":"StopInfo_number_"},
            "destination": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "mediumId": {"dataType":"string","required":true},
            "messages": {"ref":"Messages_number_","required":true},
            "platform": {"dataType":"string","required":true},
            "productClass": {"dataType":"string","required":true},
            "rawId": {"dataType":"string","required":true},
            "ref": {"ref":"SubstituteRef"},
            "reihung": {"dataType":"boolean","required":true},
            "route": {"dataType":"array","array":{"ref":"Stop"},"required":true},
            "scheduledDestination": {"dataType":"string","required":true},
            "scheduledPlatform": {"dataType":"string","required":true},
            "substitute": {"dataType":"boolean"},
            "train": {"ref":"TrainInfo","required":true},
            "hiddenReihung": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Wings_number_": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": {"ref":"Abfahrt_number_"},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AbfahrtenResult_number_": {
        "dataType": "refObject",
        "properties": {
            "departures": {"dataType":"array","array":{"ref":"Abfahrt_number_"},"required":true},
            "lookbehind": {"dataType":"array","array":{"ref":"Abfahrt_number_"},"required":true},
            "wings": {"ref":"Wings_number_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WingInfo_Date_": {
        "dataType": "refObject",
        "properties": {
            "station": {"dataType":"nestedObjectLiteral","nestedProperties":{"title":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"required":true},
            "pt": {"dataType":"datetime","required":true},
            "fl": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WingDefinition": {
        "dataType": "refObject",
        "properties": {
            "start": {"ref":"WingInfo_Date_"},
            "end": {"ref":"WingInfo_Date_"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdditionalFahrzeugInfo": {
        "dataType": "refObject",
        "properties": {
            "klasse": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":[0]},{"dataType":"enum","enums":[1]},{"dataType":"enum","enums":[2]},{"dataType":"enum","enums":[3]},{"dataType":"enum","enums":[4]}],"required":true},
            "icons": {"dataType":"nestedObjectLiteral","nestedProperties":{"toddler":{"dataType":"boolean"},"family":{"dataType":"boolean"},"info":{"dataType":"boolean"},"quiet":{"dataType":"boolean"},"disabled":{"dataType":"boolean"},"bike":{"dataType":"boolean"},"wheelchair":{"dataType":"boolean"},"dining":{"dataType":"boolean"}},"required":true},
            "comfort": {"dataType":"boolean"},
            "comfortSeats": {"dataType":"string"},
            "disabledSeats": {"dataType":"string"},
            "familySeats": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Fahrzeugausstattung": {
        "dataType": "refObject",
        "properties": {
            "anzahl": {"dataType":"string","required":true},
            "ausstattungsart": {"dataType":"string","required":true},
            "bezeichnung": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FahrzeugKategorie": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["DOPPELSTOCKSTEUERWAGENERSTEZWEITEKLASSE"]},{"dataType":"enum","enums":["DOPPELSTOCKSTEUERWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["DOPPELSTOCKWAGENERSTEKLASSE"]},{"dataType":"enum","enums":["DOPPELSTOCKWAGENERSTEZWEITEKLASSE"]},{"dataType":"enum","enums":["DOPPELSTOCKWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["HALBSPEISEWAGENERSTEKLASSE"]},{"dataType":"enum","enums":["HALBSPEISEWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["LOK"]},{"dataType":"enum","enums":["REISEZUGWAGENERSTEKLASSE"]},{"dataType":"enum","enums":["REISEZUGWAGENERSTEZWEITEKLASSE"]},{"dataType":"enum","enums":["REISEZUGWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["SPEISEWAGEN"]},{"dataType":"enum","enums":["STEUERWAGENERSTEKLASSE"]},{"dataType":"enum","enums":["STEUERWAGENERSTEZWEITEKLASSE"]},{"dataType":"enum","enums":["STEUERWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["TRIEBKOPF"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Position": {
        "dataType": "refObject",
        "properties": {
            "endemeter": {"dataType":"string","required":true},
            "endeprozent": {"dataType":"string","required":true},
            "startmeter": {"dataType":"string","required":true},
            "startprozent": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Fahrzeug": {
        "dataType": "refObject",
        "properties": {
            "allFahrzeugausstattung": {"dataType":"array","array":{"ref":"Fahrzeugausstattung"},"required":true},
            "kategorie": {"ref":"FahrzeugKategorie","required":true},
            "fahrzeugnummer": {"dataType":"string","required":true},
            "orientierung": {"dataType":"string","required":true},
            "positioningruppe": {"dataType":"string","required":true},
            "fahrzeugsektor": {"dataType":"string","required":true},
            "fahrzeugtyp": {"dataType":"string","required":true},
            "wagenordnungsnummer": {"dataType":"string","required":true},
            "positionamhalt": {"ref":"Position","required":true},
            "status": {"dataType":"string","required":true},
            "additionalInfo": {"ref":"AdditionalFahrzeugInfo","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AvailableBR": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["401"]},{"dataType":"enum","enums":["402"]},{"dataType":"enum","enums":["403"]},{"dataType":"enum","enums":["406"]},{"dataType":"enum","enums":["407"]},{"dataType":"enum","enums":["410.1"]},{"dataType":"enum","enums":["411"]},{"dataType":"enum","enums":["412"]},{"dataType":"enum","enums":["415"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AvailableIdentifier": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"AvailableBR"},{"dataType":"enum","enums":["401.LDV"]},{"dataType":"enum","enums":["401.9"]},{"dataType":"enum","enums":["411.S1"]},{"dataType":"enum","enums":["411.S2"]},{"dataType":"enum","enums":["412.7"]},{"dataType":"enum","enums":["412.13"]},{"dataType":"enum","enums":["403.R"]},{"dataType":"enum","enums":["403.S1"]},{"dataType":"enum","enums":["403.S2"]},{"dataType":"enum","enums":["406.R"]},{"dataType":"enum","enums":["IC2.TWIN"]},{"dataType":"enum","enums":["IC2.KISS"]},{"dataType":"enum","enums":["MET"]},{"dataType":"enum","enums":["TGV"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BRInfo": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "BR": {"ref":"AvailableBR"},
            "identifier": {"ref":"AvailableIdentifier"},
            "noPdf": {"dataType":"boolean"},
            "country": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["DE"]},{"dataType":"enum","enums":["AT"]}]},
            "showBRInfo": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BaseFahrzeug": {
        "dataType": "refObject",
        "properties": {
            "allFahrzeugausstattung": {"dataType":"array","array":{"ref":"Fahrzeugausstattung"},"required":true},
            "kategorie": {"ref":"FahrzeugKategorie","required":true},
            "fahrzeugnummer": {"dataType":"string","required":true},
            "orientierung": {"dataType":"string","required":true},
            "positioningruppe": {"dataType":"string","required":true},
            "fahrzeugsektor": {"dataType":"string","required":true},
            "fahrzeugtyp": {"dataType":"string","required":true},
            "wagenordnungsnummer": {"dataType":"string","required":true},
            "positionamhalt": {"ref":"Position","required":true},
            "status": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Fahrzeuggruppe": {
        "dataType": "refObject",
        "properties": {
            "allFahrzeug": {"dataType":"array","array":{"ref":"Fahrzeug"},"required":true},
            "fahrzeuggruppebezeichnung": {"dataType":"string","required":true},
            "zielbetriebsstellename": {"dataType":"string","required":true},
            "startbetriebsstellename": {"dataType":"string","required":true},
            "verkehrlichezugnummer": {"dataType":"string","required":true},
            "goesToFrance": {"dataType":"boolean","required":true},
            "startPercentage": {"dataType":"double","required":true},
            "endPercentage": {"dataType":"double","required":true},
            "tzn": {"dataType":"string"},
            "name": {"dataType":"string"},
            "br": {"ref":"BRInfo"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BaseFahrzeuggruppe": {
        "dataType": "refObject",
        "properties": {
            "allFahrzeug": {"dataType":"array","array":{"ref":"BaseFahrzeug"},"required":true},
            "fahrzeuggruppebezeichnung": {"dataType":"string","required":true},
            "zielbetriebsstellename": {"dataType":"string","required":true},
            "startbetriebsstellename": {"dataType":"string","required":true},
            "verkehrlichezugnummer": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Sektor": {
        "dataType": "refObject",
        "properties": {
            "positionamgleis": {"ref":"Position","required":true},
            "sektorbezeichnung": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Halt": {
        "dataType": "refObject",
        "properties": {
            "abfahrtszeit": {"dataType":"string"},
            "ankunftszeit": {"dataType":"string"},
            "bahnhofsname": {"dataType":"string","required":true},
            "evanummer": {"dataType":"string","required":true},
            "gleisbezeichnung": {"dataType":"string"},
            "haltid": {"dataType":"string","required":true},
            "rl100": {"dataType":"string","required":true},
            "allSektor": {"dataType":"array","array":{"ref":"Sektor"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Formation": {
        "dataType": "refObject",
        "properties": {
            "fahrtrichtung": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["VORWAERTS"]},{"dataType":"enum","enums":["RUCKWAERTS"]}],"required":true},
            "allFahrzeuggruppe": {"dataType":"array","array":{"ref":"Fahrzeuggruppe"},"required":true},
            "halt": {"ref":"Halt","required":true},
            "liniebezeichnung": {"dataType":"string","required":true},
            "zuggattung": {"dataType":"string","required":true},
            "zugnummer": {"dataType":"string","required":true},
            "serviceid": {"dataType":"string","required":true},
            "planstarttag": {"dataType":"string","required":true},
            "fahrtid": {"dataType":"string","required":true},
            "istplaninformation": {"dataType":"boolean","required":true},
            "isActuallyIC": {"dataType":"boolean","required":true},
            "reportedZuggattung": {"dataType":"string","required":true},
            "differentDestination": {"dataType":"boolean"},
            "differentZugnummer": {"dataType":"boolean"},
            "scale": {"dataType":"double","required":true},
            "startPercentage": {"dataType":"double","required":true},
            "endPercentage": {"dataType":"double","required":true},
            "realFahrtrichtung": {"dataType":"boolean","required":true},
            "isRealtime": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SBBCoordinates": {
        "dataType": "refObject",
        "properties": {
            "latitude": {"dataType":"double","required":true},
            "longitude": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SBBStation": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
            "location": {"ref":"SBBCoordinates","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RoutingOptions": {
        "dataType": "refObject",
        "properties": {
            "start": {"dataType":"string","required":true},
            "destination": {"dataType":"string","required":true},
            "time": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StationSearchType": {
        "dataType": "refEnum",
        "enums": ["default","hafas","openData","openDataOffline","stationsData","businessHub","sbb"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IrisStation": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "meta": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "eva": {"dataType":"string","required":true},
            "ds100": {"dataType":"string","required":true},
            "db": {"dataType":"string","required":true},
            "creationts": {"dataType":"string","required":true},
            "p": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IrisStationWithRelated": {
        "dataType": "refObject",
        "properties": {
            "station": {"ref":"IrisStation","required":true},
            "relatedStations": {"dataType":"array","array":{"ref":"IrisStation"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Address": {
        "dataType": "refObject",
        "properties": {
            "city": {"dataType":"string","required":true},
            "postalCode": {"dataType":"string","required":true},
            "street": {"dataType":"string","required":true},
            "state": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripleSCenter": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "publicPhoneNumber": {"dataType":"string","required":true},
            "publicFaxNumber": {"dataType":"string","required":true},
            "internalPhoneNumber": {"dataType":"string","required":true},
            "internalFaxNumber": {"dataType":"string","required":true},
            "address": {"ref":"Address","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BusinessHubCoordinates": {
        "dataType": "refObject",
        "properties": {
            "latitude": {"dataType":"double","required":true},
            "longitude": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Identifier_EVA_": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["EVA"],"required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Identifier_RIL100_": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["RIL100"],"required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Identifier_STADA_": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["STADA"],"required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Identifier_GLOBAL_ID_": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["GLOBAL_ID"],"required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "KnownIdentifier": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"Identifier_EVA_"},{"ref":"Identifier_RIL100_"},{"ref":"Identifier_STADA_"},{"ref":"Identifier_GLOBAL_ID_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StationManagement": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LocalTransportAuthority": {
        "dataType": "refObject",
        "properties": {
            "shortName": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegionalUnit": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "shortName": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TimetableOffice": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Availability": {
        "dataType": "refObject",
        "properties": {
            "day": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["monday"]},{"dataType":"enum","enums":["tuesday"]},{"dataType":"enum","enums":["wednesday"]},{"dataType":"enum","enums":["thursday"]},{"dataType":"enum","enums":["friday"]},{"dataType":"enum","enums":["saturday"]},{"dataType":"enum","enums":["sunday"]}],"required":true},
            "openTime": {"dataType":"string","required":true},
            "closeTime": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DBInformation": {
        "dataType": "refObject",
        "properties": {
            "availability": {"dataType":"array","array":{"ref":"Availability"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LocalServiceStaff": {
        "dataType": "refObject",
        "properties": {
            "availability": {"dataType":"array","array":{"ref":"Availability"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Details": {
        "dataType": "refObject",
        "properties": {
            "ratingCategory": {"dataType":"double","required":true},
            "priceCategory": {"dataType":"double","required":true},
            "hasParking": {"dataType":"boolean","required":true},
            "hasBicycleParking": {"dataType":"boolean","required":true},
            "hasLocalPublicTransport": {"dataType":"boolean","required":true},
            "hasPublicFacilities": {"dataType":"boolean","required":true},
            "hasLockerSystem": {"dataType":"boolean","required":true},
            "hasTravelNecessities": {"dataType":"boolean","required":true},
            "hasSteplessAccess": {"dataType":"string","required":true},
            "mobilityService": {"dataType":"string","required":true},
            "hasWifi": {"dataType":"boolean","required":true},
            "hasTravelCenter": {"dataType":"boolean","required":true},
            "hasRailwayMission": {"dataType":"boolean","required":true},
            "hasDbLounge": {"dataType":"boolean","required":true},
            "hasLostAndFound": {"dataType":"boolean","required":true},
            "hasCardRental": {"dataType":"boolean","required":true},
            "stationManagement": {"ref":"StationManagement","required":true},
            "localTransportAuthority": {"ref":"LocalTransportAuthority","required":true},
            "regionalUnit": {"ref":"RegionalUnit","required":true},
            "timetableOffice": {"ref":"TimetableOffice","required":true},
            "dbInformation": {"ref":"DBInformation","required":true},
            "localServiceStaff": {"ref":"LocalServiceStaff","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DetailBusinessHubStation": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
            "ds100": {"dataType":"string"},
            "stada": {"dataType":"string"},
            "globalId": {"dataType":"string"},
            "location": {"ref":"BusinessHubCoordinates","required":true},
            "alternativeNames": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "identifiers": {"dataType":"array","array":{"dataType":"refAlias","ref":"KnownIdentifier"},"required":true},
            "address": {"ref":"Address","required":true},
            "details": {"ref":"Details","required":true},
            "tripleSCenter": {"ref":"TripleSCenter"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(router: KoaRouter) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        router.get('/api/bahnhof/v1/lageplan/:stationName/:evaId',
            async (context: any, next: any) => {
            const args = {
                    stationName: {"in":"path","name":"stationName","required":true,"dataType":"string"},
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new BahnhofControllerV1();

            const promise = controller.lageplan.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/businessHub/v1/stationOccupancy/:evaId/:date',
            async (context: any, next: any) => {
            const args = {
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
                    date: {"in":"path","name":"date","required":true,"dataType":"datetime"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new BusinessHubV1Controller();

            const promise = controller.stationOccupancy.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/businessHub/v1/stationQuays/:evaId',
            async (context: any, next: any) => {
            const args = {
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new BusinessHubV1Controller();

            const promise = controller.quays.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/businessHub/v1/fasta/:stadaId',
            async (context: any, next: any) => {
            const args = {
                    stadaId: {"in":"path","name":"stadaId","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new BusinessHubV1Controller();

            const promise = controller.fasta.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/experimental/himMessages',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    himIds: {"in":"query","name":"himIds","required":true,"dataType":"array","array":{"dataType":"string"}},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.himMessages.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/experimental/HimSearch',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    options: {"in":"body","name":"options","required":true,"ref":"HimSearchRequestOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.himSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/experimental/irisCompatibleAbfahrten/:evaId',
            async (context: any, next: any) => {
            const args = {
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.irisCompatibleAbfahrten.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/experimental/JourneyTree',
            async (context: any, next: any) => {
            const args = {
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyTreeRequestOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.JourneyTree.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/experimental/JourneyGraph',
            async (context: any, next: any) => {
            const args = {
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyGraphRequestOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.JourneyGraph.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/experimental/JourneyCourse',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyCourseRequestOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.JourneyCourse.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/subscribe/create',
            async (context: any, next: any) => {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"SubscrCreateOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasSubscribeController();

            const promise = controller.create.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/subscribe/delete',
            async (context: any, next: any) => {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"SubscrDeleteOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasSubscribeController();

            const promise = controller.delete.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/subscribe/createUser',
            async (context: any, next: any) => {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"SubscrUserCreateOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasSubscribeController();

            const promise = controller.createUser.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/subscribe/search',
            async (context: any, next: any) => {
            const args = {
                    userId: {"in":"query","name":"userId","required":true,"dataType":"string"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasSubscribeController();

            const promise = controller.search.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/subscribe/deleteUser',
            async (context: any, next: any) => {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"SubscrUserDeleteOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasSubscribeController();

            const promise = controller.deleteUser.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/subscribe/details',
            async (context: any, next: any) => {
            const args = {
                    userId: {"in":"query","name":"userId","required":true,"dataType":"string"},
                    subscribeId: {"in":"query","name":"subscribeId","required":true,"dataType":"double"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasSubscribeController();

            const promise = controller.details.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v2/tripSearch',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    body: {"in":"body","name":"body","required":true,"ref":"TripSearchOptionsV2"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.tripSearchV2.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/journeyDetails',
            async (context: any, next: any) => {
            const args = {
                    jid: {"in":"query","name":"jid","required":true,"dataType":"string"},
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.journeyDetails.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/auslastung/:start/:destination/:trainNumber/:time',
            async (context: any, next: any) => {
            const args = {
                    start: {"in":"path","name":"start","required":true,"dataType":"string"},
                    destination: {"in":"path","name":"destination","required":true,"dataType":"string"},
                    trainNumber: {"in":"path","name":"trainNumber","required":true,"dataType":"string"},
                    time: {"in":"path","name":"time","required":true,"dataType":"datetime"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.auslastung.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/arrivalStationBoard',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    station: {"in":"query","name":"station","required":true,"dataType":"string"},
                    date: {"in":"query","name":"date","dataType":"datetime"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.arrivalStationBoard.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/departureStationBoard',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    station: {"in":"query","name":"station","required":true,"dataType":"string"},
                    direction: {"in":"query","name":"direction","dataType":"string"},
                    date: {"in":"query","name":"date","dataType":"datetime"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.departureStationBoard.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v2/journeyMatch',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyMatchOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.postJourneyMatch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/details/:trainName',
            async (context: any, next: any) => {
            const args = {
                    trainName: {"in":"path","name":"trainName","required":true,"dataType":"string"},
                    stop: {"in":"query","name":"stop","dataType":"string"},
                    station: {"in":"query","name":"station","dataType":"string"},
                    date: {"in":"query","name":"date","dataType":"datetime"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.details.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v2/searchOnTrip',
            async (context: any, next: any) => {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"SearchOnTripBody"},
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.searchOnTrip.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/journeyDetails',
            async (context: any, next: any) => {
            const args = {
                    jid: {"in":"query","name":"jid","required":true,"dataType":"string"},
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.journeyDetailsv1.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v1/searchOnTrip',
            async (context: any, next: any) => {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"SearchOnTripBody"},
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.searchOnTrip.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/details/:trainName',
            async (context: any, next: any) => {
            const args = {
                    trainName: {"in":"path","name":"trainName","required":true,"dataType":"string"},
                    stop: {"in":"query","name":"stop","dataType":"string"},
                    station: {"in":"query","name":"station","dataType":"string"},
                    date: {"in":"query","name":"date","dataType":"double"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.details.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/auslastung/:start/:destination/:trainNumber/:time',
            async (context: any, next: any) => {
            const args = {
                    start: {"in":"path","name":"start","required":true,"dataType":"string"},
                    destination: {"in":"path","name":"destination","required":true,"dataType":"string"},
                    trainNumber: {"in":"path","name":"trainNumber","required":true,"dataType":"string"},
                    time: {"in":"path","name":"time","required":true,"dataType":"double"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.auslastung.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/arrivalStationBoard',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    station: {"in":"query","name":"station","required":true,"dataType":"string"},
                    date: {"in":"query","name":"date","dataType":"double"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.arrivalStationBoard.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/departureStationBoard',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    station: {"in":"query","name":"station","required":true,"dataType":"string"},
                    direction: {"in":"query","name":"direction","dataType":"string"},
                    date: {"in":"query","name":"date","dataType":"double"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.departureStationBoard.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v1/journeyMatch',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyMatchOptions_number_"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.postJourneyMatch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v1/enrichedJourneyMatch',
            async (context: any, next: any) => {
            const args = {
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyMatchOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.enrichedJourneyMatch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/geoStation',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    lat: {"in":"query","name":"lat","required":true,"dataType":"double"},
                    lng: {"in":"query","name":"lng","required":true,"dataType":"double"},
                    maxDist: {"default":1000,"in":"query","name":"maxDist","dataType":"double"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.geoStation.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/station/:searchTerm',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    searchTerm: {"in":"path","name":"searchTerm","required":true,"dataType":"string"},
                    type: {"in":"query","name":"type","dataType":"union","subSchemas":[{"dataType":"enum","enums":["S"]},{"dataType":"enum","enums":["ALL"]}]},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.station.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v1/journeyGeoPos',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    body: {"in":"body","name":"body","required":true,"ref":"JourneyGeoPosOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.journeyGeoPos.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/positionForTrain/:trainName',
            async (context: any, next: any) => {
            const args = {
                    trainName: {"in":"path","name":"trainName","required":true,"dataType":"string"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.positionForTrain.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v1/rawHafas',
            async (context: any, next: any) => {
            const args = {
                    body: {"in":"body","name":"body","required":true,"dataType":"any"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.rawHafas.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v3/tripSearch',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    body: {"in":"body","name":"body","required":true,"ref":"TripSearchOptionsV3"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV3();

            const promise = controller.tripSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/iris/v1/wings/:rawId1/:rawId2',
            async (context: any, next: any) => {
            const args = {
                    rawId1: {"in":"path","name":"rawId1","required":true,"dataType":"string"},
                    rawId2: {"in":"path","name":"rawId2","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new IrisControllerv1();

            const promise = controller.wings.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/iris/v1/abfahrten/:evaId',
            async (context: any, next: any) => {
            const args = {
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
                    lookahead: {"in":"query","name":"lookahead","dataType":"double"},
                    lookbehind: {"in":"query","name":"lookbehind","dataType":"double"},
                    type: {"in":"query","name":"type","dataType":"union","subSchemas":[{"dataType":"enum","enums":["open"]},{"dataType":"enum","enums":["default"]}]},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new IrisControllerv1();

            const promise = controller.abfahrten.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/iris/v2/wings/:rawId1/:rawId2',
            async (context: any, next: any) => {
            const args = {
                    rawId1: {"in":"path","name":"rawId1","required":true,"dataType":"string"},
                    rawId2: {"in":"path","name":"rawId2","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new IrisControllerv2();

            const promise = controller.wings.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/iris/v2/abfahrten/:evaId',
            async (context: any, next: any) => {
            const args = {
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
                    lookahead: {"in":"query","name":"lookahead","dataType":"double"},
                    lookbehind: {"in":"query","name":"lookbehind","dataType":"double"},
                    type: {"in":"query","name":"type","dataType":"union","subSchemas":[{"dataType":"enum","enums":["open"]},{"dataType":"enum","enums":["default"]}]},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new IrisControllerv2();

            const promise = controller.abfahrten.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/monitoring/wagen',
            async (context: any, next: any) => {
            const args = {
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungMonitoringController();

            const promise = controller.monitoring.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/v1/wagen/:trainNumber/:date',
            async (context: any, next: any) => {
            const args = {
                    trainNumber: {"in":"path","name":"trainNumber","required":true,"dataType":"string"},
                    date: {"in":"path","name":"date","required":true,"dataType":"double"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungControllerV1();

            const promise = controller.wagenreihung.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/v1/trainName/:tz',
            async (context: any, next: any) => {
            const args = {
                    tz: {"in":"path","name":"tz","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungControllerV1();

            const promise = controller.trainName.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/v1/forTZ/:tz',
            async (context: any, next: any) => {
            const args = {
                    tz: {"in":"path","name":"tz","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungControllerV1();

            const promise = controller.forTZ.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/v1/forNumber/:number',
            async (context: any, next: any) => {
            const args = {
                    number: {"in":"path","name":"number","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungControllerV1();

            const promise = controller.forNumber.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/v2/wagen/:trainNumber/:date',
            async (context: any, next: any) => {
            const args = {
                    trainNumber: {"in":"path","name":"trainNumber","required":true,"dataType":"string"},
                    date: {"in":"path","name":"date","required":true,"dataType":"datetime"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungControllerV2();

            const promise = controller.wagenreihung.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/sbb/experimental/station/:searchTerm',
            async (context: any, next: any) => {
            const args = {
                    searchTerm: {"in":"path","name":"searchTerm","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new SBBExperimentalController();

            const promise = controller.station.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/sbb/experimental/routing',
            async (context: any, next: any) => {
            const args = {
                    options: {"in":"body","name":"options","required":true,"ref":"RoutingOptions"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new SBBExperimentalController();

            const promise = controller.routing.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/station/v1/search/:searchTerm',
            async (context: any, next: any) => {
            const args = {
                    ctx: {"in":"request","name":"ctx","required":true,"dataType":"object"},
                    searchTerm: {"in":"path","name":"searchTerm","required":true,"dataType":"string"},
                    type: {"in":"query","name":"type","ref":"StationSearchType"},
                    max: {"in":"query","name":"max","dataType":"double"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StationController();

            const promise = controller.searchStation.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/station/v1/geoSearch',
            async (context: any, next: any) => {
            const args = {
                    lat: {"in":"query","name":"lat","required":true,"dataType":"double"},
                    lng: {"in":"query","name":"lng","required":true,"dataType":"double"},
                    radius: {"in":"query","name":"radius","dataType":"double"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StationController();

            const promise = controller.geoSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/station/v1/iris/:evaId',
            async (context: any, next: any) => {
            const args = {
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StationController();

            const promise = controller.irisSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/station/v1/station/:evaId',
            async (context: any, next: any) => {
            const args = {
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StationController();

            const promise = controller.stationDetails.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/station/v1/ds100/:ds100',
            async (context: any, next: any) => {
            const args = {
                    ds100: {"in":"path","name":"ds100","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (error) {
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StationController();

            const promise = controller.ds100.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
      return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function promiseHandler(controllerObj: any, promise: Promise<any>, context: any, successStatus: any, next: () => Promise<any>) {
      return Promise.resolve(promise)
        .then((data: any) => {
            let statusCode = successStatus;
            let headers;

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();

                statusCode = controllerObj.getStatus();
            }
            return returnHandler(context, next, statusCode, data, headers);
        })
        .catch((error: any) => {
            context.status = error.status || 500;
            context.throw(context.status, error.message, error);
        });
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(context: any, next: () => any, statusCode?: number, data?: any, headers: any={}) {
        if (!context.response.__tsoaResponded) {
            context.set(headers);

            if (data || data === false) { 
                context.body = data;
                context.status = 200;
            } else {
                context.status = 204;
            }

            if (statusCode) {
                context.status = statusCode;
            }

            context.response.__tsoaResponded = true;
            return next();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, context: any, next: () => any): any[] {
        const errorFields: FieldErrors = {};
        const values = Object.keys(args).map(key => {
            const name = args[key].name;
            switch (args[key].in) {
            case 'request':
                return context.request;
            case 'query':
                return validationService.ValidateParam(args[key], context.request.query[name], name, errorFields, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
            case 'path':
                return validationService.ValidateParam(args[key], context.params[name], name, errorFields, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
            case 'header':
                return validationService.ValidateParam(args[key], context.request.headers[name], name, errorFields, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
            case 'body':
                return validationService.ValidateParam(args[key], context.request.body, name, errorFields, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
            case 'body-prop':
                return validationService.ValidateParam(args[key], context.request.body[name], name, errorFields, 'body.', {"noImplicitAdditionalProperties":"silently-remove-extras"});
            case 'res':
                return responder(context, next);
            }
        });
        if (Object.keys(errorFields).length > 0) {
            throw new ValidateError(errorFields, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(context: any, next: () => any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
           returnHandler(context, next, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
