# Editor.ID

将父文档另存为网页时，返回或设置指定对象的标识标签。只读 **String** 类型。



## 语法

express.**ID**

express   一个代表 **Editor** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示当父文档另存为网页时所选内容的 Editors 集合中第一个 Editor 对象的 ID。*/
function test() {
    let editor = Selection.Editors.Item(1)
    alert(editor.ID)
}
```


```JavaScript
/*本示例将所选内容的文本替换成所选内容的 Editors 集合中最后一个 Editor 对象的 ID。*/
function test() {
    Selection.Range.Text = Selection.Editors.Item(Selection.Editors.Count).ID
}
```
