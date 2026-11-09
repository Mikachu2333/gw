# TabStop2.Position

获取或设置制表位相对于左边距的位置。可读/写。



## 语法

express.**Position**

express   一个代表 **TabStop2** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作表上第一个形状（文本框）中第一个制表位相对于左边距的位置。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler.TabStops
    alert(tabStops2.Item(1).Position)
}
```


```JavaScript
/*本示例运行于表格组件，设置第一张工作表上第二个形状（文本框）中最后一个制表位相对于左边距的位置。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(2).TextFrame2.Ruler.TabStops
    tabStops2.Item(tabStops2.Count).Position = 200
}
```
