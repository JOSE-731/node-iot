'use strict'
const Sequelize = require('sequelize')

//Singleton es un objeto que solo tiene una instancia. Cada vez que llamemos a una función no va a crear múltiples instancias.
let sequelize = null

module.exports = function setuDatabase (config){
    if(!sequelize){
        sequelize = new Sequelize(config)
    }

    return sequelize
}