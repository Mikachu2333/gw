# Fonts 对象

指定的演示文稿中所有 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/obj)** 对象的集合。

## 说明


每个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/obj)** 对象代表演示文稿中使用的一种字体。

使用 **[Fonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Fonts/obj)** 属性可返回 **Fonts** 集合。


## 示例


```JavaScript
/*本示例将当前演示文稿中的黑体替换为仿宋，并为所选内容添加下划线。*/
function test() {
    Application.ActivePresentation.Fonts.Replace("黑体", "仿宋")
    ActiveWindow.Selection.TextRange.Font.Underline = msoTrue
}
```
使用 **Fonts** (*index*)（其中 *index* 是字体的名称或索引号）可返回单个 **Font** 对象。



```JavaScript
/*本示例将第一个演示文稿中使用的楷体替换为等线字体，并显示所选内容的字体名称。*/
function test() {
    Presentations.Item(1).Fonts.Replace("楷体", "等线")
    alert(ActiveWindow.Selection.TextRange.Font.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Replace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Fonts/member/Replace) | 替换 **Fonts** 集合中的一种字体。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Fonts/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |