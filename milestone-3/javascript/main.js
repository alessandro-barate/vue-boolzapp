"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2024 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2024 15:50:23",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2024 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2024 22:52:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2024 23:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "21/03/2024 08:12:57",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2024 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2024 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2024 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2024 11:15:39",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2024 11:45:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "26/02/2024 07:38:51",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "26/02/2024 07:39:12",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "15/03/2024 19:27:50",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "15/03/2024 19:48:05",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "15/03/2024 19:54:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "20/05/2024 10:04:25",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "20/05/2024 10:20:36",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "17/05/2024 20:32:47",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "17/05/2024 20:59:25",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "17/05/2024 21:31:02",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],

      // Variabili
      currentIndex: 0,
      newMessage: "",
      chatInput: "",
    };
  },

  computed: {
    // Accedere all'array contacts
    selectedContact() {
      return this.contacts[this.currentIndex];
    },

    // Ricerca tra i contatti
    filteredContacts() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.chatInput.toLowerCase())
      );
    },
  },

  methods: {
    // Aggiungere un nuovo messaggio tramite input
    addMessage() {
      const newMessage = {
        date: "17/11/2024 18:44:37",
        message: this.newMessage,
        status: "sent",
      };
      this.contacts[this.currentIndex].messages.push(newMessage);
      this.newMessage = "";
      this.automaticReply();
    },

    // Risposta automatica al nuovo messaggio dopo 2 secondi
    automaticReply() {
      setTimeout(() => {
        const replyMessage = {
          date: "17/11/2024 18:44:39",
          message: "Ok!",
          status: "received",
        };
        this.contacts[this.currentIndex].messages.push(replyMessage);
      }, 2000);
    },
  },
}).mount("#app");
