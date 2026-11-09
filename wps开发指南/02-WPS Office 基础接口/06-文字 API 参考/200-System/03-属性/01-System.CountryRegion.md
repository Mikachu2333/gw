# System.CountryRegion

返回系统的国家/地区设定。 **WdCountry** 类型，只读。



## 语法

express.**CountryRegion**

express   一个代表 **System** 对象的变量。

## 类型

WdCountry

## 示例


```JavaScript
/*本示例判断如果 CountryRegion 属性值为 wdUS，则将上边距值从磅转换为英寸并显示。*/
function test() {
    if (Application.System.CountryRegion == wdUS) {
        let topMargin = ActiveDocument.PageSetup.TopMargin
        alert("Top margin is " + Application.PointsToInches(topMargin))
    }
}
```


```JavaScript
/*本示例显示系统的国家/地区设定是否为wdChina。*/
function test() {
    alert(Application.System.CountryRegion == wdChina)
}
```
