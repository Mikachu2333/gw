# Workbook.Protect

保护工作簿使其不被修改。



## 语法

express.**Protect(Password, Structure, Windows)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Password | 可选 | any | 一个字符串，该字符串为工作表或工作簿指定区分大小写的密码。如果省略此参数，不用密码就可以取消对工作表或工作簿的保护。否则，必须指定密码才能取消对工作表或工作簿的保护。如果忘记了密码，就无法取消对工作表或工作簿的保护。 |
| Structure | 可选 | any | 如果为 **True** ，则保护工作簿结构（工作表的相对位置）。默认值是 **False** 。 |
| Windows | 可选 | any | 如果为 **True** ，则保护工作簿窗口。如果省略此参数，则窗口不受保护。 |

## 返回值

void

## 示例


```JavaScript
/*本示例演示对活动工作簿开启保护工作簿，并指定密码。*/
function test() {
    Application.ActiveWorkbook.Protect("Y6dh!et5")
}
```


```JavaScript
/*本示例演示保护第一个工作簿结构和窗口。*/
function test() {
    Workbooks.Item(1).Protect(undefined, true, true)
}
```
