# Series.Formula

用宏语言以 A1 样式表示法返回或设置对象的公式。可读/写 **String** 类型。



## 语法

express.**Formula**

express   一个代表 **Series** 对象的变量。

## 类型

string

## 说明


此属性对于 OLAP 数据源无效。

如果对象包含一个常量，则此属性返回该常量。如果对象为空，则此属性返回一个空字符串。如果对象包含公式，则此属性将该公式作为一个字符串返回，所用格式与编辑栏中显示的格式相同（包括等号）。

如果指定区域是一维或二维区域，则可将公式指定为 JavaScript 中相同维数的数组。同样，也可在 JavaScript 数组中使用公式。



## 示例


```JavaScript
/*本示例显示第一篇演示文稿上第一张幻灯片中第一个图表的第三个系列的公式。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.SeriesCollection(3).Formula)
    }
}
```


```JavaScript
/*本示例显示活动演示文稿上第二张幻灯片中第一个图表的第一个系列的公式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.SeriesCollection(1).Formula)
    }
}
```
