// Password: chiediamo all'utente il suo nome, cognome e colore preferito e restituiamo tutti insieme

// Chiedo il nome 
const username = prompt ('Dimmi il tuo nome');

// Chiedo il cognome
const usersurname = prompt ('Dimmi il tuo cognome');

//Chiedo il colore preferito
const usercolor = prompt ('Dimmi il tuo colore preferito :');

//Password Generator
const usermessage = username + usersurname + usercolor + 21 ;

//Stampo la Password
document.getElementById('result').innerHTML = usermessage;