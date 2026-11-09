# ReflectionFormat.Transparency

返回或设置反射效果的透明度，其值为从 0.0（不透明）到 1.0（全透明）。可读/写 **Single** 类型。



## 语法

express.**Transparency**

express   一个代表 **ReflectionFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状的反射效果的透明度。*/
function test() {
    let rftFormat = ActiveDocument.Shapes.Item(1).Reflection
    alert(rftFormat.Transparency)
}
```


```JavaScript
/*本示例设置所选文本的字体的反射效果的透明度。*/
function test() {
    Selection.Font.Reflection.Transparency = 0.6
}
```
