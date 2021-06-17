import fetch from "node-fetch";
export default async function handler(req, res){
    try{
      let results = processInfo();
      return res.json({"info" : await results})
    }catch(e){
      console.error("Failed to fetch server-side");
      return res.status(500).json({error: e});
    }
}
let PARAMS = {
    "count": 240,
    "offset": 0,
    "sorts": {
        "0": {
            "listingContractDate": "desc"
        }
    },
    "terms": {
        "locationRect": {
            "minLat": 31.51298818853606,
            "maxLat": 33.71780518340581,
            "minLon": -98.64546854394531,
            "maxLon": -95.28365213769531
        },
        "teams": [
            "101918147"
        ],
        "bPropertyType": "For Sale",
        "freeSearch": true,
        "place": {
            "lat": 33.11449,
            "lon": -96.672736,
            "city": "Allen",
            "state": "TX",
            "placename": "Allen, TX",
            "placeType": "city",
            "placeId": "4801924"
        }
    },
    "listingLoadLevel": "Search"
  }

async function processInfo(){
  let req = await fetch("https://public-api-gateway-prod.kube.remax.booj.io/listings/search/run/",{
    method: 'POST',
    body: JSON.stringify(PARAMS),
    headers: {'Content-Type': 'application/json'}
  });
  let results = [];
  let everything = await req.json();
  everything.data.results.forEach(e => {
    results.push(parseListing(e));
  });
  return results
}
function parseListing(listing){
  let images = [];
  let url = listing.imageUrls.basePhotoUrl;
  listing.images.forEach(e => {
    images.push(url +"/" + e.versions.large.filename);
  })
  return {
    "price" : listing.listPrice,
    "remarks" : listing.publicRemarks,
    "city" : listing.city,
    "rooms" : listing.bedroomsTotal,
    "lotSizeSquareFeet": listing.lotSizeAcres,
    "imgs" : images,
    "bathrooms" : listing.bathroomsFull,
    "bathroomsHalf" : listing.bathroomsHalf,
    "title" : listing.geo[0].displayName
  };
}