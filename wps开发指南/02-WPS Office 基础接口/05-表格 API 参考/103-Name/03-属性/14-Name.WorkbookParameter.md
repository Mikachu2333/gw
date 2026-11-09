# Name.WorkbookParameter

以工作簿参数的形式返回或设置指定的 **Name** 对象。可读/写。



## 语法

express.**WorkbookParameter**

express   一个代表 **Name** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示索引为2的名称是否被定义为工作簿参数。*/
function test() {
    alert(ActiveWorkbook.Names.Item(2).WorkbookParameter)
}
```


```JavaScript
/*本示例将活动工作簿索引为1的名称设置为工作簿参数。*/
function test() {
    ActiveWorkbook.Names.Item(1).WorkbookParameter = true
}
```
