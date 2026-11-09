# SlideShowWindows.Count

返回指定集合中的对象数目。



## 语法

express.**Count**

express   一个代表 **SlideShowWindows** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示幻灯片放映的窗口的数量。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    alert(Application.SlideShowWindows.Count)
}
```
