const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bd_tp', { useNewUrlParser: true, useUnifiedTopology: true });

const etudiantSchema = new mongoose.Schema({ // Schéma de la collection Etudiant
    nom: String,
    prenom: String,
    age: Number,
    portable: String,
    voiture: String,
    adresse: {
        adresserue: String,
        adresseville: String,
        codepostal: String
    },
    classe: String,
    math: [Number],
    anglais: [Number]
});

const pizzaSchema = new mongoose.Schema({ // Schéma de la collection Etudiant
    name: String,
    size: String,
    price: Number,
    quantity: Number,
    date: String,
});

const Etudiant = mongoose.model('etudiant', etudiantSchema);

const Pizza = mongoose.model('pizza', pizzaSchema);

app.get('/etudiants', async (req, res) => {
    try {
        const etudiants = await Etudiant.find();
        console.log("Etudiants récupérés : ", etudiants);
        res.json(etudiants);
    } catch (error) {
        console.error("Erreur lors de la récupération des étudiants : ", error);
        res.status(500).json({ message: error.message });
    }
});

app.post('/etudiants', async (req, res) => {
    const etudiant = new Etudiant(req.body);
    await etudiant.save();
    res.status(201).json(etudiant);
});

app.get('/pizzas', async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        console.log("Etudiants récupérés : ", pizzas);
        res.json(pizzas);
    } catch (error) {
        console.error("Erreur lors de la récupération des étudiants : ", error);
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});