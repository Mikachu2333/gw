# Presentations 对象

在 WPP 中的所有 [ **Presentation** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj) 对象的集合。每个 **Presentation** 对象代表 WPP 中当前打开的一个演示文稿。

## 说明


 **Presentations** 集合不包含开放式加载宏，它是一种特殊类型的隐藏演示文稿。但是如果知道某单个开放式加载宏的文件名，就可以返回它。例如，Presentations("oscar.ppa") 将以 **Presentation** 对象的形式返回名为“Oscar.ppa”的开放式加载宏。但是，建议使用 **AddIns** 集合返回开放式加载宏。

如果Visual Studio解决方案包含 Kingsoft.Office.Interop.Wppapi 的引用，该属性将映射到以下类型:

* Kingsoft.Office.Interop.Wppapi.\_Presentations.GetEnumerator（若要列举 Presentation 对象）。

使用 [ **Presentations** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/obj) 属性返回 **Presentation** 集合。使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/member/Add) 方法创建一个新演示文稿并将其添加到集合中。


## 示例


```JavaScript
/*本示例创建一个新的演示文稿，添加一张幻灯片到演示文稿中，然后保存该演示文稿。*/
function test() {
    let presentation = Application.Presentations.Add(msoTrue)
    presentation.Slides.Add(1, ppLayoutTitle)
    presentation.SaveAs("D:\\Sample.pptx")
}
```
使用 **Presentations** (*index*)返回单个 **Presentation** 对象，其中 *index* 是演示文稿的名称或索引号。



```JavaScript
/*本示例打印第一篇演示文稿。*/
function test() {
    Application.Presentations.Item(1).PrintOut()
}
```
使用 [ **Open** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/member/Open) 方法打开演示文稿并将其添加到 **Presentations** 集合中。



```JavaScript
/*本示例以只读方式打开演示文稿 sales.ppt。*/
function test() {
    Application.Presentations.Open("D:\\sales.ppt", msoTrue)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/member/Add) | 创建一个演示文稿。返回一个代表新演示文稿的 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/member/Item) | 从指定 **Presentations** 集合中返回单个 **Presentation** 对象。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/member/Open) | 打开指定的演示文稿。返回一个 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象，该对象代表已打开的演示文稿。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/member/Count) | 返回指定集合中的对象数。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/member/Parent) | 返回指定对象的父对象。 |