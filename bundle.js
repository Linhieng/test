const fs = require('fs')

if (fs.existsSync('dist')) {
    fs.rmSync('dist', {recursive: true})
    fs.mkdirSync('dist')
}

// 模拟打包行为
fs.writeFileSync('dist/hello.txt', 'hello=world', 'utf8')
