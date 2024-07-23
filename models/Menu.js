const mongoose=require('mongoose')
const Menuschema = new mongoose.Schema({ 
    
    name:{
        type:String,
        requried:true,
    },
    price:{
        type:Number
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour']

    },
    ingredients:{
        type:[String],
        default:[]
        
    },
    num_sales:{
        type:Number,
        default:0
    }

});
const Menu = mongoose.model('Menu', Menuschema);

module.exports=Menu