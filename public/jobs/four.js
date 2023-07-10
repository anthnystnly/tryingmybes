  import fs from 'fs';
 import path from 'path'; 

 // Copy work.txt to work/four.txt
 fs.copyFileSync(path.join(__dirname, '../main/work.txt'), path.join(__dirname, '../work/four.txt')); 