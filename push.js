const core = require('@actions/core');
const execSync = require('child_process').execSync;

try {
    execSync('git fetch origin page')
    execSync('git switch page')
    execSync('git rm -rf .')
    execSync('git checkout tmp -- dist')
    execSync('mv dist/* .')
    execSync('git add .')
    execSync('git commit -m "deploy"')
    execSync('git push origin page')


  // Run 'git status -s'
//   const gitStatus = execSync('git status -s').toString().trim();

//   if (gitStatus) {
    // console.log('There are changes, pushing to remote...');

    // execSync('git push origin main');

    // console.log('Changes pushed successfully.');
//   } else {
//     console.log('No changes to push.');
//   }
} catch (error) {
  core.setFailed(error.message);
}
