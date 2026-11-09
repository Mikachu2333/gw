# TableStyles.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **TableStyles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

TableStyle

## 示例


```JavaScript
/*本示例显示活动工作簿的表格样式中第一个样式名称。*/
function test() {
    alert(ActiveWorkbook.TableStyles.Item(1).Name)
}
```


```JavaScript
/*本示例显示第一张工作簿的表格样式中第二个样式是否在数据透视表样式的库中显示。*/
function test() {
    let tableStyle = Workbooks.Item(1).TableStyles.Item(2)
    alert(tableStyle.ShowAsAvailablePivotTableStyle)
}
```
