# Panes.Item

从指定 Panes 集合中返回单个 Pane 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Panes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 Pane 对象的索引号。 |

## 返回值

Pane

## 示例


```JavaScript
/*本示例判断如果活动窗口的活动窗格的视图类型为ppViewSlide，则激活第三个窗格。*/
function test() {
    if (ActiveWindow.ActivePane.ViewType == ppViewSlide) {
        ActiveWindow.Panes.Item(3).Activate()
    }
}
```


```JavaScript
/*本示例显示第一个窗口的第三个窗格是否处于活动状态。*/
function test() {
    alert(Windows.Item(1).Panes.Item(3).Active == msoTrue)
}
```
