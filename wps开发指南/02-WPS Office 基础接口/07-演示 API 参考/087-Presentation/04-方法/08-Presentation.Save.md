# Presentation.Save

保存指定的演示文稿。



## 语法

express.**Save()**

express   一个代表 **Presentation** 对象的变量。

## 返回值

void

## 说明


使用 **[SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SaveAs)** 方法可保存尚未保存的演示文稿。若要判断演示文稿是否已保存，请测试 **[FullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/FullName)** 或 **[Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/Path)** 属性是否非空。如果磁盘上已存在与指定演示文稿同名的文件，将覆盖该文件且不显示警告信息。

若要将演示文稿标记为已保存，但不将其写入磁盘，请将 **Saved** 属性设为 **msoTrue** 。



## 示例


```JavaScript
/*如果当前演示文稿在上次保存后进行了更改，则本示例保存当前演示文稿。*/
function test() {
    let presentation = Application.ActivePresentation
    if (presentation.Saved == msoFalse && presentation.Path != "") {
        presentation.Save()
    }
}
```


```JavaScript
/*本示例保存第一篇演示文稿并通知用户。*/
function test() {
    let presentation = Presentations.Item(1)
    presentation.Save()
    alert("已将演示文稿保存。")
}
```
