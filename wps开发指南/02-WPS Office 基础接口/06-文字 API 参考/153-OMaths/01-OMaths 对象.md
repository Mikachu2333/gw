# OMaths 对象

公式的集合。可使用 **OMath** 对象来访问该集合的单个成员。

## 说明


可使用 **Add** 方法来创建一个公式，然后将其添加到文档、所选内容或区域中。


## 示例


```JavaScript
/*本示例创建一个公式，并且使用 BuildUp 方法将该公式转换为专业格式。*/
function test() {
    let range = Selection.Range
    range.Text = "Celsius = (5/9)(Fahrenheit - 32)"
    range.Select()
    range = Selection.OMaths.Add(range)
    range.OMaths.Item(1).BuildUp()
}
```


```JavaScript
/*本示例显示活动文档上第一个公式的对齐方式是否为wdOMathJcCenterGroup。*/
function test() {
    let oMath = ActiveDocument.OMaths.Item(1)
    alert(oMath.Justification == wdOMathJcCenterGroup)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/member/Add) | 根据所指定区域中包含的文本公式创建一个公式，并且返回一个包含新公式的 **Range** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/member/Item) | 返回 **OMath** 对象，该对象表示集合中的指定项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/member/Count) | 返回 **OMaths** 集合中的项目数。只读 **Long** 类型。 |