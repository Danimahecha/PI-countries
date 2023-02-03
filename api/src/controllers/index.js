const { Activity } = require("../db");
const { activityCreator } = require("../utils");


class BaseModel {
    constructor(model) {
        this.model = model;
    }
    getAll = (req, res, next) => {
        return this.model.findAll()
            .then((result) => res.send(result))
            .catch((error) => next(error));
    };

    getId = (req, res, next) => {
        const id = req.params.id;
        return this.model.findByPk(id)
            .then((result) => res.send(result))
            .catch((error) => next(error));

    };

    getName = (req, res, next) => {
        const { name } = req.query
        return this.model.findAll({
            where: {
                name
            }
        })
            .then((result) => res.send(result))
            .catch((error) => next(error));

    };

    postActivities = (req, res, next) => {
        const { name, difficult, season, duration } = req.body;
        if (!name || !difficult || !season || !duration) {
            res.status(404).send('Debes ingresar todas propiedades');
        } else {

            const newActivity = activityCreator(req.body);
            return this.model.create({
                ...newActivity,
                id: uuidv4()
            })
                .then( async (activityCreated) => {
                await activityCreated.addCountry(this.model)
                return activityCreated})
                .then( async (activityCreated) =>{
                 const countryActivity = await Activity.findOne({
                     where: {
                         id: activityCreated.id
                     },
                     include: [this.model],
                 })
                return countryActivity;
                
                })
                .then((activityCreated) => res.send(activityCreated))
                .catch((error) => next(error));
        }

        
    };
};




module.exports = {
    BaseModel
};