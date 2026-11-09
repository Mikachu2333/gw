# LineFormat.Pattern

返回或设置一个代表填充图案的 **MsoPatternType** 值。



## 语法

express.**Pattern**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoPatternType

## 示例


```JavaScript
/*本示例将第一张工作表中第二个形状线条的图案设置为十字形。*/
function test() {
    let line = Worksheets.Item(1).Shapes.Item(2).Line
    line.Pattern = msoPatternCross
}
```


```JavaScript
/*本示例显示活动工作表的第一个形状线条图案是否为混和图案。*/
function test() {
    let line = ActiveSheet.Shapes.Item(1).Line
    alert(line.Pattern == msoPatternMixed)
}
```
