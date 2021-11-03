import { buscar} from "../../servicios/api";
import { TYPES } from "./carritoAction";

export const carritoInitialState = {
    carrito: [],
};

export function carritoReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = buscar('/producto',action.payload);

            
            console.log(newItem);

            return{
                ...state,
                carrito : [...state.carrito, newItem ]
            }
        }
            break;
        case TYPES.REMOVE_ONE_FROM_CART:

            break;
        case TYPES.REMOVE_ALL_FROM_CART:

            break;
        case TYPES.CLEAR_CART:

            break;

        default:
            return state;
            break;
    }
}