export default () => ({
  //count es una propiedad reactivva que vue lo identificara
  count: 1,
  lastMutation: "none",
  isLoading: false,
  lastRandomInt: 0,
  //las mezclas propiedades de states deben estar en modulosno amontodandos como arriba
});
