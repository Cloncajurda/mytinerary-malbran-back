import { model,Schema,Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    name: { type:String,required:true },
    city_id: { type:String,ref:'cities',required:true },
    price: { type:Number,required:true },
    duration: { type:Number,required:true },
    //tags: { type:Array,required:true },
    tags: [{ type:String,required:true }],
    //tags: { type:[String],required:true },
    photo: { type:String,required:true }
},{
    timestamps: true    //agrega dos propiedades de tiempo (fecha de creación y fecha de ultima modificación)
})

let Itinerary = model(collection,schema)
export default Itinerary