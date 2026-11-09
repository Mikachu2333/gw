# CustomLayouts 对象

代表与演示文稿设计关联的自定义版式的集合。

## 说明


使用幻灯片 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象的 **[CustomLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/CustomLayouts)** 属性可返回 **CustomLayouts** 集合。使用 **CustomLayouts** (_index_) 可返回单个 **[CustomLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/obj)** 对象，其中 _index_ 是配色方案索引号。

使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/member/Add)** 方法可创建新的自定义版式并将其添加到 **CustomLayouts** 集合中。使用 **[Paste](#TODO)** 方法可将剪贴板中的幻灯片作为 **CustomLayout** 对象粘贴到 **CustomLayouts** 集合中。

使用 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 或 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象的 **CustomLayout** 属性可返回一张幻灯片或一组幻灯片的自定义版式。


## 示例


```JavaScript
/*本示例为活动演示文稿的幻灯片母版添加一个自定义版式，并设置该自定义版式的名称。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    customLayouts.Add(1)
    customLayouts.Item(1).Name = "example-Layout"
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的幻灯片母版中第一个自定义版式的名称。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Master.CustomLayouts.Item(1).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/member/Add) | 返回代表新自定义版式的 **CustomLayout** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/member/Item) | 从指定集合中返回单个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/member/Count) | 返回指定集合中的对象数。只读。 |