import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const updatedContacts = contacts.filter(() => Math.random() >= 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(
      `Thanos has snapped his fingers. ${
        contacts.length - updatedContacts.length
      } contacts have been removed.`,
    );
  } catch (error) {
    console.error('Deletion Error:', error);
  }
};

await thanos();
