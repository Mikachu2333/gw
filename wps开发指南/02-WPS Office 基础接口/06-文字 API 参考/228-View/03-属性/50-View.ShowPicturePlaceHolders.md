# View.ShowPicturePlaceHolders

如果将空白方框作为图片的占位符进行显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowPicturePlaceHolders**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在活动文档中插入图片，并在活动窗口中显示图片占位符。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    ActiveDocument.InlineShapes.AddPicture("D:\\示例\\img1.bmp", null, null, Selection.Range)
    ActiveDocument.ActiveWindow.View.ShowPicturePlaceHolders = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否将空白方框作为图片的占位符进行展示。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowPicturePlaceHolders)
}
```
