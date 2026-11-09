# DefaultWebOptions.SaveNewWebPagesAsWebArchives

如果为 **True** ，则 WPS 使用“单个文件网页”（以前称为“Web 存档”）格式保存新的网页。可读/写 **Boolean** 类型。



## 语法

express.**SaveNewWebPagesAsWebArchives**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


设置 **SaveNewWebPagesAsWebArchives** 属性并不会更改保存的网页的格式。若要更改其格式，必须将其分别打开并使用 **[SaveAs2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SaveAs2)** 方法来设置网页的格式。



## 示例


```JavaScript
/*本示例启用 SaveNewWebPagesAsWebArchives 属性以使 Web 页保存时，它们保存在单个文件网页的格式。*/
function test() {
    Application.DefaultWebOptions().SaveNewWebPagesAsWebArchives = true
}
```


```JavaScript
/*本示例显示 WPS 是否使用“单个文件网页”格式保存新的网页。*/
function test() {
    alert(Application.DefaultWebOptions().SaveNewWebPagesAsWebArchives)
}
```
