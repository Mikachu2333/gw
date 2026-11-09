# Presentation.Permission

返回一个 **Permission** 对象，该对象可用于限制对活动演示文稿的权限，还可用于返回或设置特定权限设置。只读。




## 语法

express.**Permission**

express   一个代表 **Presentation** 对象的变量。

## 类型

Permission

## 说明


使用 **Permission** 对象可限制对活动文档的权限，还可返回或设置特定权限设置。

使用 **Enabled** 属性可决定是否限制对活动文档的权限。使用 **Count** 属性可返回拥有权限的用户数量，使用 **RemoveAll** 方法可重置现有的所有权限。 

 **DocumentAuthor** 、 **EnableTrustedBrowser** 、 **RequestPermissionURL** 和 **StoreLicenses** 属性提供有关权限设置的其他信息。

 **Permission** 对象分配对 **UserPermission** 对象集合的访问权限。使用 **UserPermission** 对象可将特定的权限集合与各个用户关联。当某些通过用户界面（如 **msoPermissionPrint** ）分配的权限应用到所有用户时，可使用 **UserPermission** 对象为每个用户分配权限，并为每个用户指定权限的到期日期。

“信息版权管理”支持管理权限策略的使用，这些策略列出用户和组及其文档权限。使用 **ApplyPolicy** 方法可应用权限策略，使用 **PermissionFromPolicy** 、 **PolicyName** 和 **PolicyDescription** 属性可返回策略信息。

无论是否限制了对活动文档的权限，都可使用 **Permission** 。活动文档没有受限权限时， **Presentation** 对象的 **Permission** 属性不返回 **Nothing** 。使用 **Enabled** 属性可决定文档是否有受限权限。




## 示例


```JavaScript
//下面的示例创建一个新的演示文稿，并向电子邮件地址为“someone@example.com”的用户分配对新建演示文稿的读取权限。该示例将显示所有者和新用户的权限。
function AddUserPermissions() {
    let myPres = Application.Presentations.Add(msoTrue)
    let myPer = myPres.Permission
    myPer.Enabled = true
    let NewOwnerPer = myPer.Add("someone@example.com", msoPermissionRead )
    alert(myPer.Item(1).UserId + " " + Str(myPer.Item(1).Permission))
    alert(myPer.Item(2).UserId + " " + Str(myPer.Item(2).Permission))
}
```
