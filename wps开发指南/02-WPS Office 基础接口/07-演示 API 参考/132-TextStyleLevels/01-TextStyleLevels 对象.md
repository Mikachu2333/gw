# TextStyleLevels 对象

所有大纲文本级别的集合。该集合始终包含五个成员，每个成员由一个 **[TextStyleLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevel/obj)** 对象代表。

## 说明

使用 **Levels** (_index_) 返回单个 **TextStyleLevel** 对象，其中 _index_ 为 1 到 5 的数字，对应于五个大纲级别。


## 示例


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的正文样式中第一个大纲级别的字体格式。*/
function test() {
    let textStyleLevel = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle).Levels.Item(1)
    let font = textStyleLevel.Font
    font.Name = "Arial"
    font.Size = 36
}
```


```JavaScript
/*本示例设置活动演示文稿的备注母版的正文样式中每个大纲级别的文本字体大小。*/
function test() {
    let textStyleLevels = ActivePresentation.NotesMaster.TextStyles.Item(ppBodyStyle).Levels
    textStyleLevels.Item(1).Font.Size = 34
    textStyleLevels.Item(2).Font.Size = 30
    textStyleLevels.Item(3).Font.Size = 25
    textStyleLevels.Item(4).Font.Size = 20
    textStyleLevels.Item(5).Font.Size = 15
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevels/member/Item) | 从指定的 **TextStyleLevels** 集合中返回单个文本样式级别。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevels/member/Count) | 返回指定集合中的对象数。只读。 |