# Application.Workbooks

返回一个 **[Workbooks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/obj)** 集合，该集合表示所有打开的工作簿。只读。



## 语法

express.**Workbooks**

express   一个代表 **Application** 对象的变量。

## 类型

Workbooks

## 说明


在没有对象限定符的情况下使用此属性等效于使用 **Applcation.Workbooks** 。

 **Workbooks** 属性返回的集合并不包含打开的加载宏，这是一种特殊的隐藏工作簿。但如果知道文件名，则可返回单个打开的加载宏。例如， **Workbooks("Oscar.xla")** 返回名为“Oscar.xla”的打开的加载宏作为 **Workbook** 对象。



## 示例


```JavaScript
/*本示例激活 工作簿1 。*/
function test() {
    Application.Workbooks.Item("工作簿1").Activate()
}
```


```JavaScript
/*本示例打开 Large.xlsx 工作簿。*/
function test() {
    Application.Workbooks.Open("C:/Users/wps/Desktop/large.xlsx")
}
```


```JavaScript
/*本示例关闭除正在运行本示例的工作簿以外的所有其他工作簿，并保存其更改。*/
function test() {
    const Count = Application.Workbooks.Count
    for (let i = 1; i <= Count; i++) {
        if (Application.Workbooks.Item(i).Name != Application.ThisWorkbook.Name) {
            Application.Workbooks.Item(i).Close(true)
        }
    }
}
```
