interface IProduct{
    name: string,
    brand: string,
    price: number,
    type: string,
    description: string,
    quantity: number,
    inStock: boolean,
}


// name: { type: String, required: true, trim: true },
//   brand: { type: String, required: true, trim: true },
//   price: {
//     type: Number,
//     required: true,
//     min: [0, "Price must be a positive number"],
//   },
//   type: {
//     type: String,
//     trim: true,
//     enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
//   },
//   description: { type: String, required: true, trim: true },
//   quantity: {
//     type: Number,
//     required: true,
//     min: [0, "Quantity must be a positive number"],
//   },
//   inStock: { type: Boolean, required: true, default: true },
// });