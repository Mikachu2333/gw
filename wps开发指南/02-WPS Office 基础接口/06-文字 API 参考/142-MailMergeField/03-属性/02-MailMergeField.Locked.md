# MailMergeField.Locked

如果指定域已被锁定，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**Locked**

express   一个代表 **MailMergeField** 对象的变量。

## 类型

boolean

## 说明


当域处于锁定状态时，无法更新该域的结果。



## 示例


```JavaScript
/*本示例锁定活动文档上所有的邮件合并域。*/
function test() {
    let fields = ActiveDocument.MailMerge.Fields
    for (let i = 1; i <= fields.Count; i++) {
        fields.Item(i).Locked = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个邮件合并域是否处于锁定状态。*/
function test() {
    let field = Application.Documents.Item(1).MailMerge.Fields.Item(2)
    alert(field.Locked)
}
```
