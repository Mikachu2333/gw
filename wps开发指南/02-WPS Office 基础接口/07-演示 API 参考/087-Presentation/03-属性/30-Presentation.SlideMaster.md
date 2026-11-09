# Presentation.SlideMaster

返回一个 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象，该对象代表幻灯片母版。



## 语法

express.**SlideMaster**

express   一个代表 **Presentation** 对象的变量。

## 类型

Master

## 示例


```JavaScript
/*本示例设置当前演示文稿的幻灯片母版的背景图案。*/
function test() {
    Application.ActivePresentation.SlideMaster.Background.Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例显示第一篇演示文稿的幻灯片母版的名称。*/
function test() {
    alert(Presentations.Item(1).SlideMaster.Name)
}
```
