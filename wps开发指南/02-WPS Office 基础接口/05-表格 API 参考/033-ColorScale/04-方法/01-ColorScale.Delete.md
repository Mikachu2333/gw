# ColorScale.Delete

删除指定的条件格式规则对象。



## 语法

express.**Delete()**

express   一个代表 **ColorScale** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一张工作表上区域 A1:A10 中第一个色阶条件格式。*/
function test() {
    let colorScale = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    colorScale.Delete()
}
```


```JavaScript
/*本示例删除区域 A1:A10 中第二个色阶条件格式。*/
function test() {
    Range("A1:A10").FormatConditions.Item(2).Delete()
}
```
