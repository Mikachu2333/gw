# Application.GetCustomListContents

返回一个自定义序列（一个字符串数组）。



## 语法

express.**GetCustomListContents(ListNum)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListNum | 必选 | number（int4 精度） | 列表数字。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例将第一个自定义序列的元素写到工作表 Sheet1 的第一列中。*/
function test() {
    let listArray = Application.GetCustomListContents(1)
    for (let i = 1; i <= listArray.length; i++) {
        Worksheets.Item("Sheet1").Cells(i, 1).Value2 = listArray[i - 1]
    }
}
```


```JavaScript
/*本示例显示第二个自定义序列的元素。*/
function test() {
    alert(Application.GetCustomListContents(2).toString())
}
```
