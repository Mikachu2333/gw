# HeaderFooter.HasHeaderFooter

检查文档是否包含页眉页脚。

## 语法

express.**HasHeaderFooter**

express   一个代表 **HeaderFooter** 对象的变量。

## 返回值

`boolean` — 若文档包含页眉页脚则返回 `true`，否则返回 `false`

## 示例

```JavaScript
if (app.ActiveDocument.HeaderFooter.HasHeaderFooter()) {
    console.log("文档包含页眉页脚");
}
```
