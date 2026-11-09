# Selection.Type

返回一个 **PpSelectionType** 常量，该常量代表选定内容中对象的类型。只读。



## 语法

express.**Type**

express   一个代表 **Selection** 对象的变量。

## 类型

PpSelectionType

## 说明


| **Type** 属性的值可以是下列 **PpSelectionType** 常量之一： |
| --- |
| **ppSelectionNone** |
| **ppSelectionShapes** |
| **ppSelectionSlides** |
| **ppSelectionText** |



## 示例


```JavaScript
/*以下示例将显示选中对象的类型是否为形状。*/
function test() {
    alert(Application.Windows.Item(1).Selection.Type == ppSelectionShapes)
}
```


```JavaScript
/*本示例判断活动窗口中选中的内容如果是幻灯片，则删除该幻灯片。*/
function test() {
    let selection = ActiveWindow.Selection
    if (selection.Type == ppSelectionSlides) {
        selection.Delete()
        alert("已删除该幻灯片。")
    }
}
```
