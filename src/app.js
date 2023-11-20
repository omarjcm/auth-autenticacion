import express from 'express'

import user_routes from './routes/user.routes'

const app = express()

app.use( express.json() )
app.use( express.urlencoded({extended:false}) )

app.use('/users', user_routes)

export default app