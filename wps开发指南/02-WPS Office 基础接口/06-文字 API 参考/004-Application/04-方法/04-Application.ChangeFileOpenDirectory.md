# Application.ChangeFileOpenDirectory

设置 WPS 在其中搜索文档的文件夹。



## 语法

express.**ChangeFileOpenDirectory(Path)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | string | 文件夹路径，WPS 将在该文件夹中搜索文档。 |

## 返回值

void

## 说明


下次显示 **“文件”** 菜单的 **“打开”** 对话框时，将列出指定文件夹的内容。用户在 **“打开”** 对话框中更改该文件夹或当前 WPS 会话结束前， WPS 将一直在指定的文件夹中搜索文档。使用 **[DefaultFilePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DefaultFilePath)** 属性更改每个 WPS 会话中的文档默认文件夹。



## 示例


```JavaScript
/*本示例更改文件夹，以使 WPS 在该文件夹中搜索文档，然后打开“example.docx”文档。*/
function test() {
    Application.ChangeFileOpenDirectory("D:\\示例")
    Documents.Open("example.docx")
}
```


```JavaScript
/*本示例更改文件夹，以使 WPS 在该文件夹中搜索文档，然后显示“打开”对话框。*/
function test() {
    Application.ChangeFileOpenDirectory("D:\\")
    Application.Dialogs.Item(wdDialogFileOpen).Show()
}
```
