# Workbook.PersonalViewListSettings

如果在共享工作簿的用户个人视图中包括列表的筛选和排序设置，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PersonalViewListSettings**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例从工作簿二的用户个人视图中删除打印设置及筛选和排序设置。*/
function test() {
    Workbooks.Item(2).PersonalViewListSettings = false
    Workbooks.Item(2).PersonalViewPrintSettings = false
}
```


```JavaScript
/*本示例演示PersonalViewListSettings属性的数据类型，点击确定后将PersonalViewListSettings属性的值设置为false。*/
function test() {
    alert("PersonalViewListSettings属性的数据类型为：" + typeof ActiveWorkbook.PersonalViewListSettings)
    ActiveWorkbook.PersonalViewListSettings = false
}
```
