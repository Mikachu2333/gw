# Options.ShowMarkupOpenSave

返回或设置一个 **Boolean** 类型的值，该值代表打开或保存文件时 WPS 是否显示隐藏标记。



## 语法

express.**ShowMarkupOpenSave**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


 **ShowMarkupOpenSave** 属性对应于 **“选项”** 对话框的 **“安全性”** 选项卡上 **“隐私选项”** 下 **“打开或保存时标记可见”** 选项。



## 示例


```JavaScript
/*本示例启用“选项”对话框的“安全性”选项卡上“隐私选项”下“打开或保存时标记可见”选项。*/
function test() {
    Options.ShowMarkupOpenSave = true
}
```


```JavaScript
/*本示例显示“选项”对话框的“安全性”选项卡上“隐私选项”下“打开或保存时标记可见”选项的当前状态。*/
function test() {
    alert(Options.ShowMarkupOpenSave)
}
```
