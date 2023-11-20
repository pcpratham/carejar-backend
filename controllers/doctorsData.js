const Doctors = require("../models/doctors");
const { faker } = require('@faker-js/faker');
// const faker = require('faker');

const categories = ['Dentist', 'Cardiologist', 'Dermatologist', 'Orthopedic'];

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPrice(){
    return (generateRandomNumber(2,10)*100);
}

function generateFakeDoctor(category) {
    return {
        name: faker.person.fullName(),
        category: category,
        experience: generateRandomNumber(1, 15),
        location: faker.location.streetAddress(),
        price: getPrice(),
        patients: generateRandomNumber(25, 80),
        rating: generateRandomNumber(90, 100),
        
    };
}



async function seedDatabase() {
    await Doctors.deleteMany({});
    for (const category of categories) {
        const doctors = Array.from({ length: 5 }, () => generateFakeDoctor(category));
        await Doctors.insertMany(doctors);
    }
}



exports.getData = async (req,res) => {

    await seedDatabase();
    try{
        console.log("route hitted ");
        const doctors = await Doctors.find({});
        if(!doctors){
            return res.status(404).json({
                success:false,
                message: "data not fetched",
            });
        }

        return res.status(200).json({
            success:true,
            message:"All doctors data fetched successfully",
            data:doctors
        });

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message: "error in data fetching",
        });
    }
}







