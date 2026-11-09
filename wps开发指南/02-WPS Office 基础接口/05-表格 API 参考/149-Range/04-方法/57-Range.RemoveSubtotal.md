# Range.RemoveSubtotal

删除列表中的分类汇总。



## 语法

express.**RemoveSubtotal()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例删除工作表 Sheet1 上单元格区域 A1:G37 的分类汇总。本示例应在包含分类汇总的数据清单上运行。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1:G37").RemoveSubtotal()
}
```


```JavaScript
/*本示例删除 A 至 B 列的分类汇总*/
function test() {
    Range("A:B").RemoveSubtotal()
}
```
