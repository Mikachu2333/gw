# CustomViews.Add

新建自定义视图。



## 语法

express.**Add(ViewName, PrintSettings, RowColSettings)**

express   一个代表 **CustomViews** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ViewName | 必选 | string | 新视图的名称。 |
| PrintSettings | 可选 | any | 如果为 True，则在自定义视图中包括打印设置。 |
| RowColSettings | 可选 | any | 如果为 True，则在自定义视图中包括隐藏行和隐藏列（包括筛选信息）的设置。 |

## 返回值

一个 CustomView 对象，它代表新的自定义视图。

## 示例


```JavaScript
/*此示例在活动工作簿中新建一个自定义视图，并命名为“Summary”。*/
function test() {
    ActiveWorkbook.CustomViews.Add("Summary", true, true)
}
```


```JavaScript
/*本示例在第一张工作簿上新建一个自定义视图，并显示该工作簿上自定义视图的数量。*/
function test() {
    let customViews = Workbooks.Item(1).CustomViews
    customViews.Add("example3", false, true)
    alert(customViews.Count)
}
```
