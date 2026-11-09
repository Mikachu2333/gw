# Pane 对象

代表一个窗格。 **Pane** 对象是 **Panes** 集合的一个成员。 **[Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Panes/obj)** 集合包含单个窗口的所有窗格。

## 说明


使用 **Panes** (*Index*) 可返回一个 **Pane** 对象，其中 *Index* 为索引号。


## 示例


```JavaScript
/*本示例关闭活动窗格。*/
function test() {
    if (ActiveDocument.ActiveWindow.Panes.Count >= 2) {
        ActiveDocument.ActiveWindow.ActivePane.Close()
    }
}
```
使用 **Add** 方法或 **Split** 属性可添加一个窗格。



```JavaScript
/*本示例按当前窗口大小的 20% 拆分活动窗口。*/
function test() {
    ActiveDocument.ActiveWindow.Panes.Add(20)
}
```


```JavaScript
/*本示例将活动窗口一分为二。*/
function test() {
    ActiveDocument.ActiveWindow.Split = true
}
```
使用 **SplitSpecial** 属性在单独的窗格中显示批注、脚注或尾注。

当窗口被拆分或在非页面视图下显示脚注、批注等信息时，窗口具有多个窗格。



```JavaScript
/*本示例在普通视图中显示审阅窗格，然后提示关闭该窗格。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdNormalView
    if (ActiveDocument.Comments.Count >= 1) {
        ActiveDocument.ActiveWindow.View.SplitSpecial = wdPaneRevisions
        let response = MsgBox("Do you want to close the revisions pane?", jsYesNo)
        if (response == jsResultYes) {
            ActiveDocument.ActiveWindow.ActivePane.Close()
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Activate) | 激活指定的窗格。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Close) | 关闭指定的窗格。 |
| [LargeScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/LargeScroll) | 将窗口或窗格滚动指定的屏数。 |
| [PageScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/PageScroll) | 将指定的窗口按页滚动。 |
| [SmallScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/SmallScroll) | 将窗口滚动指定的行数。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [BrowseWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/BrowseWidth) | 返回指定窗格中正文换行区域的宽度（以磅为单位）。 **Long** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DisplayRulers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/DisplayRulers) | 如果在指定窗格中显示标尺，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayVerticalRuler](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/DisplayVerticalRuler) | 如果在指定窗格中显示垂直标尺，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Document) | 返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象与指定窗格相关。只读。 |
| [HorizontalPercentScrolled](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/HorizontalPercentScrolled) | 返回或设置水平滚动条位置（以文档宽度的百分比表示）。 **Long** 类型，可读写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Next) | 返回一个 **Pane** 对象，该对象代表集合中的下一个文档窗格。只读。 |
| [Pages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Pages) | 返回一个 **[Pages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pages/obj)** 集合，该集合代表文档中的页面。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Pane** 对象的父对象。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Previous) | 返回一个 **Pane** 对象，该对象代表集合中的上一个文档窗格。只读。 |
| [Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Selection) | 返回 **Selection** 对象，该对象代表文档窗格中的所选内容或插入点。只读。 |
| [VerticalPercentScrolled](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/VerticalPercentScrolled) | 返回或设置垂直滚动条的位置（以文档长度的百分比表示）。可读写 **Long** 类型。 |
| [View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/View) | 返回一个 **View** 对象，该对象代表指定窗格的视图。 |
| [Zooms](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/member/Zooms) | 返回一个 **[Zooms](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zooms/obj)** 集合，该集合代表每个视图（如普通视图、大纲视图和页面视图）的缩放选项。 |