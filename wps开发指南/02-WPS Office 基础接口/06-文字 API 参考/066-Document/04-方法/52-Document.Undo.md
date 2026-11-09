# Document.Undo

撤消最后一次操作或最后一系列操作，这些操作显示在 **“撤消”** 列表中。如果撤消操作成功，则返回 **True** 。



## 语法

express.**Undo(Times)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Times | 可选 | any | 要撤消的操作的数量。 |

## 返回值

Boolean

## 示例


```JavaScript
/*本示例设置活动文档的前三个字符的格式，先加粗，后倾斜，再撤销一步，最后仅保留加粗。*/
function test() {
    let range = ActiveDocument.Range(0, 3)
    range.Bold = msoTrue
    range.Italic = msoTrue
    ActiveDocument.Undo()
}
```


```JavaScript
/*本示例撤消最后一次操作，如果撤消操作未成功，将显示一条消息。*/
function test() {
    if (!ActiveDocument.Undo()) {
        alert("Undo was unsuccessful")
    }
}
```
