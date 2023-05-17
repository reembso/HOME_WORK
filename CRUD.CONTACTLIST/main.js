class Contact {
    constructor(name, phone) {
      this.name = name
      this.phone = phone
    }
  }

class ContactBook {
  contacts = []

  // Create
  addContact(contact) {
    this.contacts.push(contact)
  }

  //Read
  findNumber(name) {
    return this.contacts.find((contact) => contact.name === name)
  }

  //Update
  updateContactName(name, newContact) {
    const index = this.contacts.findIndex((contact) => contact.name === name)
    if (index !== -1) {
      this.contacts[index] = newContact
    }
  }

  //Delete
  deleteContactName(name) {
    this.contacts = this.contacts.filter((contact) => contact.name !== name)
  }
}

//USE///////////////////////////////////////////////
const akylai = new Contact(`Akylai`, `0707316986`)
const aijamal = new Contact("Aijamal", "0555567811")


const book = new ContactBook()


//ADD////////////////////////////////////////
book.addContact(akylai)
book.addContact(aijamal)
//////////////////////////////////////////////

//READ ///////////////////////////////////////
const lookAijamal = book.findNumber(`Aijamal`)
const lookAkylai = book.findNumber(`Akylai`)
console.log(lookAijamal)
console.log(lookAkylai);
/////////////////////////////////////////////


///UPDATE//////////////////////////////////////
const newContact = new Contact(`New Name`, `123456789`)
book.updateContactName(`Akylai`, newContact)
//////////////////////////////////////////////


////DELETE////////////////////////////
book.deleteContactName(`Aijamal`)
///////////////////////////






