# Document.ToggleFormsDesign

在打开和关闭窗体设计模式之间切换。



## 语法

express.**ToggleFormsDesign()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


当 WPS 处于窗体设计模式时，将显示 **“控件工具箱”** 工具栏。可以使用该工具箱插入各种 ActiveX 控件，如命令按钮、滚动条和选项按钮。在窗体设计模式下，不会运行事件过程，并且单击一个嵌入的控件后，会出现控件的尺寸控点。



## 示例


```JavaScript
/*如果当前没有显示“控件工具箱”工具栏，本示例将活动文档切换到窗体设计模式。*/
function test() {
    if (!Application.CommandBars.Item("Control Toolbox").Visible) {
        ActiveDocument.ToggleFormsDesign()
    }
}
```


```JavaScript
/*本示例将所有已打开的文档切换到窗体设计模式。*/
function test() {
    for (let i = 1; i <= Documents.Count; i++) {
        Documents.Item(i).ToggleFormsDesign()
    }
}
```
