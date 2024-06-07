import path from 'node:path';
const pathToWorkDir = path.join(process.cwd());
const pathToFile = path.join(pathToWorkDir, 'src', 'db', 'db.json');
export const PATH_DB = pathToFile;
