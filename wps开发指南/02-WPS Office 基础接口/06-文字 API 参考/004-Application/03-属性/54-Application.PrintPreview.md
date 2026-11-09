# Application.PrintPreview

如果当前视图是打印预览，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintPreview**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将视图切换为打印预览。*/
function test() {
    Application.PrintPreview = true
}
```


```JavaScript
/*本示例将活动窗口从打印预览切换至普通视图。*/
function test() {
    Application.PrintPreview = false
    Application.ActiveDocument.ActiveWindow.View.Type = wdNormalView
}
```
