# ContentControl.Appearance

返回或设置内容控件的外观。可读/写 **[WdContentControlAppearance](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdContentControlAppearance)** 类型。



## 语法

express.**Appearance**

express   一个代表 **ContentControl** 对象的变量。

## 类型

WdContentControlAppearance

## 示例


```JavaScript
/*本示例显示活动文档上第一个内容控件的外观是否为wdContentControlBoundingBox。*/
function test() {
    alert(ActiveDocument.ContentControls.Item(1).Appearance == wdContentControlBoundingBox)
}
```


```JavaScript
/*本示例设置所选内容中第二个内容控件的外观。*/
function test() {
    let control = Selection.ContentControls.Item(2)
    control.Appearance = wdContentControlTags
}
```
