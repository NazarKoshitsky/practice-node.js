import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let dbData = JSON.parse(data);
        
        if (dbData.length === 0) {
            console.log('No contacts to remove');
            return;
        }
        dbData.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(dbData));
        console.log("Last contact removed successfully");
    
    }
    catch (err) {
        console.error('Error:', err);        
    }
};

await removeLastContact();
