# Workbook.SendMail

使用已安装的邮件系统发送工作簿。



## 语法

express.**SendMail(Recipients, Subject, ReturnReceipt)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Recipients | 必选 | any | 以文本形式指定收件人名称，如果有多个收件人，则以文本字符串数组的形式指定它。必须至少指定一个收件人，并将所有收件人都添加到“收件人”中。 |
| Subject | 可选 | any | 指定邮件主题。如果省略该参数，则使用文档名称。 |
| ReturnReceipt | 可选 | any | 如果为 **True** ，则请求返回收件人。如果为 **False** ，则不请求返回收件人。默认值为 **False** 。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动工作簿传送给一个收件人。*/
function test() {
    ActiveWorkbook.SendMail("Jean Selva")
}
```


```JavaScript
/*本示例将第一个工作簿传送给一个收件人并请求返回收件人。*/
function test() {
    Workbooks.Item(1).SendMail("Jean Selva", undefined, true)
}
```
