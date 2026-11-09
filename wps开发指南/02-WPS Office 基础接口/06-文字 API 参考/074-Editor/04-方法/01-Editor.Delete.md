# Editor.Delete

删除指定的 **Editor** 对象。



## 语法

express.**Delete()**

express   一个代表 **Editor** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除所选内容的 Editors 集合中第一个 Editor 对象。*/
function test() {
    let editor = Selection.Editors.Item(1)
    editor.Delete()
}
```


```JavaScript
/*本示例判断如果所选内容的 Editors 集合中 Editor 对象数量大于 0，则将最后一个 Editor 对象删除。*/
function test() {
    if (Selection.Editors.Count > 0) {
        Selection.Editors.Item(Selection.Editors.Count).Delete()
    }
}
```
