# PageSetup.TopMargin

返回或设置页面的上边缘与正文文本的上边界之间的距离（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**TopMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一节的上边距设置为 72 磅（1 英寸）。*/
function test() {
    ActiveDocument.Sections.Item(1).PageSetup.TopMargin = 72
}
```


```JavaScript
/*本示例显示所选内容第一节的上边距。*/
function test() {
    alert(Selection.Sections.Item(1).PageSetup.TopMargin)
}
```
