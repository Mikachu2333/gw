# TabStops2.DefaultSpacing

获取或设置制表位之间的默认间隔。可读/写。



## 语法

express.**DefaultSpacing**

express   一个代表 **TabStops2** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于表格组件，显示第一张工作表上第一个形状（文本框）中制表位之间的默认间隔。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(1).TextFrame2.Ruler.TabStops
    alert(tabStops2.DefaultSpacing)
}
```


```JavaScript
/*本示例运行于表格组件，设置活动工作表上第二个形状（文本框）中制表位之间的默认间隔。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(2).TextFrame2.Ruler.TabStops
    tabStops2.DefaultSpacing = 36
}
```
