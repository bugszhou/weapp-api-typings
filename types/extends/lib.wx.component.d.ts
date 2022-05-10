declare namespace WechatMiniprogram.Component {
  type Options<
    TData extends DataOption,
    TProperty extends PropertyOption,
    TMethod extends MethodOption,
    TCustomInstanceProperty extends IAnyObject = {},
    TIsPage extends boolean = false,
  > = Partial<Data<TData>> &
    Partial<Property<TProperty>> &
    Partial<Method<TMethod, TIsPage>> &
    Partial<OtherOption> &
    Partial<Lifetimes> &
    Partial<TCustomInstanceProperty> &
    ThisType<
      Instance<TData, TProperty, TMethod, TCustomInstanceProperty, TIsPage>
    >;
}
