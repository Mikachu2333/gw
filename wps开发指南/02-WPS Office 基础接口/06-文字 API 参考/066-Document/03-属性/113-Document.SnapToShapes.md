# Document.SnapToShapes

如果 WPS 在指定文档中使自选图形或东亚字符自动与不可见网格线对齐，这些网格线穿过其他自选图形或东亚字符的水平和垂直边缘，则该属性为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**SnapToShapes**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


该属性为每个自选图形创建附加的不可见网格线。 **SnapToShapes** 属性与 **[SnapToGrid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SnapToGrid)** 属性独立工作。



## 示例


```JavaScript
/*本示例设置 WPS，使活动文档中的中文字符自动与不可见的网格线对齐，这些网格线穿过其他中文字符的水平和垂直边缘。*/
function test() {
    ActiveDocument.SnapToShapes = true
}
```


```JavaScript
/*本示例显示 WPS 在第一个文档中使自选图形或东亚字符自动与不可见网格线对齐，这些网格线是否穿过其他自选图形或东亚字符的水平和垂直边缘。*/
function test() {
    alert(Documents.Item(1).SnapToShapes)
}
```
