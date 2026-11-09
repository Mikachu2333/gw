# Comment.Replies

返回 **Comment** 对象的 **Comments** 集合，这些对象是指定批注的子对象。只读。



## 语法

express.**Replies**

express   一个代表 **Comment** 对象的变量。

## 类型

Comments

## 说明


对返回的答复集合调用 **Add** 方法将添加新的回复，除非该集合是从答复访问的。

对 **Replies** 属性返回的 **Comments** 集合调用 **Comments.ShowBy** 时，该属性将失败。



## 示例


```JavaScript
/*本示例显示插入所选内容中第一个批注的第一个子批注的日期和时间。*/
function test() {
    let comment = Application.Selection.Comments.Item(1)
    alert(comment.Replies.Item(1).Date)
}
```


```JavaScript
/*本示例将第一个文档上第三个批注的第一个子批注标记为“已解决”。*/
function test() {
    let comment = Documents.Item(1).Comments.Item(3)
    comment.Replies.Item(1).Done = true
}
```
