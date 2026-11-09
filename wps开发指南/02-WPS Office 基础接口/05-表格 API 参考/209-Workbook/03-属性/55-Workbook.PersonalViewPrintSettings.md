# Workbook.PersonalViewPrintSettings

如果在共享工作簿的用户个人视图中包括打印设置，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PersonalViewPrintSettings**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例从工作簿二的用户个人视图中删除打印设置及筛选和排序设置。*/
function test() {
    Workbooks.Item(2).PersonalViewListSettings = false
    Workbooks.Item(2).PersonalViewPrintSettings = false
}
```


```JavaScript
/*本示例演示如果活动工作簿中包括打印设置，则显示活动工作簿的打印预览，并通知用户。*/
function test() {
    if (ActiveWorkbook.PersonalViewPrintSettings) {
        ActiveWorkbook.PrintPreview()
        alert("已显示活动工作簿的打印预览！")
    } else {
        alert("未发现共享工作簿的个人打印设置！")
    }
}
```
