# Application.RecentFiles

返回一个 **[RecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/obj)** 集合，该集合表示最近使用的文件的列表。



## 语法

express.**RecentFiles**

express   一个代表 **Application** 对象的变量。

## 类型

RecentFiles

## 示例


```JavaScript
/*本示例将最近使用的文件列表中的最多文件数设置为6。*/
function test() {
    Application.RecentFiles.Maximum = 6
}
```


```JavaScript
/*本示例显示RecentFiles属性返回集合中的最近使用文件列表的最后一条。*/
function test() {
    if (Application.RecentFiles.Count > 0) {
        alert(Application.RecentFiles.Item(Application.RecentFiles.Count).Name)
    }
}
```
