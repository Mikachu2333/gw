# Panes.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Panes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号 |

## 返回值

Pane

## 示例


```JavaScript
/*此示例激活第一个窗口为活动窗口，拆分该窗口，然后滚动左下角的窗格，直至第五行处于该窗格的顶端。*/
function test() {
    Application.Windows.Item(1).Activate()
    Application.ActiveWindow.Split = true
    Application.ActiveWindow.Panes.Item(3).ScrollRow = 5
}
```


```JavaScript
/*此示例激活活动窗口第二个窗格。*/
function test() {
    ActiveWindow.Panes.Item(2).Activate()
}
```
