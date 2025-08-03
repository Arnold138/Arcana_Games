require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const nodemailer = require('nodemailer');
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://monster:supermonster@cluster0.5pluzho.mongodb.net/arcana?retryWrites=true&w=majority&appName=Cluster0";

// Connexion à MongoDB Atlas via Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connecté à MongoDB Atlas !'))
.catch((err) => console.error('❌ Erreur connexion MongoDB :', err));

// Transporteur Nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
    
  }
  
});
console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_PASS:', process.env.GMAIL_PASS ? '****' : 'not set');

// MODELE MONGOOSE : Messages de contact
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// TEST route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working 🎯' });
});

app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    let mailOptions = {
      from: '"Arcana Games" <belhocine.arnold@gmail.com>',
      to: 'belhocine.arnold@gmail.com',
      subject: 'Nouveau message de contact',
      html: `
        <b>Nom :</b> ${name}<br>
        <b>Email :</b> ${email}<br>
        <b>Message :</b><br>
        ${message}
      `
    };

    // Essaie l’envoi et affiche le log du retour ou de l’erreur
    await transporter.sendMail(mailOptions)
      .then(info => {
        console.log('✅ Email envoyé :', info.response);
        res.status(201).json({ success: true, message: 'Message enregistré et email envoyé !' });
      })
      .catch(error => {
        console.error('❌ Erreur lors de l’envoi de l’email :', error);
        res.status(500).json({ success: false, message: 'Erreur serveur lors de l\'envoi de l\'email', error });
      });

  } catch (error) {
    console.error('❌ Erreur générale :', error);
    res.status(500).json({ success: false, message: 'Erreur serveur', error });
  }
});
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des messages :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.listen(5000, () => {
  console.log('✅ Backend running at http://localhost:5000');
});
 


// --- SCENARIOS MOCK DATA ---

app.post('/api/booking', async (req, res) => {
  try {
    const { name, email, eventType, players, date, time } = req.body;

    const scenario = eventType; 
    const heure = time; 
    

    // 1. Mail à TOI (admin/organisateur)
    let adminMailOptions = {
      from: '"Arcana Games" <belhocine.arnold@gmail.com>',
      to: 'belhocine.arnold@gmail.com',
      subject: 'Nouvelle réservation - Arcana Games',
      html: `
        <h2>Nouvelle réservation !</h2>
        <b>Nom :</b> ${name}<br>
        <b>Email :</b> ${email}<br>
        <b>Scénario :</b> ${scenario}<br>
        <b>Nombre de joueurs :</b> ${players}<br>
        <b>Date :</b> ${date} à ${heure}<br>
      `
    };

    // 2. Mail au CLIENT (confirmation)
    let clientMailOptions = {
      from: '"Arcana Games" <belhocine.arnold@gmail.com>',
      to: email,
      subject: 'Votre réservation chez Arcana Games',
      html: `
  <div style="background:#000;padding:14px;border-radius:12px;display:inline-block;">
    <img src="https://res.cloudinary.com/darx8xteg/image/upload/t_media_lib_thumb/arcanalogo_uztwet" alt="Arcana Games logo" style="max-width:140px; margin-bottom:16px; border-radius:14px;" />
  </div>
  <h2>Votre réservation est confirmée !</h2>
  Bonjour ${name},<br><br>
  Nous avons bien reçu votre demande de réservation.<br><br>
  <b>Scénario :</b> ${scenario}<br>
  <b>Nombre de joueurs :</b> ${players}<br>
  <b>Date :</b> ${date} à ${heure}<br><br>
  Un organisateur va vous contacter très rapidement pour finaliser votre expérience.<br>
  <br>
  Merci et à bientôt chez Arcana Games !<br>
  <hr>
  <small>Ce mail est généré automatiquement, ne pas répondre directement.</small>
`
    };

    // Envoie les deux mails 
    await transporter.sendMail(adminMailOptions);
    console.log("Mail admin envoyé");
    await transporter.sendMail(clientMailOptions);
    console.log("Mail client envoyé");

    res.status(201).json({ success: true, message: 'Réservation enregistrée, confirmation envoyée au client !' });

  } catch (error) {
    console.error('Erreur envoi mails réservation:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur lors de la réservation', error });
  }
});

