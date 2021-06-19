import fetch from "node-fetch";
import ApiSchema from "../../models/ApiSchema";
export default async function handler(req, res){
    try{
      let results = processInfo();
      return res.json({"info" : await results})
    }catch(e){
      console.error("Failed to fetch server-side");
      return res.status(500).json({error: e});
    }
}
async function processInfo(){
  let req = await fetch("https://public-api-gateway-prod.kube.remax.booj.io/listings/search/run/",{
    method: 'POST',
    body: JSON.stringify(ApiSchema),
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