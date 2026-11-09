# PageSetup.Pages

返回或设置 **Pages** 集合中的页数。



## 语法

express.**Pages**

express   一个代表 **PageSetup** 对象的变量。

## 类型

Pages

## 示例


```JavaScript
/*本示例显示活动工作表页数。*/
function test() {
    alert(ActiveSheet.PageSetup.Pages.Count)
}
```


```JavaScript
/*本示例显示活动工作表第一个页面页眉居中内容。*/
function test() {
    alert(ActiveSheet.PageSetup.Pages.Item(1).CenterHeader.Text)
}
```
