# Document.ReadingLayoutSizeY

设置或返回一个 **Long** 类型的值，该值表示当在阅读版式视图中显示文档并对其冻结了输入手写标记时文档中页面的高度。



## 语法

express.**ReadingLayoutSizeY**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 说明


设置完 **[ReadingLayoutSizeX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadingLayoutSizeX)** 和 **ReadingLayoutSizeY** 属性后，可使用 **[ReadingModeLayoutFrozen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadingModeLayoutFrozen)** 属性以指定的高度和宽度显示页面。使用 **[ReadingLayout](#TODO)** 属性可在阅读版式视图中显示文档。



## 示例


```JavaScript
/*本示例设置在阅读版式视图中显示活动文档并对其冻结了输入手写标记时文档中页面的宽度和高度。*/
function test() {
    ActiveDocument.ReadingLayoutSizeX = 300
    ActiveDocument.ReadingLayoutSizeY = 300
    ActiveDocument.ReadingModeLayoutFrozen = true
}
```


```JavaScript
/*本示例显示在阅读版式视图中展示第一个文档并对其冻结了输入手写标记时文档中页面的高度。*/
function test() {
    alert(Documents.Item(1).ReadingLayoutSizeY)
}
```
