require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const formData = req.body;

  console.log(formData)

  try {
    // Vérifier que les informations sont présentes
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return res.status(400).json({ success: false, message: 'Tous les champs sont requis' });
    }

    transporter.sendMail({
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

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
