# ContentControl.Level

返回内容控件的级别 - 内容控件是围绕文本、段落、表格单元格还是表格行；或者如果它是内联的。只读 **[WdContentControlLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdContentControlLevel)** 类型。



## 语法

express.**Level**

express   一个代表 **ContentControl** 对象的变量。

## 类型

WdContentControlLevel

## 示例


```JavaScript
/*本示例显示所选内容中第三个内容控件的级别是否为wdContentControlLevelParagraph。*/
function test() {
    let control = Selection.ContentControls.Item(3)
    alert(control.Level == wdContentControlLevelParagraph)
}
```


```JavaScript
/*本示例判断活动文档上所有内容控件的级别，并通知用户。*/
function test() {
    let controls = ActiveDocument.ContentControls
    for (let i = 1; i <= controls.Count; i++) {
        switch (controls.Item(i).Level) {
            case wdContentControlLevelCell:
                alert(`第${i}个内容控件表示表单元格周围的内容控件。`)
                break
            case wdContentControlLevelInline:
                alert(`第${i}个内容控件表示围绕单个段落中内容的内容控件。`)
                break
            case wdContentControlLevelParagraph:
                alert(`第${i}个内容控件表示围绕一个或多个完整段落的内容控件。`)
                break
            case wdContentControlLevelParagraph:
                alert(`第${i}个内容控件表示围绕表行的内容控件。`)
                break
        }
    }
}
```
