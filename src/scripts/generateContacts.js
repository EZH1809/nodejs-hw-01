import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Читання існуючого масиву контактів з файлу db.json
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Створення нових контактів
    for (let item = 0; item < number; item++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    // Запис оновленого масиву контактів назад у файл db.json
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log(`${number} new contacts have been added successfully.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);
