# SlicerCache.SortUsingCustomLists

返回或设置指定切片器缓存中的项是否将按自定义列表排序。可读/写



## 语法

express.**SortUsingCustomLists**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

boolean

## 说明


 **SortUsingCustomLists** 属性对应于 **­“切片器设置”** 对话框的 **“排序时使用自定义列表”** 复选框的设置。若要访问与当前安装的 ET 关联的自定义列表，请依次单击 **“文件”** 选项卡、 **“选项”** 、 **“高级”** ，然后单击 **“常规”** 类别下的 **“编辑自定义列表”** 。

 **SortUsingCustomLists** 属性只适用于筛选非 OLAP 数据源的切片器。试图从筛选 OLAP 数据源的切片器缓存 ( **SlicerCache** . **[OLAP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/OLAP)** \= **True** ) 访问此属性，将生成运行时错误。



## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_age”的切片器缓存中的项是否按自定义列表排序。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_age").SortUsingCustomLists)
}
```


```JavaScript
/*本示例将第一张工作簿上第一个切片器缓存中的项设置为不按自定义列表排序。*/
function test() {
    let slcCache = Workbooks.Item(1).SlicerCaches(1)
    slcCache.SortUsingCustomLists = false
}
```
