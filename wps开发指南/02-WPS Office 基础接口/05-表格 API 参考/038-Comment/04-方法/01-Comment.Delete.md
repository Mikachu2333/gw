# Comment.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Comment** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除 A1 单元格的批注。*/
function test() {
    Range("A1").Comment.Delete()
}
```


```JavaScript
/*本示例遍历活动工作表上所有批注，并删除该工作表中由 jack 添加的所有批注。*/
function test() {
    let comments = Application.ActiveSheet.Comments
    for (let c = 1; c <= comments.Count; c++) {
        if (comments.Item(c).Author == "jack") {
            comments.Item(c).Delete()
        }
    }
}
```
