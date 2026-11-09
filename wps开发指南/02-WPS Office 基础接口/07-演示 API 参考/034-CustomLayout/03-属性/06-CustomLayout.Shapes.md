# CustomLayout.Shapes

返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合，该集合代表包含在指定的自定义版式中的所有版式元素。只读。



## 语法

express.**Shapes**

express   一个代表 **CustomLayout** 对象的变量。

## 类型

Shapes

## 说明


版式元素的 **Shapes** 集合可以包含绘图、图形、OLE 对象、图片、文本对象、标题、页眉、页脚、幻灯片编号以及日期和时间对象。



## 示例


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片关联的自定义版式的幻灯片标题的名称。*/
function test() {
    let customLayout = ActiveWindow.Selection.SlideRange.Item(1).CustomLayout
    alert(customLayout.Shapes.Title.Name)
}
```


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版关联的最后一个自定义版式是否包含标题占位符。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    alert(customLayouts.Item(customLayouts.Count).Shapes.HasTitle === msoTrue)
}
```
