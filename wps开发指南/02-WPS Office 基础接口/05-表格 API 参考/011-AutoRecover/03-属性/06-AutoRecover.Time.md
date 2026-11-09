# AutoRecover.Time

设置或返回 **AutoRecover** 对象的时间间隔。允许的值为从 1 到 120 分钟的整数。默认值为 10 分钟。 **Long** 类型，可读写。



## 语法

express.**Time**

express   一个代表 **AutoRecover** 对象的变量。

## 类型

number（int4 精度）

## 说明


输入的小数值将舍入为最接近的整数。例如，输入的 5.5 与 6 等价。

如果输入有效区域以外的时间值，则 ET 将使用上一次使用的时间值。



## 示例


```JavaScript
/*本示例将“自动恢复”的时间间隔设置为 5 分钟，并通知用户。*/
function test() {
    Application.AutoRecover.Time = 5
    alert("The AutoRecover time interval is set at " + Application.AutoRecover.Time + " minutes.")
}
```


```JavaScript
/*本示例将“自动恢复”的时间间隔赋值到A1单元格。*/
function test() {
    Range("A1").Value2 = Application.AutoRecover.Time
}
```
