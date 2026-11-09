# TabStop.Next

返回集合中的下一个制表位。只读。



## 语法

express.**Next**

express   一个代表 **TabStop** 对象的变量。

## 类型

TabStop

## 示例


```JavaScript
/*本示例显示选中段落的第二个制表位的位置，单位为英寸。*/
function test() {
    alert(PointsToInches(Application.Selection.Paragraphs.TabStops.Item(1).Next.Position))
}
```


```JavaScript
/*本示例将活动文档首段的第三个制表位删除。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.Item(2).Next.Clear()
}
```
