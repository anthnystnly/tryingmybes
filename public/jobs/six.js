  import fs from 'fs';
 import path from 'path'; 

 // Copy work.txt to work/six.txt
 fs.copyFileSync(path.join(__dirname, '../main/work.txt'), path.join(__dirname, '../work/six.txt')); 