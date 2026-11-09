# Field.UpdateSource

将对 INCLUDETEXT 域所做的更改保存回源文档。



## 语法

express.**UpdateSource()**

express   一个代表 **Field** 对象的变量。

## 返回值

void

## 说明


源文档必须是 WPS 文档格式。



## 示例


```JavaScript
/*本示例将活动文档中所有 INCLUDETEXT 域所做的更改保存回源文档。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Fields.Count; i++) {
        let field = ActiveDocument.Fields.Item(i)
        if (field.Type == wdFieldIncludeText) {
            field.UpdateSource()
        }
    }
}
```


```JavaScript
/*本示例判断如果所选内容中第三个域为 INCLUDETEXT 域，则将该域所做的更改保存回源文档。*/
function test() {
    let field = Selection.Fields.Item(3)
    if (field.Type == wdFieldIncludeText) {
        field.UpdateSource()
    }
}
```
