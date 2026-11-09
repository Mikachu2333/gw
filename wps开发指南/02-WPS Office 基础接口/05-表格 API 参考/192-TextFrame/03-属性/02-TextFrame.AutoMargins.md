# TextFrame.AutoMargins

返回或设置 ET 是否自动计算文本框边距。可读/写。



## 语法

express.**AutoMargins**

express   一个代表 **TextFrame** 对象的变量。

## 类型

boolean

## 说明


如果 ET 自动计算文本框边距，则为 **True** ；否则为 **False** 。当此属性为 **True** 时， **[MarginLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/MarginLeft)** , **[MarginRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/MarginRight)** 、 **[MarginTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/MarginTop)** 和 **[MarginBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/MarginBottom)** 属性将被忽略。



## 示例


```JavaScript
/*本示例将活动工作表中第二个标签窗体控件设置成能自动计算文本框边距。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(2).TextFrame
    textFrame.AutoMargins = true
}
```


```JavaScript
/*本示例显示第一张工作表中第一个标签窗体控件是否自动计算文本框边距。*/
function test() {
    let textFrame = Application.Worksheets.Item(1).Shapes.Item(1).TextFrame
    alert(textFrame.AutoMargins)
}
```
