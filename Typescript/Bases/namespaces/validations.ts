//se usan cuando se realizan librerias oframeworks
//es un agrupador global de una categoria
//casi no se usa

namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (fecha: Date): boolean => {
    return isNaN(fecha.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("Maxi"));
