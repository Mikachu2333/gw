# ReflectionFormat.Size

以反射形状的百分比形式返回或设置反射的大小，其值介于 0 到 100 之间。可读/写。



## 语法

express.**Size**

express   一个代表 **ReflectionFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状的反射形状的大小。*/
function test() {
    let rftFormat = ActiveDocument.Shapes.Item(1).Reflection
    alert(rftFormat.Size)
}
```


```JavaScript
/*本示例设置所选文本的字体的反射形状大小。*/
function test() {
    Selection.Font.Reflection.Size = 70
}
```
