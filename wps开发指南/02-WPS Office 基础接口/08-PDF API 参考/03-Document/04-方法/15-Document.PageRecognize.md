# Document.PageRecognize

对指定页面执行 OCR 识别操作，`lRecognizeType` 控制字体识别模式。

## 语法

express.**PageRecognize**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| lPageIndex | long | 页面索引（0 起计） |
| lRecognizeType | long | 字体识别模式：`0` = 服务端自动识别（auto，默认），`1` = 强制标准字体识别（standard），`2` = 强制字体生成（generate） |

## 返回值

`long` — `0` 表示成功，非 `0` 表示失败

## 示例

```JavaScript
var result = app.ActiveDocument.PageRecognize(0, 0);
console.log("识别结果: " + result);
```
