# Application.CustomizationContext

返回或设置一个 **[Template](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/obj)** 或 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象代表存储菜单栏、工具栏和键绑定的更改的模板或文档。可读/写。



## 语法

express.**CustomizationContext**

express   一个代表 **Application** 对象的变量。

## 类型

Object

## 说明


对应于 **“选项”** 对话框 **“自定义功能区”** 选项卡上 **“自定义”** 按钮打开的 **“自定义键盘”** 对话框中 **“将更改保存在”** 框中的值。



## 示例


```JavaScript
/*本示例将 Alt+Ctrl+W 添至 FileClose 命令，然后将该键盘自定义方案保存于“Normal”模板中。*/
function test() {
    CustomizationContext = NormalTemplate
    KeyBindings.Add(wdKeyCategoryCommand, "FileClose", BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyW))
}
```


```JavaScript
/*本示例向“常用”工具栏中添加“文件版本”按钮。该命令栏自定义方案保存于活动文档所用的模板中。*/
function test() {
    Application.CustomizationContext = ActiveDocument.AttachedTemplate
    Application.CommandBars("Standard").Controls.Add(msoControlButton, 2522, null, 8)
}
```
