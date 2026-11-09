# UniqueValues.DupeUnique

返回或设置 **XlDupeUnique** 枚举的常量之一，指定条件格式规则是查找唯一的值还是查找重复的值。



## 语法

express.**DupeUnique**

express   一个代表 **UniqueValues** 对象的变量。

## 类型

XlDupeUnique

## 示例


```JavaScript
/*本示例显示活动工作表上区域 C1:C10 中第二个（UniqueValues）条件格式是否查找重复的值。*/
function test() {
    let uniqueValues = ActiveSheet.Range("C1:C10").FormatConditions.Item(2)
    alert(uniqueValues.DupeUnique == xlDuplicate)
}
```


```JavaScript
/*本示例将工作表 Sheet1 上区域 C1:C10 中第二个（UniqueValues）条件格式设置为查找唯一的值。*/
function test() {
    let uniqueValues = Application.Worksheets.Item("Sheet1").Range("C1:C10").FormatConditions.Item(2)
    uniqueValues.DupeUnique = xlUnique
}
```
