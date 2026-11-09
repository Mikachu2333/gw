# Editor.NextRange

返回一个 **Range** 对象，该对象代表用户有权修改的下一个区域。



## 语法

express.**NextRange**

express   一个代表 **Editor** 对象的变量。

## 类型

Range

## 说明


还可使用 **Range** 对象的 **GoToEditableRange** 方法返回用户有权修改的下一区域。



## 示例


```JavaScript
/*本示例选中选定内容中第一个编辑者有权修改的下一区域。*/
function test() {
    let editor = Selection.Editors.Item(1)
    editor.NextRange.Select()
}
```


```JavaScript
/*本示例显示选定内容中最后一个编辑者有权修改的下一区域的文本。*/
function test() {
    alert(Selection.Editors.Item(Selection.Editors.Count).NextRange.Text)
}
```
