# Validation.AlertStyle

返回有效性检验警告样式。 **XlDVAlertStyle** 类型，只读。



## 语法

express.**AlertStyle**

express   一个代表 **Validation** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **Add** 方法设置某一区域的警告样式。如果该区域已有数据有效性检验，则可用 **Modify** 方法更改警告样式。



## 示例


```JavaScript
/*本示例显示单元格 E5 的数据有效性检验的警告样式是否为xlValidAlertInformation。*/
function test() {
    alert(Range("E5").Validation.AlertStyle == xlValidAlertInformation)
}
```


```JavaScript
/*本示例显示活动工作表上 A1 单元格的数据有效性检验的警告样式。*/
function test() {
    let validation = ActiveSheet.Range("A1").Validation
    switch (validation.AlertStyle) {
        case xlValidAlertInformation:
            alert("警告样式为信息图标")
            break
        case xlValidAlertStop:
            alert("警告样式为停止图标")
            break
        case xlValidAlertWarning:
            alert("警告样式为警告图标")
            break
    }
}
```
