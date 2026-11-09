# Comment.Ancestor

对于答复现有批注的注释，返回父 **Comment** 对象；对于新（顶级）注释，则返回 **null** 。只读。



## 语法

express.**Ancestor**

express   一个代表 **Comment** 对象的变量。

## 类型

Comment

## 示例


```JavaScript
/*本示例显示活动文档上第二个批注（答复现有批注的批注）的父批注的文本。*/
function test() {
    let comment = ActiveDocument.Comments.Item(2)
    alert(comment.Ancestor.Range.Text)
}
```


```JavaScript
/*本示例显示插入第一个文档上第四个批注（答复现有批注的批注）的父批注的日期和时间。*/
function test() {
    let comment = Documents.Item(1).Comments.Item(4)
    alert(comment.Ancestor.Date)
}
```
