# Worksheet.DisplayRightToLeft

如果指定工作表是从右到左显示（而非从左到右），则为 **True** 。如果对象从左到右显示，则为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayRightToLeft**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例演示活动工作表是否为从右到左显示。*/
function test() {
    alert(Application.ActiveSheet.DisplayRightToLeft)
}
```


```JavaScript
/*此示例判断活动工作簿每一张工作表是否从左到右显示，并通知用户。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        let sheet = Application.Sheets.Item(i)
        if (sheet.DisplayRightToLeft) {
            alert(`工作表 ${sheet.Name} 为从右到左显示`)
        } else {
            alert(`工作表 ${sheet.Name} 为从左到右显示`)
        }
    }
}
```
