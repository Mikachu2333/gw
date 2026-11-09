# Application.RecentFiles

返回一个 **[RecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFiles/obj)** 集合，该集合代表最近存取过的文件。



## 语法

express.**RecentFiles**

express   一个代表 **Application** 对象的变量。

## 类型

RecentFiles

## 示例


```JavaScript
/*本示例打开 RecentFiles 集合中的第一项（即“文件”菜单上列出的第一个文档名）。*/
function test() {
    if (Application.RecentFiles.Count >= 1) {
        Application.RecentFiles.Item(1).Open()
    }
}
```


```JavaScript
/*本示例显示 RecentFiles 集合中的每个文件的名称。*/
function test() {
    for (let i = 1; i <= Application.RecentFiles.Count; i++) {
        alert(Application.RecentFiles.Item(i).Name)
    }
}
```
