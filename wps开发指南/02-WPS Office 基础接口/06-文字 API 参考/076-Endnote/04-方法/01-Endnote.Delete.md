# Endnote.Delete

删除指定的尾注。



## 语法

express.**Delete()**

express   一个代表 **Endnote** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档上第一个尾注。*/
function test() {
    Application.ActiveDocument.Endnotes.Item(1).Delete()
}
```


```JavaScript
/*本示例删除所选内容中所有尾注。*/
function test() {
    let endnotes = Selection.Endnotes
    for (let i = endnotes.Count; i >= 1; i--) {
        endnotes.Item(i).Delete()
    }
}
```
