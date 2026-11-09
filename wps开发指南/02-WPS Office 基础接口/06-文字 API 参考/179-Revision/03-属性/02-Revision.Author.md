# Revision.Author

返回指定的修订的用户的名称。只读 **String** 类型。



## 语法

express.**Author**

express   一个代表 **Revision** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示所选部分中的第一节的第一处修订的作者名称。*/
function test() {
    let range = Selection.Sections.Item(1).Range
    alert("Revisions made by " + range.Revisions.Item(1).Author)
}
```


```JavaScript
/*本示例显示活动文档上主文档的所有修订的作者名称。*/
function test() {
    let revisions = ActiveDocument.Content.Revisions
    for (let i = 1; i <= revisions.Count; i++) {
        alert(revisions.Item(i).Author)
    }
}
```
