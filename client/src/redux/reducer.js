import {
    GET_COUNTRIES,
    GET_COUNTRIES_BY_NAME,
    GET_COUNTRY_DETAIL,
    GET_ALL_ACTIVITIES,
    ORDER_COUNTRIES,
    POST_ACTIVITY,
    FILTER_COUNTRIES,
    CLEAN_COUNTRY,
    ERROR
} from './actions.js';

export const initialState = {
    countries: [],
    country: [],
    activity: {},
    formActivity:{},
    countriesOrder: [],
    activities:[],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesOrder: action.payload,
            };
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                country: action.payload,
            };
            case CLEAN_COUNTRY:
            return {
                ...state,
                country: action.payload,
            };
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                country: action.payload,
            };
        
            case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            };
        case ORDER_COUNTRIES:
            return {
                ...state,
                countries: action.payload.slice(),  
            };
            case FILTER_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                
            };
        case POST_ACTIVITY:
            return {
                ...state,
                formActivity: action.payload,
                activities: state.activities.concat(action.payload),
            };
            case ERROR:
                return{
                ...state,
                error: action.payload
                }
        default:
            return {
                ...state
            };
    };
};


export default reducer;