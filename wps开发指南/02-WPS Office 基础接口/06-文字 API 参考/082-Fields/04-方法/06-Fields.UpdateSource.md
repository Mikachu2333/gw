# Fields.UpdateSource

将对 INCLUDETEXT 域所做的更改保存回源文档。



## 语法

express.**UpdateSource()**

express   一个代表 **Fields** 对象的变量。

## 返回值

void

## 说明


源文档必须是 WPS 文档格式。



## 示例


```JavaScript
/*本示例对活动文档所有INCLUDETEXT域所做的更改保存回源文档。*/
function test() {
    if (ActiveDocument.Fields.Count > 0) {
        ActiveDocument.Fields.UpdateSource()
    }
}
```


```JavaScript
/*本示例对选定内容中所有INCLUDETEXT域所做的更改保存回源文档。*/
function test() {
    Selection.Fields.UpdateSource()
}
```
