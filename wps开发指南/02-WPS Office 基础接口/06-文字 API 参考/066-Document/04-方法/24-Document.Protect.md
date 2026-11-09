# Document.Protect

帮助保护指定的文档不被更改。保护文档后，用户只能进行有限的更改，例如添加注释，进行修订或填写表格。



## 语法

express.**Protect(Type, NoReset, Password, UseIRM, EnforceStyleLock)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | WdProtectionType | 指定文档的保护类型。 |
| NoReset | 可选 | any | 如果为 **False** ，则可将表单字段重置为其默认值；如果文档受保护，则为 **True** ，则保留当前表单字段值。如果 _Type_ 不是 **wdAllowOnlyFormFields** ，则忽略 _NoReset_。 |
| Password | 可选 | any | 如果已提供，则为能够编辑文档或更改或删除保护的密码。 |
| UseIRM | 可选 | any | 指定在保护文档免受更改时是否使用信息权限管理（IRM）。 |
| EnforceStyleLock | 可选 | any | 指定是否在受保护的文档中实施格式限制。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档的保护类型设置为只读访问。*/
function test() {
    ActiveDocument.Protect(wdAllowOnlyReading)
}
```


```JavaScript
/*本示例设置用户通过指定密码来编辑第一个文档，否则只允许将批注添加到第一个文档中。*/
function test() {
    Documents.Item(1).Protect(wdAllowOnlyComments, null, "Y6dh!et5", false, false)
}
```
