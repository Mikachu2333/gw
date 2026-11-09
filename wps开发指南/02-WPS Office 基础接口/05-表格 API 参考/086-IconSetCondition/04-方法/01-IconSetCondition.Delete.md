# IconSetCondition.Delete

删除指定的条件格式规则对象。



## 语法

express.**Delete()**

express   一个代表 **IconSetCondition** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一张工作表上区域 A1:A10 中第一个图标集条件格式。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    iconSet.Delete()
}
```


```JavaScript
/*本示例判断如果活动工作表上单元格区域 A1:A10 的第二个图标集条件格式仅展示图标，则删除该条件格式。*/
function test() {
    let iconSet = ActiveSheet.Range("A1:A10").FormatConditions.Item(2)
    if (iconSet.ShowIconOnly) {
        iconSet.Delete()
    }
}
```
