const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send(' , I am Learning maruf node auto restart');

});

const users = [
    { id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '59794095' },
    { id: 1, name: 'smaruf', email: 'smaruf@gmail.com', phone: '59794095' },
    { id: 2, name: 'nadia', email: 'nadia@gmail.com', phone: '59794095' },
    { id: 3, name: 'sadia', email: 'sadia@gmail.com', phone: '59794095' },
    { id: 4, name: 'shushmita', email: 'shushmita@gmail.com', phone: '59794095' },
    { id: 5, name: 'sonia', email: 'sonia@gmail.com', phone: '59794095' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }

});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'pinaple', 'banana'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammi yammi fazli mangoes');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})