const core = require('@actions/core')
const execSync = require('child_process').execSync

try {
    execSync('git fetch origin page')
    execSync('git switch page')
    execSync('git rm -rf .')
    execSync('git checkout page -- dist')
    execSync('mv dist/* .')

    const gitStatus = execSync('git status -s').toString().trim()

    if (gitStatus) {
        execSync('git add .')
        execSync('git commit -m "deploy"')
        execSync('git push origin page')
    } else {
        console.warn('No changes to commit.')
    }
} catch (error) {
    core.setFailed(error.message)
}
