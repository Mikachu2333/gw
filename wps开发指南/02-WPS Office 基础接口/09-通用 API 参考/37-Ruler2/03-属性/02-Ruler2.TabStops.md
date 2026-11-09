# Ruler2.TabStops

获取一个代表指定文本的制表位的 **TabStops2** 集合。只读。



## 语法

express.**TabStops**

express   一个代表 **Ruler2** 对象的变量。

## 类型

TabStops2

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
/*本示例运行于表格组件，设置活动工作表上第一个形状（文本框）中制表位之间的默认间隔。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler.TabStops
    tabStops2.DefaultSpacing = 36
}
```
