# Application.Help

显示已安装的帮助信息。



## 语法

express.**Help(HelpType)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| HelpType | 必选 | any | 联机帮助主题或窗口。可以是下列 **[WdHelpType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdHelpType)** 常量之一： **wdHelp** 、 **wdHelpAbout** 、 **wdHelpActiveWindow** 、 **wdHelpContents** 、 **wdHelpHWP** 、 **wdHelpIchitaro** 、 **wdHelpIndex** 、 **wdHelpPE2** 、 **wdHelpPSSHelp** 、 **wdHelpSearch** 和 **wdHelpUsingHelp** （由于选择或安装的语言不同，此处列出的某些常量可能无法使用）。 |

## 返回值

void

## 示例


```JavaScript
/*本示例显示“关于 WPS 文字”对话框。*/
function test() {
    Application.Help(wdHelpAbout)
}
```


```JavaScript
/*本示例显示应用程序的名称，然后展示“关于 WPS 文字”对话框。*/
function test() {
    alert(Application.Name)
    Application.Help(wdHelpAbout)
}
```
