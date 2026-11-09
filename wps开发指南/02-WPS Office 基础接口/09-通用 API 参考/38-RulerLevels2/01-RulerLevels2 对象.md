# RulerLevels2 对象

指定标尺上所有 **[RulerLevel2](#TODO)** 对象的集合。

## 说明


每个 **RulerLevel2** 对象均代表特定大纲级别上文本的首行缩进和左缩进。此集合通常包含五个成员（每个可用的大纲级别对应一个）。

使用 **Levels** 属性可返回 **RulerLevels2** 集合。


## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作表上第二个形状（文本框）中 RulerLevels2 对象的实际类型。*/
function test() {
    let ruler2 = ActiveSheet.Shapes.Item(2).TextFrame2.Ruler
    alert(ruler2.Levels.constructor.name)
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作表上第一个形状（文本框）中 RulerLevel2 对象的数量。*/
function test() {
    let ruler2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler
    alert(ruler2.Levels.Count)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/RulerLevels2/member/Count) | 获取一个 **Long** 类型的值，该值指示 **RulerLevels2** 集合中的项数。只读。 |