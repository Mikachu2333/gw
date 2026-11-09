# LineNumbering 对象

代表位于左边距中的行号或位于各新闻稿样式分栏左侧的行号。

## 说明


使用 **LineNumbering** 属性可返回 **LineNumbering** 对象。


## 示例


```JavaScript
/*本示例对活动文档的第一节中的文本应用行号。*/
function test() {
    let lineNumbering = Application.ActiveDocument.Sections.Item(1).PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.CountBy = 5
    lineNumbering.RestartMode = wdRestartPage
}
```


```JavaScript
/*本示例示例对当前节中的各页应用行号。*/
function test() {
    Selection.PageSetup.LineNumbering.Active = true
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineNumbering/member/Active) | 如果指定文档、一节或多节的行号处于活动状态，则该属性值为 **True** 。 **Long** 类型，可读写。 |
| [CountBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineNumbering/member/CountBy) | 返回或设置行号的间隔数值。 **Long** 类型，可读写。 |
| [DistanceFromText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineNumbering/member/DistanceFromText) | 返回或设置行号右边和文档正文左边界之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [RestartMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineNumbering/member/RestartMode) | 返回或设置行号的编排方式，即是从新页或节的开头开始编号、还是连续编号。 **WdNumberingRule** 类型，可读写。 |
| [StartingNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineNumbering/member/StartingNumber) | 返回或设置起始行号。 **Long** 类型，可读写。 |