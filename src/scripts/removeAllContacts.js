import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const updatedContacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(`All contacts have been removed successfully.`);
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

await removeAllContacts();
