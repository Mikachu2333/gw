# Design 对象

代表单张幻灯片设计模板。 **Design** 对象是 **[Designs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/obj)** 和 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 集合以及 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 和 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 对象的成员。

## 说明


使用 **Master** 、 **Slide** 或 **SlideRange** 对象的 **Design** 属性访问 **Design** 对象，例如：

* `ActivePresentation.SlideMaster.Design`
* `ActivePresentation.Slides(1).Design`
* `ActivePresentation.Slides.Range().Design`

分别使用 **[Designs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/obj)** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Add)** 、 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Item)** 、 **[Clone](#TODO)** 或 **[Load](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Load)** 方法添加、引用、克隆或加载一个 **Design** 对象。例如，若要添加一个设计模板，请使用 `ActivePresentation.Designs.Add("MyDesign")`。


## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的设计模板的名称。*/
function test() {
    alert(ActivePresentation.SlideMaster.Design.Name)
}
```


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的设计模板移动到第二个设计模板的位置上。*/
function test() {
    ActivePresentation.Slides.Item(1).Design.MoveTo(2)
}
```


```JavaScript
/*本示例锁定并保护活动演示文稿上所有幻灯片的设计模板。*/
function test() {
    let slides = ActivePresentation.Slides
    let design = slides.Range().Design
    design.Preserved = msoTrue
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/member/Delete) | 删除指定的 **Design** 对象。 |
| [MoveTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/member/MoveTo) | 将指定对象移动到同一集合中的指定位置，并适当地对集合中所有其他项目进行重新编号。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/member/Index) | 返回 **Long** 类型值，该值代表设计的索引号。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/member/Name) | 返回或设置指定对象的名称。 **String** 类型，可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/member/Parent) | 返回指定对象的父对象。 |
| [Preserved](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/member/Preserved) | 设置或返回一个 **MsoTriState** 类型的常量，该常量代表是否保护设计母版以避免被更改。可读/写。 |
| [SlideMaster](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/member/SlideMaster) | 返回一个 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象，该对象代表幻灯片设计母版。只读。 |