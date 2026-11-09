# DataLabel.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例判断如果活动文档中第一个图表的第一个数据系列的第一个数据标签的文本为“销量”，则将该数据标签设置为有阴影。*/
function test() {
    let inlineshp = ActiveDocument.InlineShapes(1)
    if (inlineshp.HasChart) {
        let datalabel = inlineshp.Chart.SeriesCollection(1).DataLabels().Item(1)
        if (datalabel.Caption == "销量") {
            datalabel.Shadow = true
        }
    }
}
```


```JavaScript
/*此示例显示第一个文档中第一个图表上的第二个数据系列的第四个数据标签是否有阴影。*/
function test() {
    let inlineshp = Documents.Item(1).InlineShapes(1)
    let datalabel = inlineshp.Chart.SeriesCollection(2).DataLabels().Item(4)
    alert(datalabel.Shadow)
}
```
