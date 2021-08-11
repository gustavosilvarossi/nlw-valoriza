import express from "express";

const app = express();

app.listen(3000, () => console.log('Server is running'))

app.post('/test-post', (request, response) => {
    return response.send('Olá NLW método POST');
})

app.get('/test', (request, response) => {
    return response.send('Olá NLW');
})