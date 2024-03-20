const fs = require('fs')

if (fs.existsSync('dist')) {
    fs.rmSync('dist', {recursive: true})
}
fs.mkdirSync('dist')

// 模拟打包行为
fs.writeFileSync('dist/hello.txt', 'over1', 'utf8')
fs.writeFileSync('dist/hello2.txt', 'over2', 'utf8')
fs.writeFileSync('dist/hello3.txt', 'over3', 'utf8')
