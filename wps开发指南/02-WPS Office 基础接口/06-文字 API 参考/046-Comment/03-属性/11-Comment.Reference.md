# Comment.Reference

返回代表批注的引用标记的 **Range** 对象。



## 语法

express.**Reference**

express   一个代表 **Comment** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选中活动文档上第二个段落的第一个批注的引用标记。*/
function test() {
    let comment = ActiveDocument.Paragraphs.Item(2).Range.Comments.Item(1)
    comment.Reference.Select()
}
```


```JavaScript
/*本示例显示第一个文档上第一个批注的引用标记的文本。*/
function test() {
    let comment = Documents.Item(1).Comments.Item(1)
    alert(comment.Reference.Text)
}
```
