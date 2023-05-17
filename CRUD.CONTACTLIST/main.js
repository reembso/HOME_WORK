class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

class ContactBook {
  contacts = [];

  // Create
  addContact(contact) {
    this.contacts.push(contact);
    this.saveContacts();
  }

  // Read
  findContact(name) {
    return this.contacts.find((contact) => contact.name === name);
  }

  // Update
  updateContact(name, newContact) {
    const index = this.contacts.findIndex((contact) => contact.name === name);
    if (index !== -1) {
      this.contacts[index] = newContact;
      this.saveContacts();
    }
  }

  // Delete
  deleteContact(name) {
    this.contacts = this.contacts.filter((contact) => contact.name !== name);
    this.saveContacts();
  }

  saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  loadContacts() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.contacts = JSON.parse(savedContacts);
    }
  }
}

// Создание экземпляра контактной книжки
const book = new ContactBook();
book.loadContacts();

// Добавление контактов
const akylai = new Contact('Akylai', '0707316986');
const aijamal = new Contact('Aijamal', '0555567811');

book.addContact(akylai);
book.addContact(aijamal);

// Поиск контактов
const foundAijamal = book.findContact('Aijamal');
const foundAkylai = book.findContact('Akylai');

console.log(foundAijamal);
console.log(foundAkylai);
