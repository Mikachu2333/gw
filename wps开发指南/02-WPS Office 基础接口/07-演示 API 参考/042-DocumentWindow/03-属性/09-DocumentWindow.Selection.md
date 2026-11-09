# DocumentWindow.Selection

返回一个 **Selection** 对象，该对象代表指定的文档窗口中的选定内容。只读。



## 语法

express.**Selection**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

Selection

## 示例


```JavaScript
/*如果在活动窗口中选择了文本，本示例则会将该文本设为斜体。*/
function test() {
    let selection = Application.ActiveWindow.Selection
    if (selection.Type == ppSelectionText) {
        selection.TextRange.Font.Italic = true
    }
}
```


```JavaScript
/*本示例将复制所选的所有幻灯片，执行前须要先选中一个或多个幻灯片。*/
function test() {
    ActiveWindow.Selection.SlideRange.Duplicate()
}
```
