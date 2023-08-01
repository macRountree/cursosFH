<template>
  <q-page class="q-ma-md">
    <h1 class="text-h3">Forms</h1>

    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
      >
        <q-input
          filled
          v-model="useForm.email"
          label="Tu correo"
          type="email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'PEste campo es obligatorio',
            isValidEmail,
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="useForm.password"
          label="Your Password *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'PEste campo es obligatorio',
          ]"
        />

        <q-checkbox
          v-model="useForm.conditions"
          label="Acepto Terminos y condiciones"
          :style="
            useForm.errorInConditions && !useForm.conditions && 'color:red'
          "
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "myForms",

  setup() {
    const $q = useQuasar();
    const useForm = ref({
      email: "",
      password: "",
      conditions: false,
      errorInConditions: false,
    });
    return {
      useForm,
      onSubmit() {
        useForm.value.errorInConditions = false;
        if (!useForm.value.conditions) {
          $q.notify({
            message: "Aceptar Condiciones",
            icon: "las la-exclamation-circle",
          });
          console.log("Aceptar condiciones");
          useForm.value.errorInConditions = true;
          return;
        }
      },
      //queremos tener el mismo valor a la hora de oprimir el boton reset
      //para eso cada valor de useForm lo asigno igual al objeto use form
      onReset() {
        useForm.value = {
          email: "",
          password: "",
          conditions: false,
          errorInConditions: false,
        };
      },
      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "El correo no parece ser válido";
      },
    };
  },
});
</script>
