# Worksheet.Activate

使当前工作表成为活动工作表。



## 语法

express.**Activate()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 说明


调用此方法等同于单击工作表的标签。



## 示例


```JavaScript
/*此示例激活工作表 Sheet1。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
}
```


```JavaScript
/*本示例激活第二张工作表*/
function test() {
    Application.Worksheets.Item(2).Activate()
}
```
