# Comment.DeleteRecursively

删除指定的批注以及与它关联的所有答复。



## 语法

express.**DeleteRecursively()**

express   一个代表 **Comment** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档上第一个批注以及与它关联的所有答复。*/
function test() {
    let comment = ActiveDocument.Comments.Item(1)
    comment.DeleteRecursively()
}
```


```JavaScript
/*本示例判断如果第一个文档上第三个批注不为手写的批注，则删除该批注以及与它关联的所有答复。*/
function test() {
    let comment = Documents.Item(1).Comments.Item(3)
    if (!comment.IsInk) {
        comment.DeleteRecursively()
    }
}
```
