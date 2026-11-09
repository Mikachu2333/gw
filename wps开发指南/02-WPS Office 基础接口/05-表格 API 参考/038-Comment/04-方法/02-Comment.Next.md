# Comment.Next

返回一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj)** 对象，该对象代表下一条批注。



## 语法

express.**Next()**

express   一个代表 **Comment** 对象的变量。

## 返回值

Comment

## 说明


本方法仅对单张工作表有效。对工作表中最后一条批注使用本方法可返回 **Null** （不是下一张工作表的第一条批注）。

在没有现有注释的新工作簿中测试此示例。 若要清除工作簿中的所有批注，请在“即时”窗格中使用 Selection.SpecialCells(xlCellTypeComments).Delete() 。



## 示例


```JavaScript
/*本示例隐藏下一条批注。*/
function test() {
    //Sets up the comments
    for (let xNum = 1; xNum <= 10; xNum++) {
        Application.Range("A" + xNum).AddComment()
        Application.Range("A" + xNum).Comment.Text("Comment " + xNum)
    }
    alert("Comments created... A1:A10")
    //Deletes every second comment in the A1:A10 range
    for (let yNum = 1; yNum <= 10; yNum = yNum + 2) {
        Application.Range("A" + yNum).Comment.Next().Shape.Select(true)
        Application.Selection.Delete()
    }
    alert("Deleted every second comment")
}
```


```JavaScript
/*本示例显示 A3 单元格下一条批注的内容。*/
function test() {
    alert(Application.Range("A3").Comment.Next().Text())
}
```
