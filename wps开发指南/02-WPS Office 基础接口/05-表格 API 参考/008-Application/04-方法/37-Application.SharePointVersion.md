# Application.SharePointVersion

返回在站点上运行的指定 URL 的 SharePoint Foundation 实例的版本号。



## 语法

express.**SharePointVersion(bstrUrl)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| bstrUrl | 必选 | string | 要检查的网站 URL。 |

## 返回值

Long

## 示例


```JavaScript
/*本示例显示网站上运行的 SharePoint Foundation 版本号。*/
function test() {
    alert(Application.SharePointVersion("https://bbs.wps.cn"))
}
```


```JavaScript
/*本示例将网站上运行的 SharePoint Foundation 版本号赋值给A2单元格。*/
function test() {
    Range("A2").Value2 = Application.SharePointVersion("https://bbs.wps.cn")
}
```
