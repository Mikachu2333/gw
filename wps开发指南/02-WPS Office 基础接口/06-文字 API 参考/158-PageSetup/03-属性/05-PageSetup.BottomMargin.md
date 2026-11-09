# PageSetup.BottomMargin

返回或设置页面底边与正文文本边界之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**BottomMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档的下边距设置为 72 磅（即 1 英寸），上边距设置为 2 英寸。InchesToPoints 方法用来将英寸转化为磅值。*/
function test() {
    let pageSetup = ActiveDocument.PageSetup
    pageSetup.BottomMargin = 72
    pageSetup.TopMargin = InchesToPoints(2)
}
```


```JavaScript
/*本示例将当前选定内容所有节的下边距设置为 2.5 英寸。*/
function test() {
    Selection.PageSetup.BottomMargin = InchesToPoints(2.5)
}
```


```JavaScript
/*本示例显示所选部分第一节的下边距。PointsToInches 方法用来将结果转换为英寸。*/
function test() {
    let bottommargin = Selection.Sections(1).PageSetup.BottomMargin
    alert(`${PointsToInches(bottommargin)} inches`)
}
```
