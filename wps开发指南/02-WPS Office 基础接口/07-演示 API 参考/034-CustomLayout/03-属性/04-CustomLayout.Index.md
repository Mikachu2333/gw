# CustomLayout.Index

返回 **[CustomLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/obj)** 集合中指定的自定义版式的索引位置。只读。



## 语法

express.**Index**

express   一个代表 **CustomLayout** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版关联的最后一个自定义版式的索引位置。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    alert(customLayouts.Item(customLayouts.Count).Index)
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片关联的自定义版式的索引位置。*/
function test() {
    let customLayout = ActiveWindow.Selection.SlideRange.Item(1).CustomLayout
    alert(customLayout.Index)
}
```
