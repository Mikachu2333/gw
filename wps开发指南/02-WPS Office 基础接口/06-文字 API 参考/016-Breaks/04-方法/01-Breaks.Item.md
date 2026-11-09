# Breaks.Item

返回集合中的单个 **Break** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Breaks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Break

## 示例


```JavaScript
/*本示例显示活动文档上活动窗口的第一个窗格的第一页的第一个分隔符出现的页码。*/
function test() {
    let breaks = Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks
    alert(`第一个分隔符出现的页码： ${breaks.Item(1).PageIndex}`)
}
```


```JavaScript
/*本示例向活动文档上活动窗口的第一个窗格的第一页的第一个分隔符后插入“Hello WPS”。*/
function test() {
    let range = Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks.Item(1).Range
    range.InsertAfter("Hello WPS")
}
```
