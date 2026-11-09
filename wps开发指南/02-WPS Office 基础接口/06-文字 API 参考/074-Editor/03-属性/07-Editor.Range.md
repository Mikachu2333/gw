# Editor.Range

返回一个 **Range** 对象，该对象代表指定对象所包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Editor** 对象的变量。

## 类型

Range

## 说明


有关从文档返回范围或从形状集合返回形状范围的信息，请参阅 **Range** 方法。



## 示例


```JavaScript
/*本示例将选定内容中第一个编辑者有权修改的区域设置“标题 1”样式。*/
function test() {
    Selection.Editors.Item(1).Range.Style = wdStyleHeading1
}
```


```JavaScript
/*本示例显示选定内容中第一个编辑者有权修改的区域的文本。*/
function test() {
    alert(Selection.Editors.Item(1).Range.Text)
}
```


```JavaScript
/*本示例将选定内容中第一个编辑者有权修改的区域的文本字体设置为粗体。*/
function test() {
    Selection.Editors.Item(1).Range.Bold = true
}
```


```JavaScript
/*本示例将选定内容中第一个编辑者有权修改的区域的文本字体设置为倾斜。*/
function test() {
    Selection.Editors.Item(1).Range.Italic = true
}
```
