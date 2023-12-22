const mongoose = require('mongoose');
const inventorySchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    roomID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rooms', // The model name should match the one used in the Room model
    },
}, {
    timestamps: true
})

const inventoryModel = mongoose.model('Inventory', inventorySchema);




// const data_inventory=[
//     {
//         name: "Dulap_test",
//         quantity: 111,
//     },
//     // {
//     //     name: "Scaune2",
//     //     quantity: 3,
	
//     // }
// ]
// inventoryModel.create(data_inventory)
//   .then((createdProducts) => {
//     console.log('Products created:', createdProducts);
//   })
//   .catch((error) => {
//     console.error('Error creating products:', error);
//   });

module.exports = inventoryModel;