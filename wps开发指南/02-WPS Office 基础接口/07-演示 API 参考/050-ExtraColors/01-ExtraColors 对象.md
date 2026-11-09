# ExtraColors 对象

代表演示文稿中的其他颜色。该对象最多可以包含八种颜色，每种颜色由一个 RGB 值表示。

## 说明


使用 [ **ExtraColors** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/ExtraColors) 属性返回 **ExtraColors** 对象。使用 **ExtraColors** (_index_) 返回单个其他颜色的红-绿-蓝（RGB）值，其中 _index_ 是其他颜色索引号。


## 示例


```JavaScript
/*本示例在当前演示文稿的第一张幻灯片中添加一个矩形，并将其前景填充颜色设为第一种其他颜色。演示文稿中必须已定义至少一种其他颜色，否则本示例将失败。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200)
    shape.Fill.ForeColor.RGB = ActivePresentation.ExtraColors.Item(1)
}
```
使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ExtraColors/member/Add) 方法添加其他颜色。



```JavaScript
/*本示例向活动演示文稿添加一个额外的颜色。*/
function test() {
    ActivePresentation.ExtraColors.Add(msoThemeAccent5)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ExtraColors/member/Add) | 如果尚未添加某颜色，则将该颜色添加到其他颜色中，使之在演示文稿中可用。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ExtraColors/member/Item) | 从指定的 **ExtraColors** 集合中返回单个颜色。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ExtraColors/member/Count) | 返回指定集合中的对象数。只读。 |