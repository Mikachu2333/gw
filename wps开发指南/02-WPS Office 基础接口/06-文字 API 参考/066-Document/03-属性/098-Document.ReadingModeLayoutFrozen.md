# Document.ReadingModeLayoutFrozen

设置或返回一个 **Boolean** 类型的值，该值表示是否将阅读版式视图中显示的页面冻结为指定大小以向文档插入手写标记。



## 语法

express.**ReadingModeLayoutFrozen**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


使用 **[ReadingLayoutSizeX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadingLayoutSizeX)** 和 **[ReadingLayoutSizeY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ReadingLayoutSizeY)** 属性可指定将阅读版式大小冻结以向文档插入手写标记时所显示的页面的大小。



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
/*本示例显示第一个文档的 ReadingModeLayoutFrozen 属性值。*/
function test() {
    alert(Documents.Item(1).ReadingModeLayoutFrozen)
}
```
