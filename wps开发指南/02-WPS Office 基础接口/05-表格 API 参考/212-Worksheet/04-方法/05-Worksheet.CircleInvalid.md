# Worksheet.CircleInvalid

对工作表中的无效数据项进行圈释。



## 语法

express.**CircleInvalid()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例对第一张工作表的无效数据项进行圈释。*/
function test() {
    Worksheets.Item(1).CircleInvalid()
}
```


```JavaScript
/*本示例对活动工作表的无效数据项进行圈释，并通知用户。*/
function test() {
    ActiveSheet.CircleInvalid()
    alert("已完成对无效数据的圈释")
}
```
