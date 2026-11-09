# HeaderFooter.Index

返回 **WdHeaderFooterIndex** 类型值，代表文档或节中指定的页眉或页脚。只读。



## 语法

express.**Index**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

WdHeaderFooterIndex

## 示例


```JavaScript
/*本示例判断如果指定的变量引用第一个页眉，则将形状添加到活动文档的第一个页眉。*/
function test() {
    let headerFooter = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterFirstPage)
    if (headerFooter.Index == wdHeaderFooterFirstPage) {
        headerFooter.Shapes.AddShape(msoShapeHeart, 36, 36, 36, 36).Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例显示所选页眉是否为偶数页页眉。*/
function test() {
    alert(Selection.HeaderFooter.Index == wdHeaderFooterEvenPages)
}
```
