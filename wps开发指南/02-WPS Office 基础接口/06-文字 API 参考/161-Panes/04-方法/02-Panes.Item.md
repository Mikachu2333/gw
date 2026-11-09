# Panes.Item

将指定窗格作为 **Pane** 对象返回。



## 语法

express.**Item(Index)**

express   一个代表 **Panes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Pane

## 示例


```JavaScript
/*本示例拆分活动窗口并激活第二个窗格为活动窗格。*/
function test() {
    ActiveDocument.ActiveWindow.Panes.Add(30)
    ActiveDocument.ActiveWindow.Panes.Item(2).Activate()
}
```


```JavaScript
/*本示例显示活动窗口中第一个窗格的第一页的高度。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Height)
}
```
