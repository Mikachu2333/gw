# Comment.Delete

删除指定的 **Comment** 对象。



## 语法

express.**Delete()**

express   一个代表 **Comment** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除演示文稿第一张幻灯片的第一个批注。*/
function test() {
    let comments = ActivePresentation.Slides.Item(1).Comments
    comments.Item(1).Delete()
}
```


```JavaScript
/*本示例删除活动演示文稿的第二张幻灯片中由 Jeff Smith 添加的所有批注。*/
function test() {
    let comments = ActivePresentation.Slides.Item(2).Comments
    for (let i = comments.Count; i > 0; i--) {
        if (comments.Item(i).Author == "Jeff Smith") {
            comments.Item(i).Delete()
        }
    }
}
```
