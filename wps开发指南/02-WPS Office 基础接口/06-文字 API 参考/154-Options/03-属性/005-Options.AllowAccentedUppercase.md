# Options.AllowAccentedUppercase

如果当一个法语字符改成大写字母时重音仍保留，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AllowAccentedUppercase**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


本属性只影响标准法语文本。对于其他语言的文本，尽管将 **AllowAccentedUppercase** 属性设为 **False** ，仍然保留重音。

当一个重音符号被删除之后，如果把一个字符改回小写字母，则重音不会再出现。



## 示例


```JavaScript
/*当法语字符被改为大写字母时，本示例将设置 WPS 删除重音符号。*/
function test() {
    Options.AllowAccentedUppercase = false
}
```


```JavaScript
/*本示例显示当一个法语字符改成大写字母时重音是否仍保留。*/
function test() {
    let blnUppercaseAccents = Options.AllowAccentedUppercase
    alert(blnUppercaseAccents)
}
```
