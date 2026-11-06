import { defineConfig } from 'vite'
import { copyFile } from "wpsjs/vite_plugins"

// 加载项不是打包成单文件的前端应用：WPS 直接按相对路径取 manifest.xml / ribbon.xml / js / images，
// 所以这些目录必须原样拷进 dist，和官方模板的 vite 配置一致。
export default defineConfig({
    base: './',
    plugins: [
        copyFile({ src: 'manifest.xml', dest: 'manifest.xml' }),
        copyFile({ src: 'ribbon.xml', dest: 'ribbon.xml' }),
        copyFile({ src: 'main.js', dest: 'main.js' }),
        copyFile({ src: 'js', dest: 'js' }),
        copyFile({ src: 'images', dest: 'images' }),
        copyFile({ src: 'ui', dest: 'ui' }),
    ],
    server: { host: '0.0.0.0' }
})
