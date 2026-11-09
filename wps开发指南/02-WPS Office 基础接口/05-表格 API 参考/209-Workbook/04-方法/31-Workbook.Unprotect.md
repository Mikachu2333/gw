# Workbook.Unprotect

取消工作表或工作簿的保护。如果工作表或工作簿不是受保护的，则此方法不起作用。



## 语法

express.**Unprotect(Password)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Password | 可选 | any | 一个字符串，指定用于解除工作表或工作簿保护的密码，此密码是区分大小写的。如果工作表或工作簿不设密码保护，则省略此参数。如果对工作表省略此参数，而该工作表又设有密码保护，ET 将提示您输入密码。如果对工作簿省略此参数，而该工作簿又设有密码保护，则该方法将失效。 |

## 返回值

void

## 说明


如果您忘记了密码，将不能取消工作表或工作簿的保护。建议将密码和对应文档名妥善保存。



## 示例


```JavaScript
/*此示例取消当前活动工作簿的保护。*/
function test() {
    ActiveWorkbook.Unprotect()
}
```


```JavaScript
/*此示例演示用密码开启保护工作簿并提示，再用密码取消对活动工作簿的保护。*/
function test() {
    ActiveWorkbook.Protect("Y6dh!et5")
    alert("当前已开启保护工作簿，点击确定后会取消保护工作簿")
    ActiveWorkbook.Unprotect("Y6dh!et5")
}
```
