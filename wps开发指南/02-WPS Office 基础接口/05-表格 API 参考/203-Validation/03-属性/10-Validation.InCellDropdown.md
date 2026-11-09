# Validation.InCellDropdown

如果数据有效性显示含有有效取值的下拉列表，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**InCellDropdown**

express   一个代表 **Validation** 对象的变量。

## 类型

boolean

## 说明


如果数据有效性检验类型不是 **xlValidateList** ，将忽略该属性。

可用 **Validation** 对象的 **Add** 方法或 **Modify** 方法的 *Minimum* 参数来指定包含有效数据的区域。



## 示例


```JavaScript
/*本示例向单元格 E5 添加数据有效性检验。单元格区域 A1:A10 包含单元格的有效取值，且该单元格显示含有这些有效取值的下拉列表。*/
function test() {
    let validation = Application.Range("E5").Validation
    validation.Add(xlValidateList, xlValidAlertStop, xlBetween, "=$A$1:$A$10")
    validation.InCellDropdown = true
}
```


```JavaScript
/*本示例显示活动工作表上单元格 E1 的数据有效性检验是否展示含有有效取值的下拉列表。*/
function test() {
    let validation = ActiveSheet.Range("E1").Validation
    alert(validation.InCellDropdown)
}
```
