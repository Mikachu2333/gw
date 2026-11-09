# Workbook.DefaultTableStyle

指定 **TableStyles** 集合中用作默认 TableStyle 的表样式。可读/写 **Variant** 类型。



## 语法

express.**DefaultTableStyle**

express   一个代表 **Workbook** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例演示活动工作簿的默认样式*/
function test() {
    alert(ActiveWorkbook.DefaultTableStyle)
}
```


```JavaScript
/*本示例演示向活动工作簿的 TableStyles 集合中添加 style1 样式，并指定 style1 为默认样式*/
function test() {
    ActiveWorkbook.TableStyles.Add("style1")
    ActiveWorkbook.DefaultTableStyle = "style1"
}
```
