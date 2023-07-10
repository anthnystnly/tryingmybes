import Bree from 'bree';

const bree = new Bree({
    
    //Define the jobs that Bree should run
    jobs: [

        //Run start job runs immediately when the process starts
        {
            name: 'start',
            path: path.join(__direname, './jobs/start.js'),
            interval: '0s', //The interval is 0s, which means the job runs immediatly
            immediate: true //Thhe job should run immediately when the process starts

        },
        //The one.js, two.js, ..., ten.js run every minute
        ...Array.from({ length:10}, (_, i) => ({
          name: '${i + 1}',  
          path: path.join(__dirname, './jobs/${i + 1}.js'),
          interval: '1m'
        }))
    ]
});

// Start the Bree scheduler
bree.start();
 
