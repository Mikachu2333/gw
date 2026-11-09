# AddIn.Path

返回 **String** ，该值代表到指定的 **[AddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/obj)** 对象的路径。只读。



## 语法

express.**Path**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 说明


如果使用此属性返回未加载的加载宏的路径，则会导致错误。  

路径中不包括最后的反斜线 (\\) 或指定对象的名称。



## 示例


```JavaScript
/*本示例将当前演示文稿保存到与应用程序第一个加载项路径相同的文件夹中。*/
function test() {
    let path = Application.AddIns.Item(1).Path + "\\test presentation"
    ActivePresentation.SaveAs(path)
}
```


```JavaScript
/*本示例显示应用程序中名为“addin”的加载项的路径。*/
function test() {
    alert(Application.AddIns.Item("addin").Path)
}
```
