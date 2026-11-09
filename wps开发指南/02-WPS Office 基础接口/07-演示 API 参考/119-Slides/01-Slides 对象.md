# Slides 对象

指定的演示文稿中所有 [ **Slide** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj) 对象的集合。

## 说明


如果您的Visual Studio解决方案包括 **Kingsoft.Office.Interop.Wppapi** 的引用，此集合将映射到以下类型︰

* **Kingsoft.Office.Interop.Wppapi.Slides.GetEnumerator** （用于枚举 **Slide** 对象。）

以下示例说明如何执行下列操作：

* 创建一张幻灯片并将其添加到集合中

* 返回通过名称、索引号或幻灯片 ID 号指定的单张幻灯片

* 返回演示文稿中幻灯片的子集

* 同时将一种属性或方法应用到演示文稿中的所有幻灯片

使用 [ **Slides** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/obj) 属性返回 **Slides** 集合。使用 [ **Add** ](#TODO) 方法新建幻灯片并将其添加到集合中。


## 示例


```JavaScript
/*本示例将新幻灯片添加到活动演示文稿。*/
function test() {
    ActivePresentation.Slides.Add(2, ppLayoutBlank)
}
```
使用 **Slides** (*index*)（其中 *index* 是幻灯片名称或索引号）或使用 **Slides.FindBySlideID** (*index*)（其中 *index* 是幻灯片 ID 号）返回单个 **Slide** 对象。



```JavaScript
/*本示例展示了如何设置活动演示文稿中第一张幻灯片的版式。*/
function test() {
    ActivePresentation.Slides.Item(1).Layout = ppLayoutTitle
}
```
使用 **Slides.Range** (*index*) 返回代表 **Slides** 集合的一个子集的 [ **SlideRange** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj) 对象，其中 *index* 是幻灯片索引号或名称，或者幻灯片索引号的数组或幻灯片名称的数组。



```JavaScript
/*本示例设置活动演示文稿中第一、三张幻灯片的背景填充。*/
function test() {
    let slideRange = ActivePresentation.Slides.Range([1, 3])
    slideRange.FollowMasterBackground = msoFalse
    slideRange.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```
如果要同时对演示文稿中所有幻灯片进行某种操作（例如全部删除或设置它们的某些属性），可不带参数使用 **Slides.Range** 创建一个包含 **Slides** 集合中所有幻灯片的 **SlideRange** 集合，然后将适当的属性或方法应用于 **SlideRange** 集合。



```JavaScript
/*本示例设置活动演示文稿中所有幻灯片的背景填充。*/
function test() {
    let slideRange = ActivePresentation.Slides.Range()
    slideRange.FollowMasterBackground = msoFalse
    slideRange.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```
请注意，幻灯片在创建时会被自动指定名称，格式为“幻灯片n”（其中 n 为整数）。若要为幻灯片指定更有意义的名称，请使用 **Name** 属性。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddSlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/AddSlide) | 创建新的幻灯片，将其添加到 **Slides** 集合，然后返回幻灯片。 |
| [InsertFromFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/InsertFromFile) | 将文件中的幻灯片插入演示文稿的指定位置。返回一个 **Integer** ，表示插入的幻灯片数量。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/Item) | 从指定的 **Slides** 集合中返回单个 **Slide** 对象。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/Paste) | 将剪贴板上的幻灯片粘贴到演示文稿的 **Slides** 集合中。用 **Index** 参数可以指定要插入幻灯片的位置。返回一个代表粘贴对象的 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象。每张粘贴幻灯片都成为指定的 **Slides** 集合的成员。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/Range) | 返回一个代表 **[Slides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/obj)** 集合中的幻灯片子集的 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/Count) | 返回指定集合中的对象数。只读。 |