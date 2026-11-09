# Range.AddComment

为区域添加批注。



## 语法

express.**AddComment(Text)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 可选 | any | 批注文字。 |

## 返回值

Comment

## 示例


```JavaScript
/*本示例为第一张工作表中 E5 单元格添加批注。*/
function test() {
    Worksheets.Item(1).Range("E5").AddComment("Current Sales")
}
```


```JavaScript
/*本示例为 A1 单元格添加批注 a1*/
function test() {
    Application.Cells.Item(1, 1).AddComment("a1")
}
```
