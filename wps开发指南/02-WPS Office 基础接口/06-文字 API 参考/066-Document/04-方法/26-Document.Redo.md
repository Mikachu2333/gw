# Document.Redo

重复最后一次撤消的操作（ **Undo** 方法的逆操作）。如果重复操作成功，则返回 **True** 。



## 语法

express.**Redo(Times)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Times | 可选 | any | 重复操作的次数。 |

## 返回值

Boolean

## 示例


```JavaScript
/*本示例将活动文档前两个字符加粗然后倾斜，然后撤销倾斜和加粗，重做加粗，文字最终加粗并没倾斜。*/
function test() {
    let range = ActiveDocument.Range(0, 2)
    range.Bold = msoTrue
    range.Italic = msoTrue
    ActiveDocument.Undo(2)
    ActiveDocument.Redo(1)
}
```


```JavaScript
/*本示例重做活动文档的最后一次撤消的操作，如果重做操作未成功，则显示一条消息。*/
function test() {
    if (!ActiveDocument.Redo()) {
        alert("Redo was unsuccessful")
    }
}
```
