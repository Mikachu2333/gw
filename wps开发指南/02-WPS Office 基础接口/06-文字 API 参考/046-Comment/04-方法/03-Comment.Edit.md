# Comment.Edit

打开指定批注，以便进行编辑。



## 语法

express.**Edit()**

express   一个代表 **Comment** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例打开第一个文档上第一个批注以便进行编辑。*/
function test() {
    let comment = Documents.Item(1).Comments.Item(1)
    comment.Edit()
}
```


```JavaScript
/*本示例判断如果第一个文档上第六个批注不为手写的批注，则打开该批注以便进行编辑。*/
function test() {
    let comment = Documents.Item(1).Comments.Item(6)
    if (!comment.IsInk) {
        comment.Edit()
    }
}
```
