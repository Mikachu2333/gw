# Options.SnapToGrid

如果自选图形或东亚字符在绘制、移动或调整大小时自动与不可见网格对齐，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**SnapToGrid**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


绘制或移动自选图形或者调整其大小时，按下 Alt 可以暂时使该设置无效。



## 示例


```JavaScript
/*以下示例设置 WPS 使新文档的自选图形自动与不可见的网格对齐。*/
function test() {
    Options.SnapToGrid = true
    Documents.Add()
}
```


```JavaScript
/*本示例判断如果自选图形或东亚字符在绘制、移动或调整大小时自动与不可见网格对齐，则通知用户。*/
function test() {
    if (Options.SnapToGrid) {
        alert("自选图形或东亚字符在绘制、移动或调整大小时自动与不可见网格对齐")
    }
}
```
