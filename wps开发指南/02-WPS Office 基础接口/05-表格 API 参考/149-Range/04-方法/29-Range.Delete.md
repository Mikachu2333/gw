# Range.Delete

删除对象。

返回值类型为Variant。



## 语法

express.**Delete(Shift)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Shift | 可选 | any | 仅用于 Range 对象。指定如何调整单元格以替换删除的单元格。可以为以下 XlDeleteShiftDirection 常量之一：xlShiftToLeft 或 xlShiftUp。如果省略此参数，ET 将根据区域的形状确定调整方式。 |

## 返回值

any

## 示例


```JavaScript
/*本示例设置 A1 单元格值为 a1，A2 单元格值为 a2，将 A1 单元格删除，下方单元格向上移动。*/
function test() {
    Range("A1").Value2 = 'a1'
    Range("A2").Value2 = 'a2'
    Range("A1").Delete(xlShiftUp)
}
```


```JavaScript
/*本示例设置 A1 单元格值设置为 a1，B1 单元格的值设为 b1，并将 A 列删除*/
function test() {
    Range("A1").Value2 = "a1"
    Range("B1").Value2 = "b1"
    Range("A:A").Delete()
}
```
