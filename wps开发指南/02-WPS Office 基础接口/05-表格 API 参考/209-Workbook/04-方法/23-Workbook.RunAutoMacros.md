# Workbook.RunAutoMacros

运行附属于指定工作簿的 Auto\_Open、Auto\_Close、Auto\_Activate 或 Auto\_Deactivate 宏。保留本方法是为了保持向后兼容性。在新的 JavaScript 代码中，应使用 Open、Close、Activate 方法和 Deactivate 事件取代上述宏。



## 语法

express.**RunAutoMacros(Which)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Which | 必选 | XlRunAutoMacro | 指定要运行的自动宏。 |

## 返回值

void

## 说明


| **XlRunAutoMacro** 可为以下 **XlRunAutoMacro** 常量之一。 |
| ------------------------------------------------ |
| **xlAutoActivate** ：Auto\_Activate 宏              |
| **xlAutoClose** ：Auto\_Close 宏                    |
| **xlAutoDeactivate** ：Auto\_Deactivate 宏          |
| **xlAutoOpen** ：Auto\_Open 宏                      |



## 示例


```JavaScript
/*本示例运行活动工作簿的 Auto_Open 宏，然后打开 example.xlsx 工作簿。*/
function test() {
    Application.ActiveWorkbook.RunAutoMacros(xlAutoOpen)
    Application.Workbooks.Open("D:\\示例\\example.xlsx")
}
```


```JavaScript
/*本示例对活动工作簿运行 Auto_Close 宏，然后关闭该工作簿。*/
function test() {
    ActiveWorkbook.RunAutoMacros(xlAutoClose)
    ActiveWorkbook.Close()
}
```
