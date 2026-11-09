# Tags 对象

代表可为形状、幻灯片或演示文稿创建的标记或自定义属性。

## 说明


每个 **Tags** 对象包含一个自定义属性名称和该属性的值。

如果要对集合的指定成员进行选择性操作，请基于非内置的属性创建标记。例如，如果要根据所应用的国家/地区中来分类演示文稿中的幻灯片，可以创建地区标记并为每个幻灯片的地区标记赋值。然后，可以根据地区标记值对某些幻灯片进行选择性操作，例如将地区标记值为“East”的所有幻灯片隐藏。

使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/member/Add) 方法将标记添加到对象。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加名为“Region”且值为“East”的标记。*/
function test() {
    let tags = ActivePresentation.Slides.Item(1).Tags
    tags.Add("Region", "East")
}
```
使用 **Tags** (_index_) 返回标记值，其中 _index_ 是标记名称。



```JavaScript
/*此示例判断如果活动演示文稿的幻灯片中名为“region”的标记的值不为“east”，则隐藏该幻灯片。*/
function test() {
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let slide = ActivePresentation.Slides.Item(i)
        if (slide.Tags.Item("region") != "east") {
            slide.SlideShowTransition.Hidden = msoTrue
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/member/Add) | 向对象的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 集合中添加标记。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/member/Delete) | 删除标记。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/member/Item) | 从指定的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 集合中返回单个标记。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/member/Name) | 以 **String** 类型返回指定标记的名称。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/member/Value) | 以 **String** 类型返回指定标记的值。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/member/Count) | 返回指定集合中的对象数。只读。 |