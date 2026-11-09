# TabStop.Previous

返回集合中的上一个制表位。只读。



## 语法

express.**Previous**

express   一个代表 **TabStop** 对象的变量。

## 类型

TabStop

## 示例


```JavaScript
/*本示例显示选中段落的第三个制表位的位置，单位为英寸。*/
function test() {
    alert(PointsToInches(Application.Selection.Paragraphs.TabStops.Item(4).Previous.Position))
}
```


```JavaScript
/*本示例将活动文档首段的第一个制表位删除。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.Item(2).Previous.Clear()
}
```
