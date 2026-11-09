# TextFrame2.Ruler

返回一个 **Ruler2** 对象，该对象代表指定文本的标尺。只读。



## 语法

express.**Ruler**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

Ruler2

## 示例


```JavaScript
/*本示例在活动工作表中第一个形状的文本框中添加一个居中对齐的制表位，该制表位距离文本框左侧144磅。*/
function test() {
    let ruler2 = Application.ActiveSheet.Shapes.Item(1).TextFrame2.Ruler
    ruler2.TabStops.Add(msoTabStopCenter, 144)
}
```


```JavaScript
/*本示例在第一张工作表中第二个形状的文本框中添加一个右对齐的制表位，该制表位距离文本框左侧50磅。*/
function test() {
    let ruler2 = Application.Worksheets.Item(1).Shapes.Item(2).TextFrame2.Ruler
    ruler2.TabStops.Add(msoTabStopRight, 50)
}
```
