# Window.ActiveCell

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表活动窗口（最上方的窗口）或指定窗口中的活动单元格。如果窗口中没有显示工作表，此属性无效。只读。



## 语法

express.**ActiveCell**

express   一个代表 **Window** 对象的变量。

## 类型

Range

## 说明


如果不指定对象识别符，此属性返回活动窗口中的活动单元格。

请仔细区分活动单元格和选定区域。活动单元格为选定区域内部的一个单元格。而选定区域可以包含多个单元格，但只有一个单元格为活动单元格。

下列表达式都是返回活动单元格，并且都是等效的。
```JavaScript
ActiveCell
Application.ActiveCell
ActiveWindow.ActiveCell
Application.ActiveWindow.ActiveCell
```



## 示例


```JavaScript
/*此示例先激活工作簿1为活动窗口，然后在消息框中显示活动单元格的值。*/
function test() {
    Application.Windows.Item("工作簿1").Activate()
    alert(ActiveCell.Value())
}
```


```JavaScript
/*此示例更改活动窗口中活动单元格的字体格式设置。*/
function test() {
    let activeCell = ActiveWindow.ActiveCell.Font
    activeCell.Bold = true
    activeCell.Italic = true
}
```
