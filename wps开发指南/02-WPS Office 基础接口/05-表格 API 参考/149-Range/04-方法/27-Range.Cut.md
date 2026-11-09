# Range.Cut

将对象剪切到剪贴板，或者将其粘贴到指定的目的地。

返回值类型为Variant。



## 语法

express.**Cut(Destination)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Destination | 可选 | any | 应在其中粘贴对象的目标区域。如果省略此参数，区域对象会被剪切到剪贴板。 |

## 返回值

any

## 说明


剪切的区域必须由相邻的单元格组成。



## 示例


```JavaScript
/*本示例将 A1 单元格的值剪切到 B1 单元格中*/
function test() {
    Range("A1").Cut(Range("B1"))
}
```


```JavaScript
/*本示例将 A1 单元格的文本设置为加粗，并剪切到 C1 单元格中*/
function test() {
    Range("A1").Font.Bold = true
    Range("A1").Select()
    Selection.Cut(Range("C1"))
}
```
