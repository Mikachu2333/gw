# TabStops2.Item

获取 **TabStops2** 集合中的单个对象。



## 语法

express.**Item(Index)**

express   一个代表 **TabStops2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的对象的编号。 |

## 返回值

TabStop2

## 示例


```JavaScript
/*本示例运行于表格组件，设置第一张工作表上第二个形状（文本框）中最后一个制表位的类型和相对于左边距的位置。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(2).TextFrame2.Ruler.TabStops
    tabStops2.Item(tabStops2.Count).Type = msoTabStopRight
    tabStops2.Item(tabStops2.Count).Position = 300
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作表上第一个形状（文本框）中第一个制表位相对于左边距的位置。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler.TabStops
    alert(tabStops2.Item(1).Position)
}
```
