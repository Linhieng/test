const core = require('@actions/core');
const execSync = require('child_process').execSync;

try {
  // Run 'git status -s'
  const gitStatus = execSync('git status -s').toString().trim();

  if (gitStatus) {
    console.log('There are changes, pushing to remote...');

    // Run 'git push origin main'
    execSync('git push origin main');

    console.log('Changes pushed successfully.');
  } else {
    console.log('No changes to push.');
  }
} catch (error) {
  core.setFailed(error.message);
}
