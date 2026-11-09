# Document.EnforceStyle

返回或设置一个 **Boolean** 类型的值，该值代表是否在受保护的文档中实施格式设置限制。



## 语法

express.**EnforceStyle**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用活动文档中的格式设置限制。*/
function test() {
    ActiveDocument.EnforceStyle = true
}
```


```JavaScript
/*本示例显示第一个文档是否启用格式设置限制。*/
function test() {
    if (Documents.Item(1).EnforceStyle) {
        alert("文档启用格式设置限制")
    } else {
        alert("文档未启用格式设置限制")
    }
}
```
