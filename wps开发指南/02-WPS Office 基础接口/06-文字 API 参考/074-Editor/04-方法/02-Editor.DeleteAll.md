# Editor.DeleteAll

删除特定用户在文档中的所有编辑权限。



## 语法

express.**DeleteAll()**

express   一个代表 **Editor** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除所选内容的 Editors 集合中第一个用户的所有编辑权限。*/
function test() {
    let editor = Selection.Editors.Item(1)
    editor.DeleteAll()
}
```


```JavaScript
/*本示例判断如果所选内容的 Editors 集合中 Editor 对象数量大于 0，则将最后一个用户的所有编辑权限删除。*/
function test() {
    if (Selection.Editors.Count > 0) {
        Selection.Editors.Item(Selection.Editors.Count).DeleteAll()
    }
}
```
