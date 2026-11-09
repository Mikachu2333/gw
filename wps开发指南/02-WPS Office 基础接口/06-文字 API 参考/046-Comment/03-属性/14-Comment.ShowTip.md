# Comment.ShowTip

如果在“屏幕提示”中显示与批注相关联的文本，则该属性值为 **True** 。 **Boolean** 类型，可读写。




## 语法

express.**ShowTip**

express   一个代表 **Comment** 对象的变量。

## 类型

boolean

## 说明


当单击鼠标或按下任意键时，“屏幕提示”才会消失。




## 示例


```JavaScript
/*本示例显示活动文档中的第一条批注的“屏幕提示”。*/
function test() {
    if (Application.ActiveDocument.Comments.Count >= 1) {
        Application.ActiveDocument.Comments.Item(1).ShowTip = true
    }
}

```


```JavaScript
/*本示例显示活动文档中下一条批注的“屏幕提示”。*/
function test() {
    if (Application.ActiveDocument.Comments.Count >= 1) {
        Application.Selection.GoTo(wdGoToComment, wdGoToNext)
        Application.Selection.MoveEnd(wdWord, 1)
        Application.Selection.Comments.Item(1).ShowTip == true
    }
}

```
