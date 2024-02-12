const express = require('express');
const app = express();
const port=3000;

let voitures = [
  { id: 1, name: 'clio' },
  { id: 2, name: 'megane' },
  { id: 3, name: 'range' },
];

app.use(express.json());

// Ajouter une voiture
app.post('/voitures', (req, res) => {

  const voiture = req.body;
    voitures.push(voiture);
    res.json({ voiture });

});

// Récupérer toutes les voitures
app.get('/allVoitures',(req,res)=>{
    res.json(voitures);
});

// Récupérer une voiture par son nom
app.get('/voitures/:id', (req, res) => {
  const voitureId = req.params.id; // Utiliser req.params.id pour récupérer l'identifiant de la voiture dans la route
  const voiture = voitures.find(v => v.id == voitureId); // Utiliser une fonction de rappel pour trouver la voiture par son identifiant
  const voitname=voiture.name;
  res.json({ "name":voitname }); // Retourner la voiture si elle est trouvée
  
});


/* //Modifier une voiture
app.put('/voiture/update/:id',(req,res)=>{
    const v=req.params.id;
    const data=voitures.find(idvoiture=>idvoiture.id==v);
    res.json(data);
}) */

// Supprimer une voiture
app.delete('/voiture/delete/:id', (req, res) => {
  const voitureId = req.params.id;
  const index = voitures.findIndex(v => v.id == voitureId);
  const voitureSupprimee = voitures.splice(index, 1); // Supprimer la voiture du tableau
  res.json("success delete");
});

app.listen(port,()=>console.log(`port: ${port}`));
