# RecentFiles.Maximum

返回或设置最近使用文件清单中文件数目的上限。 **Long** 类型，可读写。



## 语法

express.**Maximum**

express   一个代表 **RecentFiles** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将最近使用的文件列表中的最多文件数设置为 6。*/
function test() {
    Application.RecentFiles.Maximum = 6
}
```


```JavaScript
/*此示例显示最近使用的文件列表中文件数目的上限。*/
function test() {
    alert(`最近使用的文件数量的上限：${Application.RecentFiles.Maximum}`)
}
```
