# Options.SendMailAttach

如果使用 **“文件”** 菜单上的 **“发送”** 命令将活动文档作为附件插入邮件中，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SendMailAttach**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果使用 **“发送”** 命令将活动文档的内容作为文本插入邮件中，则为 **False** 。



## 示例


```JavaScript
/*本示例打开一个新电子邮件，并将活动文档作为邮件附件。*/
function test() {
    Options.SendMailAttach = true
    ActiveDocument.SendMail()
}
```


```JavaScript
/*本示例显示使用“发送”命令时，活动文档是否作为附件插入邮件中。*/
function test() {
    alert(Options.SendMailAttach)
}
```
