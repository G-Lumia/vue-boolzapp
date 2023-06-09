// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

const {createApp} = Vue;
createApp
({
    data(){
        return{
            activeIndex : 0,
            text : '',
            search : '',
            chatMenuVisible:false,
            contacts: [
                {
                    id:1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:6,
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            chatMessages : 
            [
                'Ciao! Come stai?',
                'Buongiorno, è la prima volta che parliamo?',
                'Scusa se ti disturbo, ma avrei bisogno di un consiglio.',
                'Sì, ho visto quello che hai pubblicato su Facebook, mi sembra molto interessante.',
                'Mi piace la tua foto del profilo, dove l\'hai scattata?',
                'Ciao, hai visto l\'ultimo episodio di quella serie tv?',
                'Ti piace la musica di questo artista?',
                'Quale è il tuo ristorante preferito in città?',
                'Hai mai provato questo nuovo bar? Dicono che facciano dei cocktail fantastici.',
                'Ciao, come stai passando la tua giornata?',
                'Hai mai viaggiato in Asia? Qual è stato il tuo paese preferito?',
                'Qual è il tuo libro preferito?',
                'Cosa ne pensi di questo film? A me è piaciuto molto.',
                'Ciao, hai qualche programma per il weekend?',
                'Come ti sei avvicinato a questa passione?',
                'Se potessi andare ovunque nel mondo, dove vorresti andare?',
                'Cosa fai nel tempo libero?',
                'Hai mai partecipato a un concerto? Qual è stato il tuo preferito?',
                'Cosa hai fatto ieri sera?',
                'Che ne pensi di questa nuova tecnologia?'
            ],
            activeMessage: {
                index : false,
                show : false
            }
        }
    },
    methods: {
        // al click di un contatto, viene cambiata la chat visualizzata
        changeChat(id){
            this.activeIndex = id - 1;
            this.activeMessage.index = false;
            this.activeMessage.show = false;
            // se la dimensione dello schermo è md o inferiore, viene rimosso left-side 
            // e visualizzato right-side ed il bottone per tornare indietro
            if (window.matchMedia("(max-width: 992px)").matches)
            {
                document.getElementById("left-side").classList.add("d-none");
                document.getElementById("right-side").classList.remove("d-none");
                document.getElementById("goBack").classList.remove("d-none");
            }
        },
        goBack(){
            // se la dimensione dello schermo è md o inferiore, viene rimosso right-side 
            // ed il bottone per tornare indietro. viene visualizzato left-side
            if (window.matchMedia("(max-width: 992px)").matches)
            {
                document.getElementById("right-side").classList.add("d-none");
                document.getElementById("left-side").classList.remove("d-none");
                document.getElementById("goBack").classList.add("d-none");
            }
        },
        // viene creato un nuovo oggetto message, che dopo i dovuti controlli sarà inserito nel relativo array corrispondente al contatto attivo
        sendMessage(index){
            var time = new Date();
            const newMessage = {
                date: time.getHours() + ":" + time.getMinutes(),
                message: this.text,
                status: 'received'
            }
            //viene verificato che il testo sia stato inserito
            if ((this.text != ''))
                this.contacts[index].messages.push(newMessage);

            this.text = '';
            //dopo un intervallo di tempo, sarà inviata una risposta
            setTimeout(() => this.sendResponse(index), 1000);
        },
        //funzione dedicata all'invio di una risposta automatica, dopo che l'utente ha inviato un messaggio
        sendResponse(index){
            var time = new Date();
            const newMessage = {
                date: time.getHours() + ":" + time.getMinutes(),
                message: this.chatMessages[Math.floor(Math.random() * 20)],
                status: 'sent'
            }
            this.contacts[index].messages.push(newMessage);
        },
        //funzione dedicata al filtraggio della lista dei contatti, in base a ciò che verrà inserito nella barra di ricerca
        filteredContacts(){
            if(this.search.trim() == '')
            {
                return this.contacts;
            }
            else
            {
                return this.contacts.filter((contact) =>
                contact.name.trim().toLowerCase().includes(this.search.trim().toLowerCase()));
            }
        },
        // funzione dedicata alla riduzione di messaggi troppo lunghi, necessaria nella sezione left-side
        shortMessage(contact){
            if(contact.messages[contact.messages.length - 1].message.length < 15)
            {
                return contact.messages[contact.messages.length - 1].message;
            }
            else
            {
                return (contact.messages[contact.messages.length - 1].message.substring(0, 15) + "...");
            }
        },
        showMessageMenu(index){
            if(this.activeMessage.index !== false && this.activeMessage !== index && this.contacts[this.activeIndex].messages.length > 1)
            {
                this.activeMessage.show= false;
                this.activeMessage.index = false;
            }
            this.activeMessage.show = (this.activeMessage.show) ? false : true;
            this.activeMessage.index = index;
        },
        deleteMessage(index)
        {
            if(this.contacts[this.activeIndex].messages.length > 1)
            {
                this.contacts[this.activeIndex].messages.splice(index , 1);
            }
            else
            {
                this.contacts[this.activeIndex].messages[0].message = "--chat eliminata--"
            }
        }
    },
    mounted(){

    }
}).mount("#app");