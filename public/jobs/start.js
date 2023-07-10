 import { readirSync,unlinkSink } from 'fs';
 import { join } from 'path';

 //Delete all files in the work directory
 readirSync(join(__dirname, '../work')).forEach(file => {
    unlinkSink(join(__dirname, '../work',file ));
 });
