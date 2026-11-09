# TabStops2.Add

将新的制表位添加到指定的 **TabStops2** 对象中。



## 语法

express.**Add(Type, Position)**

express   一个代表 **TabStops2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | MsoTabStopType | 要添加的制表位的类型。 |
| Position | 必选 | number（float 精度） | 新制表位相对于文本框的左边缘的水平位置。数值以磅为单位计算；字符串使用指定的单位计算，可以使用 Office 产品支持的任何度量单位。 |

## 返回值

TabStop2

## 说明


 **MsoTabStopType** 类型的示例包括 **msoTabStopCenter** 、 **msoTabStopLeft** 和 **msoTabStopRight** 。



## 示例


```JavaScript
/*本示例运行于表格组件，向第一张工作表上第一个形状（文本框）中添加一个制表位，并显示该文本框中制表位的数量。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(1).TextFrame2.Ruler.TabStops
    tabStops2.Add(msoTabStopRight, 300)
    alert(tabStops2.Count)
}
```


```JavaScript
/*本示例运行于表格组件，向活动工作表上第二个形状（文本框）中添加两个居中的制表位。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(2).TextFrame2.Ruler.TabStops
    tabStops2.Add(msoTabStopCenter, 50)
    tabStops2.Add(msoTabStopCenter, 100)
}
```
