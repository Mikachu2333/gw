# Application.DisplayFormulaAutoComplete

获取或设置一个值，该值表示在生成单元格公式时是否显示相关函数和已定义名称的列表。可读/写 **Boolean** 类型。



## 语法

express.**DisplayFormulaAutoComplete**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例确定在生成单元格公式时是否显示相关函数和已定义名称的列表，并通知用户。*/
function test() {
    if (Application.DisplayFormulaAutoComplete) {
        alert("显示相关函数和已定义名称的列表。")
    } else {
        alert("隐藏相关函数和已定义名称的列表。")
    }
}
```


```JavaScript
/*本示例演示DisplayFormulaAutoComplete的数据类型，当提示框关闭后将DisplayFormulaAutoComplete属性设置为false。*/
function test() {
    alert("DisplayFormulaAutoComplete 属性的数据类型为：" + typeof Application.DisplayFormulaAutoComplete)
    Application.DisplayFormulaAutoComplete = false
}
```
