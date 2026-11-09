# NamedSlideShow 对象

代表自定义幻灯片放映，该幻灯片放映是演示文稿中幻灯片的一个命名子集。

## 说明


 **NamedSlideShow** 对象是 **[NamedSlideShows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/obj)** 集合的成员。 **NamedSlideShows** 集合包含演示文稿中的所有命名幻灯片放映。

使用 **NamedSlideShows** （*index*）（其中 *index* 是自定义幻灯片放映名称或索引号）可返回单个 **NamedSlideShow** 对象。


## 示例


```JavaScript
/*本示例删除活动演示文稿中名为“Quick Show”的自定义幻灯片放映。*/
function test() {
    ActivePresentation.SlideShowSettings.NamedSlideShows.Item("Quick Show").Delete()
}
```
使用 **[SlideIDs](#TODO)** 属性返回一个数组，其中包含指定的自定义放映中所有幻灯片的唯一幻灯片 Id。



```JavaScript
/*本示例显示活动演示文稿所有自定义幻灯片放映的名称。*/
function test() {
    let str = ""
    let namedSlideShows = ActivePresentation.SlideShowSettings.NamedSlideShows
    for (let i = 1; i <= namedSlideShows.Count; i++) {
        str += namedSlideShows.Item(i).Name + "\n"
    }
    alert(str)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShow/member/Delete) | 删除指定的 **NamedSlideShow** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShow/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShow/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShow/member/Name) | 不能使用该属性设置自定义幻灯片放映的名称。使用 **Add** 方法可以新名称再定义一个自定义幻灯片放映。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShow/member/Parent) | 返回指定对象的父对象。 |