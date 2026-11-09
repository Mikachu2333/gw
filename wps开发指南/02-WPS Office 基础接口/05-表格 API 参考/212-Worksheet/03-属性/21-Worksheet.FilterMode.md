# Worksheet.FilterMode

如果工作表处于筛选模式，则为 **True** 。只读 **Boolean** 类型。



## 语法

express.**FilterMode**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表的筛选模式。*/
function test() {
    alert(Application.ActiveSheet.FilterMode)
}
```


```JavaScript
/*本示例判断活动工作簿中每一张工作表是否处于筛选模式，并通知用户*/
function test() {
    for (let i = 1; i <= Worksheets.Count; i++) {
        let sheet = Application.Worksheets.Item(i)
        if (sheet.FilterMode) {
            alert(`工作表 ${sheet.Name} 处于筛选模式`)
        } else {
            alert(`工作表 ${sheet.Name} 未处于筛选模式`)
        }
    }
}
```
