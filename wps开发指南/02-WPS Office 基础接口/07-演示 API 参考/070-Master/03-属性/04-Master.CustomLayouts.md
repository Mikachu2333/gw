# Master.CustomLayouts

返回一个 **[CustomLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/obj)** 对象，该对象代表与指定 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象的演示文稿设计关联的自定义布局。只读。



## 语法

express.**CustomLayouts**

express   一个代表 **Master** 对象的变量。

## 类型

CustomLayouts

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的幻灯片母版第一个自定义版式的名称。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    alert(slide.Master.CustomLayouts.Item(1).Name)
}
```


```JavaScript
/*本示例在活动演示文稿的幻灯片母版中添加一个自定义版式。*/
function test() {
    ActivePresentation.SlideMaster.CustomLayouts.Add(1)
}
```
