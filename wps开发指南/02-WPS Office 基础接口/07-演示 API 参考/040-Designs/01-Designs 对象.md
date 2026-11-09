# Designs 对象

代表幻灯片设计模板的集合。

## 说明


使用 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象的 **[Designs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Designs)** 属性引用设计模板集合。

若要添加或克隆单个的设计模板，请分别使用 **Designs** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Add)** 或 **[Clone](#TODO)** 方法。若要引用单个的设计模板，请使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Item)** 方法。

若要加载一个设计模板，请使用 **[Load](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Load)** 方法。


## 示例


```JavaScript
/*下面的示例在 Designs 集合中添加新的设计模板，并确认它已正确添加。*/
function test() {
    let designs = ActivePresentation.Designs
    designs.Add("MyDesignName", 1)
    alert(designs.Item(1).Name)
}
```


```JavaScript
/*本示例在第一篇演示文稿的第一个设计模板的幻灯片母版中添加一个矩形。*/
function test() {
    let designs = Presentations.Item(1).Designs
    designs.Item(1).SlideMaster.Shapes.AddShape(msoShapeRectangle, 5, 25, 100, 50)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Add) | 返回一个代表新幻灯片设计的 **[Design](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Item) | 从指定的 **Designs** 集合中返回单个的 **Design** 对象。 |
| [Load](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Load) | 返回一个 **Design** 对象，该对象代表一个已加载到指定演示文稿的母版列表中的设计。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/member/Parent) | 返回指定对象的父对象。 |