# Design.SlideMaster

返回一个 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象，该对象代表幻灯片设计母版。只读。



## 语法

express.**SlideMaster**

express   一个代表 **Design** 对象的变量。

## 类型

Master

## 示例


```JavaScript
/*以下示例设置活动演示文稿的第一个幻灯片设计母版的背景图案。*/
function test() {
    ActivePresentation.Designs.Item(1).SlideMaster.Background.Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例显示第一篇演示文稿的第一个幻灯片设计母版底部页脚区的文本。*/
function test() {
    let master = Presentations.Item(1).Designs.Item(1).SlideMaster
    alert(master.HeadersFooters.Footer.Text)
}
```
