# Comment.Scope

返回一个 **Range** 对象，该对象代表指定批注所标记的文本范围。



## 语法

express.**Scope**

express   一个代表 **Comment** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示与选定内容中第一条批注相关联的文本。*/
function test() {
    if (Selection.Comments.Count >= 1) {
        let range = Selection.Comments.Item(1).Scope
        alert(range.Text)
    }
}
```


```JavaScript
/*本示例复制与活动文档中最后一条批注相关联的文本。*/
function test() {
    let comments = ActiveDocument.Comments
    if (comments.Count >= 1) {
        comments.Item(comments.Count).Scope.Copy()
    }
}
```
