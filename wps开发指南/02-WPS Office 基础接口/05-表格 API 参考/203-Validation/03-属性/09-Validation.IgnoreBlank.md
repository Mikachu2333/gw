# Validation.IgnoreBlank

如果指定区域内的数据有效性检验允许空值，则该值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IgnoreBlank**

express   一个代表 **Validation** 对象的变量。

## 类型

boolean

## 说明


当 **IgnoreBlank** 属性为 **True** 时，如果单元格为空白，或者 **MinVal** 或 **MaxVal** 属性所引用的单元格为空白，仍认为该单元格数据有效。



## 示例


```JavaScript
/*本示例将单元格 E5 的数据有效性检验设置为允许有空值。*/
function test() {
    Application.Range("E5").Validation.IgnoreBlank = true
}
```


```JavaScript
/*本示例显示活动工作表上单元格 E5 的数据有效性检验是否允许有空值。*/
function test() {
    let validation = ActiveSheet.Range("E5").Validation
    alert(validation.IgnoreBlank)
}
```
