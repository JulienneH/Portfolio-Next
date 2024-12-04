"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_bvdo4ag";
    const templateID = "template_xmn2x7k";
    const userID = "oLbKvYYWexS0iXjCE";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "juliennehattabi@outlook.com",
      subject: `Message reçu depuis ton portfolio`,
    };
    setIsSending(true);

    // Envoi de l'email via EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log(
          "Message envoyé avec succès!",
          response.status,
          response.text
        );
        setIsSending(false);
        setIsSent(true);
        // Réinitialiser le formulaire après l'envoi
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.error("Erreur lors de l'envoi", error);
        setIsSending(false);
      }
    );
  };

  return (
    <div className="form" id="contact">
      <h1 className="section_title section_text margin_left section_title_mobile">
        Concrétisez votre projet, travaillons ensemble !
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name" className="section_subtitle section_text">
            Nom
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="email" className="section_subtitle section_text">
            Adresse mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="message" className="section_subtitle section_text">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="form_button" disabled={isSending}>
          {isSending ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>

      {isSent && (
        <div className="success-message">
          <p>Votre message a été envoyé avec succès !</p>
        </div>
      )}
    </div>
  );
};

export default FormContact;
