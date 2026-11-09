# Window.DocumentMap

如果显示文档结构图，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DocumentMap**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例切换活动窗口的文档结构图的显示。*/
function test() {
    ActiveDocument.ActiveWindow.DocumentMap = !ActiveDocument.ActiveWindow.DocumentMap
}
```


```JavaScript
/*本示例显示 Sales.doc 窗口的文档结构图。*/
function test() {
    let document = Documents.Open("D:\\test\\Sales.doc")
    document.ActiveWindow.DocumentMap = true
}
```
