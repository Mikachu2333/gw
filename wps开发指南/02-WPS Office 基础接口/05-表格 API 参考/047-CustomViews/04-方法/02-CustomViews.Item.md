# CustomViews.Item

从集合中返回一个对象。



## 语法

express.**Item(ViewName)**

express   一个代表 **CustomViews** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ViewName | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 CustomView 对象。

## 示例


```JavaScript
/*本示例显示名为“example”的自定义视图中是否包含打印设置。*/
function test() {
    alert(Application.ActiveWorkbook.CustomViews.Item("example").PrintSettings)
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
