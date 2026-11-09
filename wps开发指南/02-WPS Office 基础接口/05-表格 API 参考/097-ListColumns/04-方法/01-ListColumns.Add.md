# ListColumns.Add

向列表对象中添加新列。



## 语法

express.**Add(Position)**

express   一个代表 **ListColumns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Position | 可选 | any | Integer 类型。从 1 开始指定新列的相对位置。以前位于此位置的列则向后移动。 |

## 返回值

一个代表新列的 ListColumn 对象。

## 说明


如果不指定 *Position*，就在最右边添加一列，并自动为该列生成名称。该列的名称可在添加后更改。



## 示例


```JavaScript
/*下例给工作簿的第一张工作表的默认 ListObject 对象添加一个新列。由于未指定位置，因此在最右边添加一个新列。*/
function test() {
    let newColumn = Application.Worksheets.Item(1).ListObjects.Item(1).ListColumns.Add()
}
```


```JavaScript
/*下例给活动工作表的第一个 ListObject 对象添加一个新的列，并加到列表中现有列的第二个位置。*/
function test() {
    ActiveSheet.ListObjects.Item(1).ListColumns.Add(2)
}
```
