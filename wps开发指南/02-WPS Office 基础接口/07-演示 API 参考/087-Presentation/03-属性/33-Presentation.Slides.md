# Presentation.Slides

返回一个 **[Slides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/obj)** 集合，该集合代表指定演示文稿中的所有幻灯片。只读。



## 语法

express.**Slides**

express   一个代表 **Presentation** 对象的变量。

## 类型

Slides

## 示例


```JavaScript
/*本示例向活动演示文稿添加一张幻灯片。*/
function test() {
    Application.ActivePresentation.Slides.Add(1, ppLayoutTitle)
}
```


```JavaScript
/*本示例显示第一篇演示文稿的最后一张幻灯片的名称。*/
function test() {
    let slides = Presentations.Item(1).Slides
    alert(slides.Item(slides.Count).Name)
}
```
