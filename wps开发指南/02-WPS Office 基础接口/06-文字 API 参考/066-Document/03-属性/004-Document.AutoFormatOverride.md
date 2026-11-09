# Document.AutoFormatOverride

返回或设置一个 **Boolean** 类型的值，该数值代表是否在已应用格式设置限制的文档中使用自动设置格式替代格式设置限制。



## 语法

express.**AutoFormatOverride**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例指定在受保护的文档中使用自动设置格式替代格式设置限制。*/
function test() {
    ActiveDocument.AutoFormatOverride = true
}
```


```JavaScript
/*本示例显示第一个文档的 AutoFormatOverride 属性值。*/
function test() {
    alert(Documents.Item(1).AutoFormatOverride)
}
```
