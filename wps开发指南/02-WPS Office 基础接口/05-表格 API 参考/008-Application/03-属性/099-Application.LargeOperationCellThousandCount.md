# Application.LargeOperationCellThousandCount

返回或设置操作中所需的单元格的最大数目，如果超过此数目，将触发警告。可读/写 **Long** 类型。



## 语法

express.**LargeOperationCellThousandCount**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示操作中所需的单元格的最大数目。*/
function test() {
    alert(Application.LargeOperationCellThousandCount)
}
```


```JavaScript
/*本示例设置操作中所需的单元格的最大数目。*/
function test() {
    Application.LargeOperationCellThousandCount = 33550
}
```
