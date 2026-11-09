# Annots.CreateMediaAnnot

创建媒体注释（音频/视频）。

## 语法

express.**CreateMediaAnnot**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数，字段见下表 |

**jsonParam 字段说明**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| rect | array | 是 | 媒体播放区域，格式 `[left, bottom, width, height]`，单位 pt，**PDF 坐标系**（原点在页面左下角，bottom 为距页面底部的 y 坐标，y 向上增大）；width、height 必须 > 0 |
| filePath | string | 是 | 本地媒体文件绝对路径；常见支持 mp4、mp3、wav 等格式，以客户端实际支持为准 |
| opacity | number | 否 | 不透明度，整数 `0`–`255`，255 为完全不透明 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateMediaAnnot('{"rect":[100,500,320,240],"filePath":"C:\\\\video.mp4"}');
```
