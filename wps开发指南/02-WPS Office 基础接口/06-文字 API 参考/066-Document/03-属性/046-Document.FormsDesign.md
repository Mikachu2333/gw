# Document.FormsDesign

如果指定的文档处于窗体设计模式，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**FormsDesign**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


如果在从 WPS 中运行的代码中使用 **FormsDesign** 属性，则本属性总是返回 **False** ，但如果通过自动功能运行，则可返回正确的值。例如，如果您在 ET 中运行示例，则处于设计模式时将返回 **True** 。

当 WPS 处于窗体设计模式时，将显示 **“控件工具箱”** 工具栏。使用该工具箱可以插入各种 ActiveX 控件，如命令按钮、滚动条和选项按钮。在窗体设计模式下，不会运行事件过程，并且单击一个嵌入的控件后，就会出现控件的尺寸控点。



## 示例


```JavaScript
/*本示例显示活动文档是否处于窗体设计模式。本示例总是返回 false。*/
function test() {
    alert(ActiveDocument.FormsDesign)
}
```


```JavaScript
/*本示例判断第一个文档是否处于窗体设计模式，并通知用户。*/
function test() {
    if (Documents.Item(1).FormsDesign) {
        alert("文档处于窗体设计模式")
    } else {
        alert("文档未处于窗体设计模式")
    }
}
```
