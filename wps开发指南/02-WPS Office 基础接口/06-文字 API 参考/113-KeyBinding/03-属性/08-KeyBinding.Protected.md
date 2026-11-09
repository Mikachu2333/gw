# KeyBinding.Protected

如果无法更改 **“自定义键盘”** 对话框中的指定键绑定，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Protected**

express   一个代表 **KeyBinding** 对象的变量。

## 类型

boolean

## 说明


可以通过 **“工具”** 菜单访问 **“自定义键盘”** 对话框；也可以单击 **“自定义”** ，然后单击 **“键盘”** 按钮。

无论其保护状态如何，都可用 **[KeyBindings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/obj)** 对象的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/KeyBindings/member/Add)** 方法添加键绑定。



## 示例


```JavaScript
/*本示例显示 Ctrl+S 键绑定的保护状态。*/
function test() {
    Application.CustomizationContext = ActiveDocument.AttachedTemplate
    alert(Application.FindKey(Application.BuildKeyCode(wdKeyControl, wdKeyS)).Protected)
}
```


```JavaScript
/*本示例判断如果 Ctrl+A 键绑定已受到保护，则显示一条消息。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    if (Application.FindKey(Application.BuildKeyCode(wdKeyControl, wdKeyA)).Protected) {
        alert("The Ctrl+A key is protected")
    }
}
```
