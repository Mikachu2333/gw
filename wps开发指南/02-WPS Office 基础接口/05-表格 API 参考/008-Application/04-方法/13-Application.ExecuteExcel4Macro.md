# Application.ExecuteExcel4Macro

执行一个 ET 宏函数，然后返回此函数的结果。返回结果的类型取决于函数的类型。



## 语法

express.**ExecuteExcel4Macro(String)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| String | 必选 | string | 一个不带等号的 ET 宏语言函数。所有引用必须是像 R1C1 这样的字符串。如果 _String_ 内包含嵌套的双引号，则必须写两个。例如，要运行宏函数 =MID("sometext",1,4)，_String_ 必须为 “MID(""sometext"",1,4)”。 |

## 返回值

Variant

## 说明


ET 宏不在当前工作簿或工作表的环境中求值。也就是说所有的引用都应该是外部引用，而且需要明确指定工作簿名。例如，要在 Book1 中执行 ET 宏“My\_Macro”，必须使用“Book1!My\_Macro()”。如果不指定工作簿名，此方法将失效。



## 示例


```JavaScript
/*本示例执行一个宏函数，并显示执行后的结果。*/
function test() {
    alert(Application.ExecuteExcel4Macro('GET.DOCUMENT(1)'))
}
```


```JavaScript
/*本示例执行一个宏函数，并将执行后的结果赋值给A1单元格。*/
function test() {
    Range("A1").Value2 = Application.ExecuteExcel4Macro('GET.WORKBOOK(2)')
}
```
