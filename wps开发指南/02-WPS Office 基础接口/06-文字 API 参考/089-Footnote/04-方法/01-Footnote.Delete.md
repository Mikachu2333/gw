# Footnote.Delete

删除指定的脚注。



## 语法

express.**Delete()**

express   一个代表 **Footnote** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除所选内容中第一个脚注。*/
function test() {
    let footnotes = Application.Selection.Footnotes
    if (footnotes.Count > 0) {
        footnotes.Item(1).Delete()
    }
}
```


```JavaScript
/*本示例删除活动文档上所有脚注。*/
function test() {
    let footnotes = ActiveDocument.Footnotes
    for (let i = footnotes.Count; i >= 1; i--) {
        footnotes.Item(i).Delete()
    }
}
```
