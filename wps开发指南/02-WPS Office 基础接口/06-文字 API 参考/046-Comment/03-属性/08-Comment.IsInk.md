# Comment.IsInk

返回一个 **Boolean** 类型的值，该值代表批注是否为手写批注。



## 语法

express.**IsInk**

express   一个代表 **Comment** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例删除活动文档的所有手写批注。*/
function test() {
    let comments = Application.ActiveDocument.Comments
    for (let i = comments.Count; i >= 1; i--) {
        if (comments.Item(i).IsInk) {
            comments.Item(i).Delete()
        }
    }
}
```


```JavaScript
/*本示例显示所选内容中第一个批注是否为手写批注。*/
function test() {
    let comment = Application.Selection.Comments.Item(1)
    alert(comment.IsInk)
}
```
