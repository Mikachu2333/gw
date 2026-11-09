# DisplayFormat.Orientation

返回一个值，该值表示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的文本方向。只读。



## 语法

express.**Orientation**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示 B3 单元格文本方向是否为水平排列。*/
function test() {
    alert(Range("B3").DisplayFormat.Orientation == xlHorizontal)
}
```


```JavaScript
/*本示例判断 B5:B10 单元格文本方向是否为向下排列，并通知用户。*/
function test() {
    if (Range("B5:B10").DisplayFormat.Orientation == xlDownward) {
        alert("文本方向是向下排列")
    } else {
        alert("文本方向不是向下排列")
    }
}
```
