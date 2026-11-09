# ThemeFonts.Count

获取一个 **Long** 类型的值，指示 **ThemeFonts** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **ThemeFonts** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的主题字体方案中标题字体的数量。*/
function test() {
    alert(ActiveWorkbook.Theme.ThemeFontScheme.MajorFont.Count)
}
```
