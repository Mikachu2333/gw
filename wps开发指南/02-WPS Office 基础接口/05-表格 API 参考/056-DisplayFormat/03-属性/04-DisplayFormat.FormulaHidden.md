# DisplayFormat.FormulaHidden

返回一个值，该值指示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象在工作表受保护时是否会隐藏自己的公式。只读。



## 语法

express.**FormulaHidden**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 说明


如果其公式在工作表受保护时处于隐藏状态，则返回 **True** ；如果该区域中有些单元格的 **FormulaHidden** 等于 **True** ，而有些单元格的 **FormulaHidden** 等于 **False** ，则返回 **Null** 。



## 示例


```JavaScript
/*此示例显示 D3 单元格在工作表受保护时是否隐藏公式。*/
function test() {
    alert(Range("D3").DisplayFormat.FormulaHidden)
}
```


```JavaScript
/*此示例判断 E5:G5 单元格在工作表受保护时是否会隐藏公式，并通知用户。*/
function test() {
    if (Range("E5:G5").DisplayFormat.FormulaHidden) {
        alert("工作表受保护时会隐藏公式")
    } else {
        alert("工作表受保护时不会隐藏公式")
    }
}
```
