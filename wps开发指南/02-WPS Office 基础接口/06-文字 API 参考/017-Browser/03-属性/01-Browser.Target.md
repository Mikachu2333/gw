# Browser.Target

返回或设置 **Previous** 方法和 **Next** 方法定位的文档项。 **WdBrowseTarget** 类型，可读写。



## 语法

express.**Target**

express   一个代表 **Browser** 对象的变量。

## 类型

WdBrowseTarget

## 示例


```JavaScript
/*本示例将插入点移至活动文档中的下一处批注之前。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseComment
    browser.Next()
}
```


```JavaScript
/*本示例显示 Next 或 Previous 方法找到的文档项目是否为wdBrowseComment。*/
function test() {
    alert(Application.Browser.Target == wdBrowseComment)
}
```
