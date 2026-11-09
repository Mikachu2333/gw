# Range.InsertIndent

向指定的区域添加缩进量。



## 语法

express.**InsertIndent(InsertAmount)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| InsertAmount | 必选 | number（int4 精度） | 要添加到当前缩进量的缩进量。 |

## 返回值

void

## 说明


如果用本方法将缩进量设置为一个小于 0（零）或大于 15 的值，将出错。

可用 **IndentLevel** 属性返回某区域的缩进量。



## 示例


```JavaScript
/*本示例减少单元格 A10 的缩进量。*/
function test() {
    Range("A10").InsertIndent(-1)
}
```


```JavaScript
/*本示例将 C1:E5 单元格的缩进量增加 1，并显示 C1 单元格的缩进量*/
function test() {
    Range("C1:E5").InsertIndent(1)
    alert(Range("C1").IndentLevel)
}
```
