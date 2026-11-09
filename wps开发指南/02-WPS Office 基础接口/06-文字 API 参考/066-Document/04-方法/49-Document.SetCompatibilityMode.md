# Document.SetCompatibilityMode

设置文档的兼容模式。



## 语法

express.**SetCompatibilityMode(Mode)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Mode | 必选 | number（int4 精度） | 指定要靠近的 WPS 版本。使用 **[WdCompatibilityMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdCompatibilityMode)** 枚举的常量作为该参数的一个参数。 |

## 返回值

void

## 说明


在 WPS 中打开在以前版本的 WPS 中创建的文档时，将启用“兼容模式”。“兼容模式”确保在处理文档时无法使用 WPS 中的任何新的或增强的功能，从而使用以前版本的 WPS 编辑该文档的用户将具有完全编辑能力。



## 示例


```JavaScript
/*本示例将活动文档的兼容模式设置为wdWord2003。*/
function test() {
    ActiveDocument.SetCompatibilityMode(wdWord2003)
}
```


```JavaScript
/*本示例提示用户是否将第一个文档设置为最新版本的兼容性模式，如果用户选择是，则将第一个文档设置为最新版本的兼容性模式。*/
function test() {
    let response = MsgBox("是否将第一个文档设置为最新版本的兼容性模式？", jsYesNo)
    if (response == jsResultYes) {
        Documents.Item(1).SetCompatibilityMode(wdCurrent)
    }
}
```
