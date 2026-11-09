# ControlFormat.RemoveItem

从列表框或组合框中删除一个或多个数据项。



## 语法

express.**RemoveItem(Index, Count)**

express   一个代表 **ControlFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 第一个要删除的数据项编号。有效值为从 1 到列表中的数据项数目（ **ListCount** 属性返回的值）。 |
| Count | 可选 | any | 要删除的数据项数目，从 _Index_ 项开始。如果省略该参数，则只删除一个数据项。如果 _Index_ \+ _Count_ 超过列表中的数据项数目，则删除列表中从 _Index_ 项到最后一项的所有数据项并且不报错。 |

## 返回值

void

## 说明


如果指定对象定义了填充区域，则该方法无效。

使用 **[RemoveAllItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/RemoveAllItems)** 方法删除 ET 列表框或组合框中的所有数据项。



## 示例


```JavaScript
/*本示例删除列表框中选定的数据项。如果 `Shapes.Item(2)` 代表的不是列表框，则本示例将无效。*/
function test() {
    let controlFormat = Worksheets.Item(1).Shapes.Item(2).ControlFormat
    controlFormat.RemoveItem(controlFormat.ListIndex)
}
```


```JavaScript
/*本示例删除活动工作表的第一个形状（列表框）的两个数据项，从索引1开始。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    shape.ControlFormat.RemoveItem(1, 2)
}
```
