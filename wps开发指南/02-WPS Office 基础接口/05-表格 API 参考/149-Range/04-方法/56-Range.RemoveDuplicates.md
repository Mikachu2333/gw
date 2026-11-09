# Range.RemoveDuplicates

从值区域中删除重复的值。



## 语法

express.**RemoveDuplicates(Columns, Header)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Columns | 可选 | any | 包含重复信息的列的索引数组。 |
| Header | 可选 | XlYesNoGuess | 指定第一行是否包含标题信息。 **xlNo** 是默认值；如果希望 ET 确定标题，则指定 **xlGuess** 。 |

## 返回值

void

## 示例


```JavaScript
/*以下代码示例从区域所有列中删除重复值。*/
function test() {
    ActiveSheet.Range("A1:C100").RemoveDuplicates([1])
}
```


```JavaScript
/*以下代码示例删除前两列的重复值（指定第一行为标题）*/
function test() {
    Range("A1:B100").RemoveDuplicates([1, 2], xlYes)
}
```
