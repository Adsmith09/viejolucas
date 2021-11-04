import {configureStore} from '@reduxjs/toolkit'
import carritoRedux from './carritoRedux'
import usuarioRedux from './usuarioRedux'

export default configureStore({

    reducer:{
        carrito:carritoRedux,
        usuario: usuarioRedux,
    }

})