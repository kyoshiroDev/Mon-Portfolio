require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route principale
app.get("/", (req, res) => {
  res.send("Serveur Express fonctionne !");
});

// Route d'envoi d'email
app.post("/send-email", async (req, res) => {
  const formData = req.body;

  try {
    // Vérifier que les informations sont présentes
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return res.status(400).json({ success: false, message: 'Tous les champs sont requis' });
    }

    await transporter.sendMail({
      from: formData.email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${formData.firstName} ${formData.lastName}`,
      text: ` 
      Nom : ${formData.firstName}
      Prenom : ${formData.lastName}
      Email :  ${formData.email}

      Message : 
      ${formData.message}`
    });

    res.status(200).json({ success: true, message: "Email envoyé !" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erreur d'envoi", error });
  }
});

// Exporter l'application pour Vercel
module.exports = app;
