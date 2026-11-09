# DocumentProperties.Count

获取一个 **Long** 类型的值，指示 **DocumentProperties** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **DocumentProperties** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档中自定义文档属性的数量。*/
function test() {
    alert(`There are ${ActiveDocument.CustomDocumentProperties.Count} custom document properties in the active document.`)
}
```
