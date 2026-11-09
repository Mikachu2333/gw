# Options.SnapToShapes

如果 WPS 自动将自选图形或中文字符与不可见的网格线对齐，这些网格线穿过其他自选图形或中文字符的垂直和水平边缘，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**SnapToShapes**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


此属性为每个自选图形创建附加的不可见网格线。 **SnapToShapes** 属性与 **SnapToGrid** 属性无关。



## 示例


```JavaScript
/*以下示例设置 WPS 使新文档中的自选图形自动与不可见的网格线对齐，这些网格线穿过其他自选图形的垂直和水平边缘。*/
function test() {
    Options.SnapToShapes = true
    Documents.Add()
}
```


```JavaScript
/*本示例判断如果 WPS 自动将自选图形或中文字符与不可见的网格线对齐，则通知用户。*/
function test() {
    if (Options.SnapToShapes) {
        alert("WPS 自动将自选图形或中文字符与不可见的网格线对齐。")
    }
}
```
