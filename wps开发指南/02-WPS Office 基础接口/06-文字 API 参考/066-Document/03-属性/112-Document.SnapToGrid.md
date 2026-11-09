# Document.SnapToGrid

如果在指定文档中绘制、移动自选图形/东亚字符或者调整它们的大小时，自选图形/东亚字符自动与不可见的网格线对齐，则该属性为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**SnapToGrid**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


绘制、移动自选图形或调整其大小时，按下 Alt 可以暂时使该设置无效。



## 示例


```JavaScript
/*本示例设置 WPS 使活动文档中的东亚字符自动与不可见的网格线对齐。*/
function test() {
    ActiveDocument.SnapToGrid = true
}
```


```JavaScript
/*本示例显示在第一个文档中绘制、移动自选图形/东亚字符或者调整它们的大小时，自选图形/东亚字符是否自动与不可见的网格线对齐。*/
function test() {
    alert(Documents.Item(1).SnapToGrid)
}
```
