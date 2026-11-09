# InlineShapes.AddHorizontalLineStandard

向当前文档添加一条横线。



## 语法

express.**AddHorizontalLineStandard(Range)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 可选 | any | WPS 在其上方放置横线的区域。如果省略该参数，则 WPS 会将横线放置在当前选定内容的上方。 |

## 返回值

InlineShape

## 说明


要添加基于现有图像文件的横线，可用 **AddHorizontalLine** 方法。



## 示例


```JavaScript
/*本示例将一条横线添加到活动文档第五段的上方。*/
function test() {
    ActiveDocument.Paragraphs.Item(5).Range.InlineShapes.AddHorizontalLineStandard()
}
```


```JavaScript
/*本示例向活动文档所选区域的上方添加一条横线。*/
function test() {
    ActiveDocument.InlineShapes.AddHorizontalLineStandard(Selection.Range)
}
```
