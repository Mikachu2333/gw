# RecentFiles.Maximum

返回或设置可以显示在 **“文件”** 菜单上的最近使用的文件的最大数目。可读写 **Long** 类型。



## 语法

express.**Maximum**

express   一个代表 **RecentFiles** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将禁用最近使用的文件列表。*/
function test() {
    Application.RecentFiles.Maximum = 0
}
```


```JavaScript
/*本示例使最近使用的文件列表上的项目个数增加 1 个。*/
function test() {
    if (Application.RecentFiles.Maximum !== 100) {
        Application.RecentFiles.Maximum += 1
    }
}
```
