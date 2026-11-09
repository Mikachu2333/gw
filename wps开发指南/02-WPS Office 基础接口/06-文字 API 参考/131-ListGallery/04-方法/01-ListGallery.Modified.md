# ListGallery.Modified

如果指定的列表模板不是列表库中相应位置的内置列表模板，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Modified(Index)**

express   一个代表 **ListGallery** 对象的变量。

## 返回值

boolean

## 说明


用 **[Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGallery/member/Reset)** 方法可将一个列表库中的列表模板设置为内置列表模板。



## 示例


```JavaScript
/*本示例判断“项目符号和编号”对话框中“项目符号”选项卡上的第一个列表模板是否被修改，如果被修改则重置，否则通知用户。*/
function test() {
    let listGallery = Application.ListGalleries.Item(wdBulletGallery)
    if (listGallery.Modified(1)) {
        listGallery.Reset(1)
    } else {
        alert("This is the built-in list template.")
    }
}
```


```JavaScript
/*本示例显示“项目符号和编号”对话框中“编号”选项卡上的第三个列表模板是否为内置模板。*/
function test() {
    let listGallery = Application.ListGalleries.Item(wdNumberGallery)
    alert(!listGallery.Modified(3))
}
```
