import express from 'express'
//import morgan from 'morgan'

import user_routes from './routes/user.routes'
import auth_routes from './routes/auth.routes'
import products_routes from './routes/products.routes'
import { create_roles } from './libs/initialSetup'

const app = express()
//create_roles()

//app.use(morgan('dev'))
app.set("json spaces", 4);

app.use( express.json() )
app.use( express.urlencoded({extended:false}) )

app.use('/users', user_routes)
app.use('/auth', auth_routes)
app.use('/products', products_routes)

export default app