# Workbook.ShowConflictHistory

如果“冲突的历史记录”工作表在作为共享列表打开的工作簿中可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowConflictHistory**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


如果指定工作簿不是以共享清单方式打开的，则该属性无效。若要判断工作簿是否以共享清单模式打开，请对其 **MultiUserEditing** 属性进行检查。



## 示例


```JavaScript
/*本示例检查活动工作簿是否以共享清单模式打开，如果是，则本示例显示冲突日志工作表。*/
function test() {
    if (ActiveWorkbook.MultiUserEditing) {
        ActiveWorkbook.ShowConflictHistory = true
    }
}
```


```JavaScript
/*本示例演示活动工作簿另存为共享工作簿，将ShowConflictHistory属性的值设置为false，告知用户ShowConflictHistory属性的数据类型。*/
function test() {
    ActiveWorkbook.SaveAs(ActiveWorkbook.FullName, undefined, undefined, undefined, undefined, undefined, xlShared)
    ActiveWorkbook.ShowConflictHistory = false
    alert(`已将ShowConflictHistory属性的值设置为：false\nShowConflictHistory属性的数据类型为：${typeof ActiveWorkbook.ShowConflictHistory}`)
}
```
