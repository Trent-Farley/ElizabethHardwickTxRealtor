export default function handler(req, res){
    try{
        // console.log(req);
        return res.json({"hello" : "Hello"})
    }catch(e){
      return res.status(500).json({error: e});
    }
}