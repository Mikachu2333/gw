# DisplayFormat.Locked

返回一个值，该值指示当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象是否已锁定。只读。



## 语法

express.**Locked**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 说明


如果该区域已锁定，则返回 **True** ；如果在工作表受保护时可以修改该区域，则返回 **False** ；如果该区域同时包含锁定和未锁定的单元格，则返回 **Null** 。



## 示例


```JavaScript
/*本示例显示 G5 单元格是否在用户界面显示时被锁定*/
function test() {
    alert(Range("G5").DisplayFormat.Locked)
}
```


```JavaScript
/*本示例判断 D5:D10 单元格是否在用户界面显示时被锁定，并通知用户*/
function test() {
    if (Range("D5:D10").DisplayFormat.Locked) {
        alert("用户界面显示时被锁定")
    } else {
        alert("用户界面显示时未被锁定")
    }
}
```
