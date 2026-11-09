# Presentation.ApplyTemplate

将设计模板应用于指定的演示文稿。



## 语法

express.**ApplyTemplate(FileName)**

express   一个代表 **Presentation** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 指定设计模板的名称。 |

## 返回值

void

## 说明


如果在字符串中引用未安装的演示文稿设计模板，则将产生运行时错误。无论 **Application.**  **FeatureInstall** 属性设置是什么，该模板都不自动安装。要对当前未安装的模板使用 **ApplyTemplate** 方法，必须先安装附加设计模板。为此，请通过运行 WPS Office安装程序（单击 Windows 控制面板中的 **“添加/删除程序”** 图标）安装 WPP 的附加设计模板。



## 示例


```JavaScript
/*本示例将“summary”设计模板应用于当前演示文稿。*/
function test() {
    Application.ActivePresentation.ApplyTemplate("D:\\summary.potx")
}
```


```JavaScript
/*本示例中，如果设计模板“programme.potx”尚未应用于演示文稿“Pres1.pptx”，则将该模板应用于该演示文稿。*/
function test() {
    let presentation = Application.Presentations.Item("Pres1.pptx")
    if (presentation.TemplateName != "programme") {
        presentation.ApplyTemplate("D:\\programme.potx")
    }
}
```
