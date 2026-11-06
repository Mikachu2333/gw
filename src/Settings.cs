namespace gw_mika.Properties {

    // 通过此类可以处理设置类的特定事件:
    //  在更改某个设置的值之前将引发 SettingChanging 事件。
    //  在更改某个设置的值之后将引发 PropertyChanged 事件。
    //  在加载设置值之后将引发 SettingsLoaded 事件。
    //  在保存设置值之前将引发 SettingsSaving 事件。
    internal sealed partial class Settings {

        /// <summary>
        /// 只把指定的用户设置恢复成默认值并保存。
        /// 不要用 Settings.Default.Reset() —— 它清空的是全部用户设置，
        /// 而界面上的确认语只说"恢复默认字体设置/页面设置"，
        /// 顺带被抹掉的还有 VBA 运行历史与脚本路径等无关内容。
        /// </summary>
        internal void ResetNames(params string[] names)
        {
            foreach (string name in names)
            {
                var prop = this.Properties[name];
                if (prop == null) continue;
                // DefaultValue 一律以字符串形态存着（来自 app.config 的 DefaultSettingValue），
                // 而 this[name] 会按 PropertyType 校验：直接把字符串塞给 float/int/bool/Font
                // 设置会抛 SettingsPropertyWrongTypeException，导致重置功能整体失效。
                object dv = prop.DefaultValue;
                string s = dv as string;
                if (s != null && prop.PropertyType != typeof(string))
                    dv = System.ComponentModel.TypeDescriptor.GetConverter(prop.PropertyType)
                            .ConvertFrom(null, System.Globalization.CultureInfo.InvariantCulture, s);
                this[name] = dv;
            }
            this.Save();
        }
    }
}
