# SheetViews.Item

返回一个 **SheetView** 对象，该对象代表工作簿的视图。只读。



## 语法

express.**Item(Index)**

express   一个代表 **SheetViews** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 视图的索引值。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例激活工作表Sheet1，并隐藏第一个工作表视图的标题。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SheetViews.Item(1).DisplayHeadings = false
}
```


```JavaScript
/*本示例更改第二个工作表视图所在的工作表名称。*/
function test() {
    let sheetView = ActiveWindow.SheetViews.Item(2)
    sheetView.Sheet.Name = "成绩表"
}
```
