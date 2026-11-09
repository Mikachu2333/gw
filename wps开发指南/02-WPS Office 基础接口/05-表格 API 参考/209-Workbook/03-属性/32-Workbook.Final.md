# Workbook.Final

返回或设置一个 **Boolean** 类型的值，该值指示工作簿是否是最终的。可读/写 **Boolean** 类型。



## 语法

express.**Final**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


将值设置为 **True** 可将工作簿标记为最终版本，通知收件人（如果有）工作簿是最终的，并将工作簿设置为只读。



## 示例


```JavaScript
/*本示例演示将活动工作簿标记为最终版本。*/
function test() {
    ActiveWorkbook.Final = true
}
```


```JavaScript
/*本示例演示第一个工作簿是否为最终版本，以及Final属性的数据类型。*/
function test() {
    alert(`当前工作簿是否为最终版本：${Workbooks.Item(1).Final}\nFinal属性的数据类型为：${typeof Workbooks.Item(1).Final}`)
}
```
