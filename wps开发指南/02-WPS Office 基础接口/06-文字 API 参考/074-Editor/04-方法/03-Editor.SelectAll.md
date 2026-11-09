# Editor.SelectAll

选择文档中由单个用户插入或编辑的所有形状。



## 语法

express.**SelectAll()**

express   一个代表 **Editor** 对象的变量。

## 返回值

void

## 说明


此方法不能选择 **InlineShape** 对象。



## 示例


```JavaScript
/*本示例为当前用户分配编辑权限以修改所选内容，并选中文档中由该用户插入或编辑的所有形状。*/
function test() {
    let editor = Selection.Editors.Add(wdEditorCurrent)
    editor.SelectAll()
}
```


```JavaScript
/*本示例判断如果所选内容的 Editors 集合中 Editor 对象数量大于 0，则选中最后一个用户插入或编辑的所有形状。*/
function test() {
    if (Selection.Editors.Count > 0) {
        Selection.Editors.Item(Selection.Editors.Count).SelectAll()
    }
}
```
