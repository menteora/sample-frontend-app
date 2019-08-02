require('./node_modules/.bin/vue-cli-service');
// Replace with plugin https://cli.vuejs.org/dev-guide/plugin-dev.html#getting-started
const { deploy } = require('sftp-sync-deploy');

//require('dotenv').config();

let config = {
  host: process.env.DEPLOY_HOST,            // Required.
  port: process.env.DEPLOY_HOST_PORT,                       // Optional, Default to 22.
  username: process.env.DEPLOY_REMOTE_USER,               // Required.
  password: process.env.DEPLOY_REMOTE_PASSWORD,           // Optional.n
  localDir: process.env.DEPLOY_LOCALE_DIR,               // Required, Absolute or relative to cwd.
  remoteDir: process.env.DEPLOY_REMOTE_DIR     // Required, Absolute path only.
};

let options = {
  dryRun: false,                  // Enable dry-run mode. Default to false
  exclude: [                      // exclude patterns (glob)
    'node_modules',
    'src/**/*.spec.ts'
  ],
  excludeMode: 'remove',          // Behavior for excluded files ('remove' or 'ignore'), Default to 'remove'.
  forceUpload: false,             // Force uploading all files, Default to false(upload only newer files).
  concurrency: 100                // Max number of SFTP tasks processed concurrently. Default to 100.
};

deploy(config, options).then(() => {
  console.log('success!');
}).catch(err => {
  console.error('error! ', err);
});