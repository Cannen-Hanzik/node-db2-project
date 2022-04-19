// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'Toyota',
        model: 'Tundra',
        mileage: 200000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1111111111111',
        make: 'Toyota',
        model: 'Corolla',
        mileage: 100000,
        title: 'salvage',
    },
    {
        vin: '1111111111111',
        make: 'Ford',
        model: 'Focus',
        mileage: 2000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert(cars);
}