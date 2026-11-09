# Editor.Name

返回或设置指定对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **Editor** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示所选内容的 Editors 集合中第一个用户的名称。*/
function test() {
    let editor = Selection.Editors.Item(1)
    alert(editor.Name)
}
```


```JavaScript
/*本示例判断如果所选内容的 Editors 集合中 Editor 对象数量大于 0，则显示最后一个用户的名称。*/
function test() {
    if (Selection.Editors.Count > 0) {
        alert(Selection.Editors.Item(Selection.Editors.Count).Name)
    }
}
```
