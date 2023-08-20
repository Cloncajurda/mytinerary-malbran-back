import City from "../../models/City.js";

export default async (req, res, next) => {
    try{
        console.log(req.query);
        //let objetoDeBusqueda = { admin_id:'64db6d52c60759e06aa0344e'}
        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id
        }
        if (req.query.City) {
            objetoDeBusqueda.City = new RegExp(req.query.city, 'i')
        }
        if (req.query.admin_id) {
            objetoDeOrdenamiento.City = req.query.sort
        }
        let allCities = await City.find(req.query,'country city photo smalldescription admin_id').populate('admin_id photo name mail -_id').sort(objetoDeOrdenamiento)
        if (allCities.lengh>0){
            return res.status(200).json({
                success: true,
                message: 'cities found',
                response: allCities
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