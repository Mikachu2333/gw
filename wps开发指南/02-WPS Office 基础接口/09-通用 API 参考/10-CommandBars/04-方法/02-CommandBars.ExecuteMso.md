# CommandBars.ExecuteMso

执行由 *idMso* 参数标识的控件。



## 语法

express.**ExecuteMso(idMso)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| idMso | 必选 | string | 控件的标识符。 |

## 返回值

void

## 说明


在某个命令没有对象模型的情况下，可以使用此方法。此方法可用于内置按钮、toggleButton 和 splitButton 类型的控件。此方法执行失败时将返回 E\_InvalidArg（如果 *IdMso* 参数无效）或 E\_Fail（若未启用控件或控件不可见）。



## 示例


```JavaScript
/*本示例运行于各组件，执行“Copy”按钮控件。*/
function test() {
    Application.CommandBars.ExecuteMso("Copy")
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿的名称为“example.xlsx”，则执行该工作簿的文本加粗按钮。*/
function test() {
    if (ActiveWorkbook.Name == "example.xlsx") {
        ActiveWorkbook.CommandBars.ExecuteMso("Bold")
    }
}
```
