# Options.EnableLivePreview

设置或返回 **Boolean** 值，该值表示显示还是隐藏在使用支持预览的库时所出现的库预览。如果为 **True** ，将在应用命令之前在文档中显示预览。可读/写。



## 语法

express.**EnableLivePreview**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


此属性对应于 **“选项”** 对话框中 **“视图”** 选项卡上 **“启用实时预览”** 复选框。



## 示例


```JavaScript
/*本示例启用“选项”对话框中“视图”选项卡上“启用实时预览”选项。*/
function test() {
    Options.EnableLivePreview = true
}
```


```JavaScript
/*本示例显示“选项”对话框中“视图”选项卡上“启用实时预览”选项的状态。*/
function test() {
    alert(Options.EnableLivePreview)
}
```
