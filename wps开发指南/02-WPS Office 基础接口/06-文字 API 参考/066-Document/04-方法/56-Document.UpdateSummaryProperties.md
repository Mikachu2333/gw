# Document.UpdateSummaryProperties

更新 **“文件”** 菜单 **“属性”** 对话框中的关键词和备注文字，以反映为指定文档编写的自动摘要内容。




## 语法

express.**UpdateSummaryProperties()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例突出显示活动文档的要点，并且更新“文件”菜单“属性”对话框中的摘要信息。*/
function test() {
    Application.ActiveDocument.AutoSummarize(wd25Percent, wdSummaryModeHighlight)
    Application.ActiveDocument.UpdateSummaryProperties()
}

```
