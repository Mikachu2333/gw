# IconSetCondition.ShowIconOnly

返回或设置一个 **Boolean** 值，该值指示是否仅显示图标集条件格式的图标。



## 语法

express.**ShowIconOnly**

express   一个代表 **IconSetCondition** 对象的变量。

## 类型

boolean

## 说明


此属性的默认值为 **False** 。



## 示例


```JavaScript
/*本示例显示第一张工作表上单元格区域 C1:C10 的第一个图标集条件格式是否仅展示图标。*/
function test() {
    let iconSet = Worksheets.Item(1).Range("C1:C10").FormatConditions.Item(1)
    alert(iconSet.ShowIconOnly)
}
```


```JavaScript
/*本示例将活动工作表上单元格区域 C1:C10 的第二个图标集条件格式设置为仅展示图标。*/
function test() {
    let iconSet = ActiveSheet.Range("C1:C10").FormatConditions.Item(2)
    iconSet.ShowIconOnly = true
}
```
