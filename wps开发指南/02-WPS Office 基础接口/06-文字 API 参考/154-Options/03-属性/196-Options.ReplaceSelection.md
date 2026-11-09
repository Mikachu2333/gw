# Options.ReplaceSelection

如果键入或粘贴的内容替换选定内容，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ReplaceSelection**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果在选定内容之前添加键入或粘贴的内容，并保留选定内容，则为 **False** 。



## 示例


```JavaScript
/*本示例将 WPS 设置为在选定内容之前添加键入或粘贴的内容，并保留选定内容。*/
function test() {
    Options.ReplaceSelection = false
}
```


```JavaScript
/*本示例显示“选项”对话框中“编辑”选项卡上“编辑选项”下“键入内容替换所选文字”选项的当前状态。*/
function test() {
    alert(Options.ReplaceSelection)
}
```
