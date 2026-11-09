# Placeholders 对象

代表指定幻灯片上占位符的所有 **Shape** 对象的集合。

## 说明


 **Placeholders** 集合中的每个 **Shape** 对象代表一个占位符，占位符可以是文本、图表、表格、组织结构图或其他类型的对象。如果幻灯片有标题，则标题是集合中的第一个占位符。

使用 **[Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Delete)** 方法可以删除各个占位符，而且可以使用 **[AddPlaceholder](#TODO)** 方法恢复删除的占位符，但添加占位符时不能使占位符数多于幻灯片创建时所具有的数目。要更改给定幻灯片上的占位符数目，请设置 **[Layout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Layout)** 属性。

使用 **[Placeholders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Placeholders)** 属性返回 **Placeholders** 集合。使用 **Placeholders** (*index*)（其中 **index** 是占位符索引号）可返回表示单个占位符的 **Shape** 对象。请注意，对于任何具有标题的幻灯片，`Shapes.Title` 等效于 `Shapes.Placeholders(1)`。


## 示例


```JavaScript
/*本示例将具有项目符号列表幻灯片布局的新幻灯片添加到活动演示文稿的开头，设置标题的文本，并向文本中添加两个段落。*/
function test() {
    let shapes = ActivePresentation.Slides.Add(1, ppLayoutText).Shapes
    shapes.Title.TextFrame.TextRange.Text = "This is the title text"
    shapes.Placeholders.Item(2).TextFrame.TextRange.Text = "Item 1\rItem 2"
}
```


```JavaScript
/*本示例判断如果活动窗口所选的第一张幻灯片的最后一个占位符的类型为副标题，则通知用户。*/
function test() {
    let placeholders = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Placeholders
    let format = placeholders.Item(placeholders.Count).PlaceholderFormat
    if (format.Type == ppPlaceholderSubtitle) {
        alert("最后一个占位符的类型为副标题")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Placeholders/member/Item) | 从指定的 **Placeholders** 集合中返回单个 **Shape** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Placeholders/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Placeholders/member/Count) | 返回指定集合中的对象数目。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Placeholders/member/Parent) | 返回指定对象的父对象。 |