const Car = require('../models/Car');

exports.createCar = async (req, res) => {
    try {
        const carData = { ...req.body };

        if (req.files && req.files.length > 0) {
            carData.images = req.files.map(file => `/uploads/${file.filename}`);
        }

        carData.year = Number(carData.year);
        carData.pricePerDay = Number(carData.pricePerDay);
        carData.fuelLevel = Number(carData.fuelLevel);

        const newCar = new Car(carData);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (err) {
        console.error("Create Car Error:", err);
        res.status(400).json({ error: err.message });
    }
};

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json(car);
    } catch (err) {
        res.status(400).json({ error: 'Invalid ID' });
    }
};

exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCar);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};