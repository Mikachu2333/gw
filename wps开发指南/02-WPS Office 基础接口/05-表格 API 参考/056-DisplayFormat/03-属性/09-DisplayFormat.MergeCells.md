# DisplayFormat.MergeCells

返回一个值，该值指示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象是否包含合并单元格。只读。



## 语法

express.**MergeCells**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 说明


如果该区域包含合并单元格，则返回 **True** 。



## 示例


```JavaScript
/*本示例显示 D5:E5 单元格是否包含合并单元格。*/
function test() {
    alert(Range("D5:E5").DisplayFormat.MergeCells)
}
```


```JavaScript
/*本示例判断 D7:D10 单元格是否包含合并单元格，并通知用户。*/
function test() {
    if (Range("D7:D10").DisplayFormat.MergeCells) {
        alert("包含合并单元格")
    } else {
        alert("未包含合并单元格")
    }
}
```
