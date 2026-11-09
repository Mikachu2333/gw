# Comments 对象

代表 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/obj)** 对象的集合。

## 说明


使用 [ **Comments** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Comments) 属性引用 **Comments** 集合。


## 示例


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的批注的数量。*/
function test() {
    let comments = ActiveWindow.Selection.SlideRange.Item(1).Comments
    alert(`You have ${comments.Count} comments on this slide.`)
}
```
使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comments/member/Add) 方法在幻灯片中添加一个批注。



```JavaScript
/*本示例为活动演示文稿新建一张幻灯片，并为该幻灯片添加新批注。*/
function test() {
    let slide = ActivePresentation.Slides.Add(1, ppLayoutBlank)
    slide.Comments.Add(12, 12, "Jeff Smith", "JS", "You might consider reviewing the new specs for more up-to-date information.")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comments/member/Add) | 返回一个代表添加到幻灯片中的新批注的 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comments/member/Item) | 从指定的 **Comments** 集合中返回单个 **Comment** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comments/member/Count) | 返回指定集合中的对象数。只读。 |