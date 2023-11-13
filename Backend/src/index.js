import express from 'express'

const app = express()

app.get('/alumnos', (req, res) => res.send('Obteniendo alumnos'))

app.post('/alumnos', (req, res) => res.send('Creando alumnos'))

app.put('/alumnos', (req, res) => res.send('Actualizando alumnos'))

app.delete('/alumnos', (req, res) => res.send('Eliminando alumnos'))

app.listen(3000)
console.log('Server running on port 3000')

