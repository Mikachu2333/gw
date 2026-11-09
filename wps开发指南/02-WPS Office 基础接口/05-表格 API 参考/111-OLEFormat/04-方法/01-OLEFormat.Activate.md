# OLEFormat.Activate

激活当前 OLE 对象。



## 语法

express.**Activate()**

express   一个代表 **OLEFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象激活。*/
function test() {
    Worksheets(1).Shapes(1).OLEFormat.Activate()
}
```


```JavaScript
/*此示例将活动工作表中的第三个 OLE 对象激活。*/
function test() {
    ActiveSheet.Shapes(3).OLEFormat.Activate()
}
```
