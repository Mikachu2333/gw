# Worksheet.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 说明


在删除 **Worksheet** 时，此方法默认情况下显示一个对话框，用于提示用户确认是否删除。



## 示例


```JavaScript
/*本示例删除当前工作表。*/
function test() {
    ActiveSheet.Delete()
}
```


```JavaScript
/*本示例判断如果工作表数量大于1，则删除第一张工作表。*/
function test() {
    if (Worksheets.Count  > 1) {
        Worksheets.Item(1).Delete()
    }
}
```
