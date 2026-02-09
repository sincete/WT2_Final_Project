const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Year too old'],
        max: [new Date().getFullYear() + 1, 'Year cannot be in the future']
    },
    pricePerDay: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative']
    },
    available: {
        type: Boolean,
        default: true
    },
    bodyType: {
        type: String,
        enum: ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Minivan'],
        required: true
    },
    carClass: {
        type: String,
        enum: ['Economy', 'Business', 'Premium', 'Sport'],
        default: 'Economy'
    },
    city: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxLength: 1000
    },
    fuelLevel: {
        type: Number,
        min: 0,
        max: 100,
        default: 100
    },
    images: [{
        type: String
    }],
    availableDates: {
        from: { type: Date },
        to: { type: Date }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', carSchema);