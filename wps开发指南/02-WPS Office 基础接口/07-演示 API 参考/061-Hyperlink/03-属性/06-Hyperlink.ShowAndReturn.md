# Hyperlink.ShowAndReturn

决定 WPP 是否返回初始的幻灯片放映以及返回的条件。可读/写。 **MsoTriState** 类型。



## 语法

express.**ShowAndReturn**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

MsoTriState

## 说明


 **ShowAndReturn** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| msoFalse | 默认值。WPP不会从未激活的自定义幻灯片放映返回初始幻灯片放映。                                             |
| msoTrue | WPP从取消激活的自定义幻灯片放映返回初始幻灯片放映，该自定义幻灯片放映通过初始演示文稿的 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/obj)** 对象激活。 |



## 示例


```JavaScript
/*本示例将活动窗口选定的第一张幻灯片的第一个超链接的ShowAndReturn属性值设置为msoTrue。*/
function test() {
    let hyperlink = ActiveWindow.Selection.SlideRange.Item(1).Hyperlinks.Item(1)
    hyperlink.ShowAndReturn = msoTrue
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第二个超链接的ShowAndReturn属性值是否为msoFalse。*/
function test() {
    let hyperlink = ActivePresentation.Slides.Item(1).Hyperlinks.Item(2)
    alert(hyperlink.ShowAndReturn == msoFalse)
}
```
