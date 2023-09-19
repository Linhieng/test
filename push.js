const core = require('@actions/core')
const execSync = require('child_process').execSync

try {
    execSync('git fetch origin page')
    execSync('git switch page')
    execSync('git rm -rf .')
    execSync('git checkout main -- dist')
    execSync('mv dist/* .')
    execSync('git add .')

    const gitStatus = execSync('git status -s').toString().trim()
    core.info(gitStatus, !!gitStatus)
    if (gitStatus) {
        execSync('git commit -m "deploy"')
        execSync('git push origin page')
        core.info("-Hi, how are you doing~. I'm fine")
    } else {
        core.warn('No changes to commit.')
    }
} catch (error) {
    core.error(error)
    core.setFailed(`${error.message}`)
}
