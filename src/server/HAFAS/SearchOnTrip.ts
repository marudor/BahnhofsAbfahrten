import { AllowedHafasProfile, HafasResponse, ParsedCommon } from 'types/HAFAS';
import { Journey } from './TripSearch/parse';
import {
  SearchOnTripRequest,
  SearchOnTripResponse,
} from 'types/HAFAS/SearchOnTrip';
import makeRequest from './Request';

const parseSearchOnTrip = (
  d: HafasResponse<SearchOnTripResponse>,
  common: ParsedCommon
) => {
  const journey = new Journey(d.svcResL[0].res.outConL[0], common).journey;

  return {
    ...journey,
    raw: d.svcResL[0].res,
  };
};

export default (
  req: SearchOnTripRequest['req'],
  profile?: AllowedHafasProfile
) => {
  const request: SearchOnTripRequest = {
    req,
    meth: 'SearchOnTrip',
  };

  return makeRequest(request, parseSearchOnTrip, profile);
};