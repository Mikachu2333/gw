# Options.MonthNames

返回或设置显示月份名称的格式。 **WdMonthNames** 类型，可读写。



## 语法

express.**MonthNames**

express   一个代表 **Options** 对象的变量。

## 类型

WdMonthNames

## 示例


```JavaScript
/*本示例设置 WPS 显示月份名称的格式为阿拉伯数字格式。*/
function test() {
    Options.MonthNames = wdMonthNamesArabic
}
```


```JavaScript
/*本示例显示 WPS 展示月份名称的格式。*/
function test() {
    switch (Options.MonthNames) {
        case wdMonthNamesArabic:
            alert("阿拉伯数字格式")
            break
        case wdMonthNamesEnglish:
            alert("英文格式")
            break
        case wdMonthNamesFrench:
            alert("法文格式")
            break
    }
}
```
