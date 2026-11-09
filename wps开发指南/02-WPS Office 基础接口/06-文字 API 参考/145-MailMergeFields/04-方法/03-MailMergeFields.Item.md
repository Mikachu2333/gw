# MailMergeFields.Item

返回集合中的单个 **MailMergeField** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **MailMergeFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

MailMergeField

## 示例


```JavaScript
/*本示例显示活动文档中第一个邮件合并域的域代码。*/
function test() {
    alert(ActiveDocument.MailMerge.Fields.Item(1).Code.Text)
}
```


```JavaScript
/*本示例判断如果第一个文档上第二个邮件合并域的域代码的文本包含“example”，则删除该邮件合并域。*/
function test() {
    let mailMergeField = Application.Documents.Item(1).MailMerge.Fields.Item(2)
    if (mailMergeField.Code.Text.includes("example")) {
        mailMergeField.Delete()
    }
}
```
