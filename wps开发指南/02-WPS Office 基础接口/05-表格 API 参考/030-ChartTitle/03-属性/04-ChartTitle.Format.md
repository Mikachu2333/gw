# ChartTitle.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

ChartFormat

## 说明


 **ChartFormat** 对象包含图表区的线条、填充、效果和文本格式。



## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 中图表的标题前景填充色为绿色。*/
function test() {
    let charttitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartTitle
    charttitle.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例设置图表工作表 Chart2 中图表的标题边框线条的粗细。*/
function test() {
    let charttitle = Application.Charts.Item("Chart2").ChartObjects(1).Chart.ChartTitle
    charttitle.Format.Line.Weight = 2
}
```
