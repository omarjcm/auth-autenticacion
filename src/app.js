import express from 'express'

import user_routes from './routes/user.routes'
import { create_roles } from './libs/initialSetup'

const app = express()
//create_roles()

app.use( express.json() )
app.use( express.urlencoded({extended:false}) )

app.use('/users', user_routes)

export default app