import City from "../../models/City.js";

export default async (req, res, next) => {
    try{
        let deleteCity = await City.findByIdAndDelete(req.params.id)
        if (deleteCity){
            return res.status(200).json({
                success: true,
                message: 'city deleted',
                response: deleteCity._id
            })
        }else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
       
      } catch(error){
        next (error)
      }
}