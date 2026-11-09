import { defineConfig } from 'vite'
import { copyFile } from "wpsjs/vite_plugins"
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// 发布版本号只有两处人工维护点：
//   C# 侧   src/Properties/AssemblyInfo.cs（四段）
//   npm 侧  wps-js/package.json（三段）
// tools/build.ps1 会校验两者的前三段一致；package-lock.json 由 npm 自动生成。
// 本文件不写死任何版本数字，源码里的 dev 占位值只是占位符、不是版本号。
const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
const VERSION_SENTINEL = '0.0.0-dev'
const VERSION_FILES = ['js/ribbon.js', 'ui/about.html']

// wpsjs 的 copyFile 在 generateBundle 里把源码目录原样拷进 dist，绕过 Vite 的 transform
// 管道，所以不能只写 transform 钩子：
//   - vite build：closeBundle 在复制完成后替换 dist 里的哨兵值，并强制校验占位符存在；
//   - vite dev ：configureServer 中间件在响应这两个文件时即时替换；
//   - wpsjs debug：走它自带的 express 服务，不经过 Vite，此时保留 0.0.0-dev 属预期。
function injectVersion() {
    let config

    // 哨兵值允许在注释里出现：只要至少替换一处，且产物中不再残留即可。
    const replace = (code) =>
        code.includes(VERSION_SENTINEL) ? code.split(VERSION_SENTINEL).join(version) : null

    const normalize = (url) => decodeURIComponent(url.split('?')[0].replace(/^\/+/, '').replace(/\\/g, '/'))

    return {
        name: 'gw-inject-version',
        configResolved(c) { config = c },

        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const rel = normalize(req.url || '')
                if (!VERSION_FILES.includes(rel)) return next()
                const file = resolve(config.root, rel)
                if (!existsSync(file)) return next()
                const code = readFileSync(file, 'utf8')
                res.setHeader('Content-Type', rel.endsWith('.html')
                    ? 'text/html; charset=utf-8'
                    : 'application/javascript; charset=utf-8')
                res.end(replace(code) ?? code)
            })
        },

        closeBundle() {
            if (config.command !== 'build') return
            const outDir = resolve(config.root, config.build.outDir)
            writeFileSync(resolve(outDir, 'install.json'), JSON.stringify({ id: 'gw_mika', version }, null, 2))
            for (const rel of VERSION_FILES) {
                const file = resolve(outDir, rel)
                if (!existsSync(file)) {
                    throw new Error(`[gw-inject-version] 缺少构建产物 ${file}，无法注入版本`)
                }
                const out = replace(readFileSync(file, 'utf8'))
                if (out === null) {
                    throw new Error(`[gw-inject-version] ${rel} 里没有 ${VERSION_SENTINEL} 占位符`)
                }
                writeFileSync(file, out)
            }
        }
    }
}

// 加载项不是打包成单文件的前端应用：WPS 直接按相对路径取 manifest.xml / ribbon.xml / js / images，
// 所以这些目录必须原样拷进 dist，和官方模板的 vite 配置一致。
export default defineConfig({
    base: './',
    plugins: [
        injectVersion(),
        copyFile({ src: 'manifest.xml', dest: 'manifest.xml' }),
        copyFile({ src: 'ribbon.xml', dest: 'ribbon.xml' }),
        copyFile({ src: 'index.html', dest: 'index.html' }),
        copyFile({ src: 'js', dest: 'js' }),
        copyFile({ src: 'images', dest: 'images' }),
        copyFile({ src: 'ui', dest: 'ui' }),
    ],
    build: { rollupOptions: { input: 'main.js', output: { entryFileNames: 'main.js' } } },
    server: { host: '127.0.0.1' }
})
