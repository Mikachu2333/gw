# View.ReadingLayoutAllowMultiplePages

设置或返回一个 **Boolean** 类型的值，该值代表阅读版式视图是否并排显示两页。




## 语法

express.**ReadingLayoutAllowMultiplePages**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


WPS 可能允许、也可能不允许在阅读版式视图中显示两页。如果 WPS 不能保持合理的纵横比，则 WPS 将只显示一页。因此，如果将 **ReadingLayoutAllowMultiplePages** 属性设置为 **True** 并且 WPS 无法显示两页，则该属性将设为 **False** ，并且 WPS 将仅显示单页。




## 示例


```JavaScript
/*以下示例在版式允许的情况下在阅读版式视图中并排显示两页。*/
function test()
{
ActiveWindow.View.ReadingLayout = true
ActiveWindow.View.ReadingLayoutAllowMultiplePages = true
}
```
