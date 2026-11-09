# TabStop2.Clear

删除指定的自定义制表位。



## 语法

express.**Clear()**

express   一个代表 **TabStop2** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例运行于表格组件，删除活动工作表上第一个形状（文本框）中第一个自定义制表位。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler.TabStops
    tabStops2.Item(1).Clear()
}
```


```JavaScript
/*本示例运行于表格组件，删除第一张工作表上第二个形状（文本框）中最后一个自定义制表位。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(2).TextFrame2.Ruler.TabStops
    tabStops2.Item(tabStops2.Count).Clear()
}
```
