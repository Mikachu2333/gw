# Application.SheetsInNewWorkbook

返回或设置 ET 自动插入到新工作簿中的工作表数目。可读/写 **Long** 类型。



## 语法

express.**SheetsInNewWorkbook**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示ET自动插入到新工作簿中的工作表数目。*/
function test() {
    alert(`ET inserts ${Application.SheetsInNewWorkbook} sheet(s) in each new workbook`)
}
```


```JavaScript
/*本示例将ET自动插入到新工作簿中的工作表数目设置为3。*/
function test() {
    Application.SheetsInNewWorkbook = 3
}
```
