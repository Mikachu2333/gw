# Application.CaptionLabels

返回一个 **[CaptionLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabels/obj)** 集合，该集合包括全部有效题注标签。只读。



## 语法

express.**CaptionLabels**

express   一个代表 **Application** 对象的变量。

## 类型

CaptionLabels

## 示例


```JavaScript
/*本示例为表格题注设置编号样式。*/
function test() {
    Application.CaptionLabels.Item("表").NumberStyle = wdCaptionNumberStyleLowercaseRoman
}
```


```JavaScript
/*本示例先添加一个名为“Photo”的新题注标签，然后插入一个名为“Photo”题注。*/
function test() {
    Application.CaptionLabels.Add("Photo")
    Application.Selection.InsertParagraphAfter()
    Application.Selection.InsertCaption("Photo")
}
```
