# Document.GridOriginFromMargin

如果 WPS 将在页面左上角开始使用字符网格，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**GridOriginFromMargin**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 从活动文档页面的左上角开始使用字符网格。*/
function test() {
    ActiveDocument.GridOriginFromMargin = true
}
```


```JavaScript
/*本示例显示 WPS 是否从第一个文档页面的左上角开始使用字符网格。*/
function test() {
    if (Documents.Item(1).GridOriginFromMargin) {
        alert("WPS 从第一个文档页面的左上角开始使用字符网格")
    } else {
        alert("WPS 未从第一个文档页面的左上角开始使用字符网格")
    }
}
```
