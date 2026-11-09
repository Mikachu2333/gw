# CustomView.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **CustomView** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个自定义视图的名称。*/
function test() {
    let customView = ActiveWorkbook.CustomViews.Item(1)
    alert(customView.Name)
}
```


```JavaScript
/*本示例将第一张工作簿上所有自定义视图的名称赋值给活动工作表的单元格。*/
function test() {
    let customViews = Workbooks.Item(1).CustomViews
    for (let i = 1; i <= customViews.Count; i++) {
        ActiveSheet.Cells.Item(i, 1).Value2 = customViews.Item(i).Name
    }
}
```
