const { Activity, Country } = require('../db');
const { BaseModel } = require('./index.js');
const { v4: uuidv4 } = require('uuid')
const {activityCreator} = require('../utils')



class ActivityM extends BaseModel {
    constructor(model) {
        super(model);
    }
    postActivities = (req, res, next) => {
        const { name, difficult, season, duration } = req.body;
        if (!name || !difficult || !season || !duration) {
            res.status(404).send('Debes ingresar todas propiedades');
        } else {
           
            const newActivity = activityCreator(req.body);
            return this.model.create({
                ...newActivity,
                id: uuidv4(),
               
            },
            )
                .then(async (activityCreated) => {
                    await activityCreated.addCountries(req.body.countries)
                    return activityCreated
                })

                .then((activityCreated) => res.send(activityCreated))
                .catch((error) => next(error));
        }
    };

  

 
}

const activitiesController = new ActivityM(Activity);



module.exports = activitiesController;
