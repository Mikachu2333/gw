# Worksheet.PrintedCommentPages

返回将为当前工作表打印的批注页的数量。只读。



## 语法

express.**PrintedCommentPages**

express   一个代表 **Worksheet** 对象的变量。

## 类型

number（int4 精度）

## 说明


只有在 **“页面设置”** 对话框的 **“工作表”** 选项卡上的 **“批注”** 设置设为 **“工作表末尾”** 时， **PrintedCommentPages** 属性才会返回大于零的数字。如果工作表是 **“图表”** 工作表，此属性将返回零。



## 示例


```JavaScript
/*此示例显示活动工作表打印的批注页的数量。*/
function test() {
    alert(ActiveSheet.PrintedCommentPages)
}
```


```JavaScript
/*本示例判断如果第一张工作表的名称为“Sheet1”，则激活该工作表，并将打印的批注页的数量赋值给A1单元格。*/
function test() {
    if (Worksheets.Item(1).Name == "Sheet1") {
        Worksheets.Item(1).Activate()
        Range("A1").Value2 = ActiveSheet.PrintedCommentPages
    }
}
```
