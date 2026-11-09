# Selection.InsertDateTime

以文本或 TIME 域的形式插入当前日期或时间，或将两者都插入。



## 语法

express.**InsertDateTime(DateTimeFormat, InsertAsField, InsertAsFullWidth, DateLanguage, CalendarType)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DateTimeFormat | 可选 | any | 显示日期或时间或者同时显示两者时所用的格式。如果省略该参数，WPS 将使用 Windows“控制面板”（ **“区域设置”** 图标）中的短日期样式。有关格式符号，请参阅 日期/时间数据类型 。 |
| InsertAsField | 可选 | any | 如果该参数值为 **True** ，则以 TIME 域的形式插入指定的信息。默认值为 **True** 。 |
| InsertAsFullWidth | 可选 | any | 如果该参数值为 **True** ，则以双字节数字的形式插入指定信息。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| DateLanguage | 可选 | any | 设置显示日期或时间所使用的语言。可以是 **WdDateLanguage** 常量之一。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| CalendarType | 可选 | any | 设置显示日期或时间时使用的日历类型。可以是 **WdCalendarTypeBi** 常量之一。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |

## 返回值

void

## 说明


使用此方法将替换当前所选内容。为了避免出现此情况，请在使用此方法之前使用 **[Collapse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Collapse)** 方法。



## 示例


```JavaScript
/*本示例在插入点以 TIME 域的形式插入当前日期。*/
function test() {
    Selection.InsertDateTime("MMMM dd, yyyy", true)
}
```


```JavaScript
/*本示例在活动文档第二个段落的结束位置以 TIME 域双字节数字的形式插入当前日期（拉丁文公历）。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.Collapse(wdCollapseEnd)
    Selection.InsertDateTime(null, true, true, wdDateLanguageLatin, wdCalendarTypeGregorian)
}
```
