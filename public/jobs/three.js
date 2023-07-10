 import fs from 'fs';
 import path from 'path'; 

 // Copy work.txt to work/three.txt
 fs.copyFileSync(path.join(__dirname, '../main/work.txt'), path.join(__dirname, '../work/three.txt')); 