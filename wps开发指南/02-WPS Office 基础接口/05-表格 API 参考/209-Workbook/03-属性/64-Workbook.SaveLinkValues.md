# Workbook.SaveLinkValues

如果 ET 保存指定工作簿的外部链接值，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveLinkValues**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 ET 保存活动工作簿的外部链接值。*/
function test() {
    ActiveWorkbook.SaveLinkValues = true
}
```


```JavaScript
/*本示例演示将SaveLinkValues属性的值设置为false和SaveLinkValues属性的数据类型。*/
function test() {
    ActiveWorkbook.SaveLinkValues = false
    alert(`已将SaveLinkValues属性设置为：false\nSaveLinkValues属性的数据类型为：${typeof ActiveWorkbook.SaveLinkValues}`)
}
```
