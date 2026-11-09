# TabStop2.Type

获取或设置 **TabStop2** 对象的类型。可读/写。



## 语法

express.**Type**

express   一个代表 **TabStop2** 对象的变量。

## 类型

[MsoTabStopType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTabStopType)

## 说明


 **MsoTabStopType** 类型的示例包括 **msoTabStopCenter** 、 **msoTabStopLeft** 和 **msoTabStopRight** 。



## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作表上第一个形状（文本框）中第一个制表位的类型是否为msoTabStopCenter。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler.TabStops
    alert(tabStops2.Item(1).Type == msoTabStopCenter)
}
```


```JavaScript
/*本示例运行于表格组件，设置第一张工作表上第二个形状（文本框）中最后一个制表位的类型和相对于左边距的位置。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(2).TextFrame2.Ruler.TabStops
    tabStops2.Item(tabStops2.Count).Type = msoTabStopRight
    tabStops2.Item(tabStops2.Count).Position = 300
}
```
