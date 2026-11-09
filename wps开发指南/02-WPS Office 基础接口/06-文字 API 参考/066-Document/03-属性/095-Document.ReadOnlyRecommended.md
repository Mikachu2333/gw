# Document.ReadOnlyRecommended

如果无论用户何时打开文档，WPS 都显示一个消息框，提示以只读方式打开，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ReadOnlyRecommended**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置在打开活动文档时，WPS 建议以只读方式打开。*/
function test() {
    ActiveDocument.ReadOnlyRecommended = true
}
```


```JavaScript
/*本示例判断如果打开第一个文档时，WPS 建议以只读方式打开，则保存该文档。*/
function test() {
    if (Documents.Item(1).ReadOnlyRecommended) {
        Documents.Item(1).Save()
    }
}
```
